import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return{
            q : "",
            searchResults : [],
            start : true,
            limit : 4,
            page : 0,
            totalPages : 0,
            totalResults : 0,
            prevPage : null,
            nextPage : null,
        }
    }
});