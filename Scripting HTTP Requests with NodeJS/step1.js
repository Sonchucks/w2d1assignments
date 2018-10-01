/*
Step 1

- Your first function getAndPrintHTMLChunks will utilize the https
library to GET a given URL.
- You can use the example above as a reference or template.
- This function should console.log each chunk of data as it is
received, concatenated with a newline character ('\n') so you can
visualize each chunk.
- Remember in this and each subsequent Step - you will always need
to invoke (call) the function you wrote.

Considerations

- Should you require https inside or outside of the function? Does it
matter in this case? If not, in what situations would it matter?
- Which of the stream function options ('data', 'error', 'end',
'finish') do you need to use to log the data chunks as they come in?
- What do you notice about the results? Do you think this is the
best way to handle the incoming data? How could we improve upon this?
*/

var https = require('https');

// gAPHC = getAndPrintHTMLChunks
function gAPHC() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length, '\n');
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}

gAPHC();