/*
Step 3

- Don't forget to commit your work from Step 2 if you haven't already!
- In another file, create a third function, getAndPrintHTML, which
will look very similar to your second function, but accepts a
paramater, options, which is an object that contains values for the
host and path, exactly like requestOptions. Reuse whatever code you
need from part 2 - we're still getting and printing the HTML.

Considerations

- There are other ways to structure this using parameters of other
types - did you instinctively want to implement it differently?
- Is there any reason not to just pass the URL as a string?
- Is there any reason not to pass the host and path as two individual
parameters?
  - Don't get too hung up on these questions if you aren't sure -
  it's more important that you implement a solution. Feel free to ask
  a mentor if you're curious!
- Did you notice that the declaration of requestOptions has been
moved? Do you understand why?
  - What do you need to change about the way you call https.get to
  ensure it still works?
*/

var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function (response) {
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

console.log(getAndPrintHTML(requestOptions));