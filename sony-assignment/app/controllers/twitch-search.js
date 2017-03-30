import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        toggleBody() {
            this.toggleProperty('isExpanded');
        },
        fetchResults(){
            console.log(this.model.q);
            var that = this;
            Ember.$.ajax('http://httpbin.org/ip', {
                "type": 'GET', // HTTP method
                "dataType": 'JSON', // type of data expected from the API response,
                "async": true,
                "data": { // Begin data payload
                    "auth": {
                        "type" : "basic",
                        "password": "xxx",
                        "username": "someone"
                    },
                    "requestId" : 15,
                    "method": {
                        "name": "getUserAvailabilityAndInfo",
                        "params": {
                            "userId" : "000",
                            "peopleOnly" : "1"
                        }
                    }
                }, // End data payload
                "success": function (data, textStatus, jqXHR) {
                    Ember.run(function() {
                        that.set('model.searchResults',data);
                    });
                    return data;
                },
                "error": function (jqXHR, textStatus, errorThrown) {
                    window.console.log(jqXHR);
                }
            });
        }
    }
});
