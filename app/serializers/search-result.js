/* global moment */
import DS from 'ember-data';
/*
 * claim: property => value
 */

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

function labelsValue(entity) {
  let labels = entity.labels;

  if (!labels || !(labels.en || labels.es)) {
    return;
  }

  return (labels['en'] && labels['en'].value) || (labels['es'] && labels['es'].value);
}

function title(entity) {
  return claimValue(entity, "P1476") || claimValue(entity, "P357") || labelsValue(entity);
}

function findById(entities, id) {
  return id && entities.find(e => e.id === id);
}

function author(book, authors) {
  let authorId = claimValue(book, 'P50'),
      author = findById(authors, `Q${authorId}`);

  if (author) {
    return labelsValue(author);
  }
}

export default DS.Serializer.extend({
  extract(store, typeClass, payload/*, id, requestType*/) {
    // return payload.docs.map(result => ({
    //   id: result.key.replace(/\//g, '_'),
    //   title: result.title,
    //   author: (result.author_name && result.author_name[0]) || 'Unknown Author',
    //   publicationDate: moment(result.first_publish_year, "YYYY")
    // }));
    return payload.books.map(entity => ({
      id: entity.id,
      title: title(entity),
      author: author(entity, payload.authors) || 'Unknown Author',
      publicationDate: moment('1980', "YYYY")
    }));
  }
});
