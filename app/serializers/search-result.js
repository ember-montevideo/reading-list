/* global moment */
import DS from 'ember-data';

export default DS.Serializer.extend({
  extract(store, typeClass, payload/*, id, requestType*/) {
    return payload.docs.map(result => ({
      id: result.key,
      title: result.title,
      author: (result.author_name && result.author_name[0]) || 'Unknown Author',
      publicationDate: moment(result.first_publish_year, "YYYY")
    }));
  }
});
