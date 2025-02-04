// apiTest.js

import axios from 'axios';

// Reusable function to make API requests
async function makeApiRequest(method, url, data = null) {
  try {
    const options = { method, url };
    if (data) options.data = data;  // Include data for POST/PUT requests
    const response = await axios(options);

    if (response.status >= 200 && response.status < 300) {
      console.log(`${method} Request Passed`);
      return response.data;
    } else {
      console.error(`${method} Request Failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error(`${method} Request Failed:`, error.response ? error.response.data : error.message);
  }
}

// Test Cases
(async () => {
  // Test Case 1: Get Users Test (GET Request)
  const getData = await makeApiRequest('GET', 'https://reqres.in/api/users?page=1');
  console.log(getData);

  // Test Case 2: Create User Test (POST Request)
  const postData = await makeApiRequest('POST', 'https://reqres.in/api/users', {
    name: 'John Doe',
    job: 'Software Developer'
  });
  console.log(postData);

  // Test Case 3: Update User Test (PUT Request)
  const putData = await makeApiRequest('PUT', 'https://reqres.in/api/users/2', {
    name: 'Jane Doe',
    job: 'Senior Developer'
  });
  console.log(putData);
})();
