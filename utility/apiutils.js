import { request } from '@playwright/test';

export async function getRequest(url) {
  const context = await request.newContext();
  const response = await context.get(url);
  return response;
}

export async function postRequest(url, data) {
  const context = await request.newContext();
  const response = await context.post(url, { data });
  return response;
}

export async function putRequest(url, data) {
  const context = await request.newContext();
  const response = await context.put(url, { data });
  return response;
}