'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-type-url');
var EventSchema = new Schema({  
   looks: {
      url: {
        image: { type: String, default: 'image/png' },
    }
  },
  name: { type: String, default: 'hahaha' },
  comment: { type: String, default: 'kindly enter message'},
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Events', EventSchema);