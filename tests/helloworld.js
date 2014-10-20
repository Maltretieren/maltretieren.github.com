console.log('Loading a web page');
var url = 'http://www.phantomjs.org/';
var page = require('webpage').create();
page.open('http://github.com/', function() {
  page.render('github.png');
  phantom.exit();
});
