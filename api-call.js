const http = require('http');

const getPosts = () => {
  let data = '';

  const request = http.get('http://jsonplaceholder.typicode.com/posts/1', (response) => {
    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      console.log(data);
    });
  });

  request.on('error', (error) => {
    console.error(error);
  });

  request.end();
};

getPosts();
