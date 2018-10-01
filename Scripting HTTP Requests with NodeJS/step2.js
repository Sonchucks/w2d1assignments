/*
Step 2

- Don't forget to commit your work from Step 1 if you haven't already!
- In another file, create a second function, getAndPrintHTML, which
will look very similar to your first function.
- This function should use a buffering technique to append each
chunk of data to a variable as it is received, and then console.log
the data once all of the data has been received.
  - Buffering in this context means the technique you've used before
  (usually in loops or conditionals) of creating an empty variable
  and adding data to it.

Considerations

What kind(s) of variable could you buffer your data with? Is there a
preferable type? If so, what makes it preferable?
*/

var https = require('https');

// gAPH = getAndPrintHTML

function gAPH() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    var dataResults = [];

    response.setEncoding('utf8');

    response.on('data', function (data) {
      dataResults.push(data.length);
    });

    response.on('end', function () {
      console.log('Response stream complete');
      console.log('Chunk Received. Length:', dataResults, '\n');
    });
  });


}

gAPH();