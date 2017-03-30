import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return{
            q : "",
            searchResults : [],
            start : true,
            limit : 5,
            page : 0,
            totalPages : 0,
            prevPage : null,
            nextPage : null,
        }
    }
});