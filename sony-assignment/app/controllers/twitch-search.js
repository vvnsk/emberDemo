import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        fetchResults(origin){
            var that = this;
            var setPrevPage = function(){
                var page = that.model.page;
                var totalPages = that.model.totalPages;
                Ember.run(function() {
                    if(page > 1 && totalPages > 1) {
                        that.set('model.prevPage',page - 1);
                    } else {
                        that.set('model.prevPage',null);
                    }
                    
                });
            };
            var setNextPage = function(){
                var page = that.model.page;
                var totalPages = that.model.totalPages;
                Ember.run(function() {
                    if(page < totalPages && totalPages > 1) {
                        that.set('model.nextPage',page + 1);
                    } else {
                        that.set('model.nextPage',null);
                    }
                });
            };
           var setPages = function(){
                var page = that.model.page;
                var totalPages = that.model.totalPages;
                var list = [];

                for(var i=page-2;list.length<5&&i<totalPages;i++){
                    if(i>0)
                        list.push(i)
                }
                console.log(list);
                Ember.run(function() {
                    that.set('model.pages',list);
                });
            }
            Ember.$.ajax('https://api.twitch.tv/kraken/search/streams?query='+that.model.q+'&limit='+that.model.limit+'&offset='+((that.model.page)*that.model.limit), {
                "type": 'GET', // HTTP method
                "dataType": 'JSON', // type of data expected from the API response,
                "async": true,
                "headers": {
                    'Client-ID': '8dr67w9awdrzf2kyglknzmhk4wfiii'
                },
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
                        that.set('model.searchResults',data.streams);
                        that.set('model.start',false);
                        if(origin=="search"){
                            that.set('model.page',0);
                        }
                        that.set('model.totalPages',data._total/that.model.limit);
                        setPages();setPrevPage();setNextPage();
                    });
                    
                    return data;
                },
                "error": function (jqXHR, textStatus, errorThrown) {
                    window.console.log(jqXHR);
                }
            });
        },selectPage: function(number) {
            var that = this;
            Ember.run(function() {
                that.set('model.page', number-1);
            });
            this.send('fetchResults','page');
        }
    }
});
