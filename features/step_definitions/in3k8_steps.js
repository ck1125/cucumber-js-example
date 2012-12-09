var zombie = require("zombie");
var assert = require("assert");

var in3k8Steps = function() {
  var Given = When = Then = this.defineStep;
  var browser = new zombie.Browser({runScripts:false, debug:false});

  Given(/^I am on IN3K8$/, function(callback) {
    browser.visit(
	    "http://in3k8.com",
	    function(err, browser, status) {
	      if (err) {
	        console.log('an error occurred',err.message);		
		  }
	      callback();
	    }
	  );
  });

  Then(/^I see navigation$/, function(callback) {
    var links = browser.queryAll('.nav a');
	assert.ok(links.length > 0);
	callback();
  });
};

module.exports = in3k8Steps;
