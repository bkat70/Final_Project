'use strict';

var Backbone = require('backbone');
//var _= require('lodash');
var HouseItemView = require('./HouseItemView');
//var HouseView = require('./HouseView');

module.exports = Backbone.View.extend({
  className: 'allHousesList',
  id: 'dynamicHouseList',
  /*global TFT:true*/
  /*eslint no-undef: "error"*/
  template: TFT.allHouses,
  _children: [],
  
  render: function () {
    this.$el.append(this.template());

    this.collection.each(function (model) {
      var itemView = new HouseItemView({ model: model });

      this._children.push(itemView);
      this.$('.housesList').append(itemView.render().el);
    }, this);

    return this;
  },
  
  remove: function () {
    this._children.forEach(function (view) {
      view.remove();
    });
    Backbone.View.prototype.remove.call(this);
  }
});
