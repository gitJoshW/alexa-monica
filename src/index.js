'use strict';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'MonicaIntent': function () {
        this.emit('SimmerMonica')
    },
    'SayHello': function () {
        this.emit(':tell', 'Hello World!');
    },
    'SimmerMonica': function () {
        this.emit(':tell', 'Monica, please simmer down');
};
