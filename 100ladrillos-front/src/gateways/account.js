import request from './utils/request';

const BASE_URL = '/users';

const getMyAccount = () => (
  request.get({ uri: `${BASE_URL}/my-account` })
);

const getMyProfits = () => (
  request.get({ uri: `${BASE_URL}/my-profits` })
);

const getMyBricks = () => (
  request.get({ uri: `${BASE_URL}/my-bricks` })
);

export default {
  getMyAccount,
  getMyProfits,
  getMyBricks,
};
