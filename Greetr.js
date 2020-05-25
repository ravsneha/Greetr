/**
This project is creating a library similar to jQuery framework to explore
jQuery's functionality and learning the code behind jQuery methods

Greetr
  - has english, french, spanish, and tamil languages to greet users with
  - allows us to access Greetr using similar jQuery syntax ($G)
  - accesses HTML elements and supports jQuery and similar libraries
    that use the $ keyword
  - lets people give their first and last name and returns a formal/informal greeting accordingly
**/

;(function(global, $){

  //basic set up of object and prototype, 'new' object is returned
  var Greetr = function(fName, lName, lang) {
    return new Greetr.init(fName, lName, lang);
  }

  //hidden from being changed by users using IIFE
  var supportedLangs = ['en', 'es', 'fr', 't'];

  //informal greetings
  var greetings = {
    en: 'Hey',
    es: 'Hola',
    fr: 'Salut',
    t: 'Vanakka'
  }
  //formal greetings
  var formalGreetings = {
    en: 'Hello',
    es: 'Saludos',
    fr: 'Bonjour',
    t: 'Vannakam'
  }

  //logger messages
  var logMsg = {
    en: 'Logged in',
    es: 'Inició sesión',
    fr: 'Vous êtes connecté',
    t: 'Ninkal Unulainthuirukal'
  }

  Greetr.prototype = {

    fullName: function() {
      return this.fName + " " + this.lName;
    },

    validate: function() {
      if(supportedLangs.indexOf(this.lang) === -1) {
        throw "Invalid language";
      }
    },

    //informal greeting function, returns a string
    greeting: function() {
      return greetings[this.lang] + ' ' + this.fName + "!";
    },

    //formal greeting function, returns a string
    formalGreeting: function() {
      return formalGreetings[this.lang] + ' ' + this.fullName() + ".";
    },

    //prints the greeting message based on whether its formal or not
    // takes in a boolean to decide whether a formal greeting is given
    greet: function(formal) {
      var msg;

      if(formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if(console) {
        console.log(msg);
      }

      return this; //returns our current object during execution time so we
      // can make this chainable
    },

    //logs a message to the console telling the user they are logged in
    //in the language of their choice
    log: function() {
      if (console) {
        console.log(logMsg[this.lang] + ": " + this.fullName());
      }
      return this;
    },

    //sets the language of the Greetr object
    //implements our validation to check if language is valid
    setLang: function(newLang){
      this.lang = newLang;
      this.validate();
      return this;
    },

    //sets the first name of the user
    setFName: function(fName){
      this.fName = fName;
      return this;
    },

    //sets the last name of the user
    setLName: function(lName){
      this.lName = lName;
      return this;
    },

    //calling the existing greet methods through the html button
    HTMLGreeting: function(selector, formal) {
      if(!$) {
        throw "jQuery not loaded";
      }

      if(!selector) {
        throw "Missing jQuery Selector";
      }

      var msg;
      if(formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      //sets the selector html to the value of the message
      $(selector).html(msg);

      return this;

    },

  };

  //initializes the greetr object
  Greetr.init = function(fName, lName, lang){
    var self = this;
    self.fName = fName || "";
    self.lName = lName || "";
    self.lang = lang || "en";
    self.validate(); //makes sure the language is acceptable
  }

  //sets the prototype of Greetr objects
  Greetr.init.prototype = Greetr.prototype;

  //makes it so we can call greetr using G$ or Greetr
  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
