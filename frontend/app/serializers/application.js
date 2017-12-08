import DS from 'ember-data';
import PaginationSerializer from '../mixins/pagination-serializer';

export default DS.JSONAPISerializer.extend(PaginationSerializer, {
});
