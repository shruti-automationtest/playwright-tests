// apiTests.js
import { test, expect } from '@playwright/test';
import { getRequest, postRequest, putRequest } from '../utility/apiutils.js'; 
import { API_URLS, userData, userDataPut } from '../fixtures/fixture.js';

// GET request to list users
test('GET request to list users', async () => {
  const response = await getRequest(API_URLS.GET_USERS);
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.page).toBe(2);
});

// POST request to create a user
test('POST request to create a user', async () => {
  // const userData = { name: 'John Doe', job: 'Software Engineer' };
  const response = await postRequest(API_URLS.POST_USER, userData);
  expect(response.status()).toBe(201);
  const data = await response.json();
  expect(data.name).toBe(userData.name);
  expect(data.job).toBe(userData.job);
});

// PUT request to update a user
test('PUT request to update a user', async () => {
  
  const response = await putRequest(API_URLS.PUT_USER, userDataPut);
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.name).toBe(userDataPut.name);
  expect(data.job).toBe(userDataPut.job);
});
