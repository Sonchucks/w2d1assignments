var getHTML = require('../Step\ 5/http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printUpperCase (html) {
  console.log(html.split('').reverse().join(''));
}

getHTML(requestOptions, printUpperCase);

