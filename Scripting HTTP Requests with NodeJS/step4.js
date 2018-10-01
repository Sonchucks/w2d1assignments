/*
Step 4

- Don't forget to commit your work from Step 3 if you haven't already!
- In another file, create a fourth function, getHTML. This function
will look and behave almost the same as your third function, except:
  - The function definition will now accept a callback as a second
  parameter.
  - The function body will invoke (call) the callback when the data
  is fully received, in place of the original console.log.
- To simplify things for the moment, the callback function printHTML
will be defined below. You just need to ensure it gets passed as an
argument when you call getHTML.

Considerations

- Can you explain the difference between function definition and
invocation?
- Do you understand what each parameter and argument represents? Can
you walk yourself through the code without getting lost? If this
confuses you, have a chat with a mentor.
- It's common at this point to be confused by callbacks. But if you
find yourself really struggling with the concept, please reach out
to one of us and ask for help. Callbacks and asynchronous code are
an integral part of Javascript and you will use them many times in
bootcamp, in a variety of situations. If you're finding them hard to
comprehend, you're not the only one in your cohort. But it's still
important we know who needs to review the subject more, because
callbacks are here to stay.
*/

'use strict';
var https = require('https');

function getHTML (options, callback) {
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
}


function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML);