requirejs.config({
  baseUrl: "/portal-standalone",
  paths: {
    components: "./knockout-components",
    knockout: "./js/external/knockout-3.5.0",
    text: "./js/external/text",
    domReady: "./js/external/domReady",
    jquery: "./js/external/jquery-3.3.1.min",
    js: './js'
  }
});

require([
  //"knockout",
  //"app-viewmodel",
  "domReady!",
  "js/register-components",
  "js/message-bus"
], function(/*ko, appViewModel*/) {
  //ko.applyBindings(new appViewModel());
});
