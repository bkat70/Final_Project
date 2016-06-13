//temp Notes: some open questions here

'use strict';
var Backbone = require('backbone');

var Router = Backbone.Router.extend({
  routes: {
    '': 'showHome',
    'houses': 'showAllHouses',
    'houses/:id': 'showHouse',
	'addHouse': 'showHouseForm',
	'deleteHouse': 'deleteHouse'
  },
  //this I am not clear about
  initialize: function (options) {
    options || {};//don't quite understand this code
    this.appController = options.appController;
  },
  showHome: function () {
    this.appController.showHome();
  },
  showAllHouses: function () {
    this.appController.showAllHouses();
  },
  showHouseForm: function(){
	console.log('no add form yet: under construction');
  },	
  showHouse: function (id) {
    this.appController.showHouse({ id: id });
  },
  
  deleteHouse:function (id) {
    this.appController.deleteHouse({ id: id});
  }

});

module.exports = Router;