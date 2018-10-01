/*
Step 5

- Don't forget to commit your work from Step 4 if you haven't already!
- Make a new file for your module. You can call the file whatever you
want, but for the purposes of the exercise we'll call it
http-functions.js.
- Remember that your module needs to export the function so it is
available via require. You can export an object with the function as
a property if you prefer, but the example below exports the function
directly for the sake of simplicty.
- You can use the template below and copy the contents of your
getHTML function into it.

// module.exports = function getHTML (options, callback) {
//     /* Your code here
// };

- To test it, make another .js file that will require your module to
test it.
- You can paste in your printHTML callback from the previous Step.

// var getHTML = require('./http-functions');

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step5.html'
// };

Considerations

- Remember that your function requires the https library - if you
kept the var https = require('https'); declaration outside of the
function, you'll need to either:
  - Copy it to the beginning of your exported function
  - Copy it into the top of the http-functions.js file, where it
  will be in scope for the exported function and any other functions
  in scope (making it a private variable).
- Are either of these solutions preferable over the other? What
situations might affect that? If you used the filename
http-functions.js, does that offer any hints?
*/

'use strict';

var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options, function (response) {
    var dataResults = [];

    response.setEncoding('utf8');

    response.on('data', function (data) {
      dataResults.push(data);
    });

    response.on('end', function () {
      console.log('Response stream complete.');
      callback('Chunk Received. Length: ' + dataResults + '\n');
    });
  });
};
