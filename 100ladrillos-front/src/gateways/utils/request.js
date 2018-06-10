import handleResponse from './handleResponse';

const defaultConfig = {
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
};

const createRequestMethod = method => ({ uri, body }) => handleResponse(fetch(
  uri,
  {
    ...defaultConfig,
    method,
    body: body && JSON.stringify(body),
  },
));

const get = createRequestMethod('get');
const patch = createRequestMethod('PATCH');
const post = createRequestMethod('post');
const put = createRequestMethod('put');
const del = createRequestMethod('delete');

export default {
  get,
  patch,
  post,
  put,
  delete: del,
};
