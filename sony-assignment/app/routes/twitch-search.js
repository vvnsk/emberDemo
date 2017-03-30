import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return{
            list : ['Injustice', 'Fifa', 'Call of Duty'],
            q : "hey",
            isExpanded : true,
            searchResults : {"origin":'null'}
        }
    }
});
