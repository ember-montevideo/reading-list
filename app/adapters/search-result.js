import Ember from 'ember';
import DS from 'ember-data';

let $ = Ember.$;

function searchEntitiesUrl(term) {
  let query = $.param({
    // asks remote server to include `Access-Control-Allow-Origin` header on the response
    //origin: 'http://reading-list.com:4200',
    format: 'json',
    language: 'en',

    action: 'wbsearchentities',
    limit: '50',
    type: 'item',
    search: term
  });

  return `https://www.wikidata.org/w/api.php?${query}&callback=?`;
}

function getEntitiesUrlByIds(ids) {
  let query = $.param({
        //origin: 'http://reading-list.com:4200',
        format: 'json',
        languages: 'en',

        action: 'wbgetentities',
        props: 'claims|descriptions|labels',
        ids: ids.join('|')
      });

  return `https://www.wikidata.org/w/api.php?${query}&callback=?`;
}

function getEntitiesUrl(entities) {
  let ids = entities.map(entity => entity.id);

  return getEntitiesUrlByIds(ids);
}

function claimValue(entity, property) {
  let claim = entity.claims && entity.claims[property],
      datavalue;

  if (!claim) {
    return;
  }

  datavalue = claim[0].mainsnak.datavalue;

  switch(datavalue.type) {
    case "string":
      return datavalue.value;
    case "wikibase-entityid":
      return datavalue.value["numeric-id"];
  }
}

function isBookEntity(entity) {
  let value = claimValue(entity, 'P31');

  return value === 571;
}

function filterBookEntities(response) {
  let entities = response.entities;

  return Object
    .keys(entities)
    .filter(key => isBookEntity(entities[key]))
    .map(key => entities[key]);
}

function mapEntitiesToArray(response) {
  let entities = response.entities;

  return Object
    .keys(entities)
    .map(key => entities[key]);
}

function includeBookMetadata(books) {
  let authorIds = books.map(book => claimValue(book, 'P50')), // P50 => author
      c = [],
      url;

  authorIds.forEach(id => id && c.push(`Q${id}`));

  url = getEntitiesUrlByIds(c);

  return $.getJSON(url).then(response => ({
    books,
    authors: mapEntitiesToArray(response)
  }));
}

function fetchSearchResultEntities(response) {
  return $.getJSON(getEntitiesUrl(response.search));
}

export default DS.Adapter.extend({
  findQuery(store, type, term) {
    return $
      .getJSON(searchEntitiesUrl(term))
      .then(fetchSearchResultEntities)
      .then(filterBookEntities)
      .then(includeBookMetadata);
  }
});
