const GRAPHQL_URL = 'http://localhost:9000';

async function fetchGreeting() {
  const response = await fetch(GRAPHQL_URL, {
    mtehod: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query {
          greeting
        }
      `
    })
  });
  const responseBody = await response.json();
  return responseBody.data;
}

const element = document.getElementById('greeting');
element.textContent = 'Loading...';

fetchGreeting().then((data) => {
  element.textContent = data.greeting;
});
