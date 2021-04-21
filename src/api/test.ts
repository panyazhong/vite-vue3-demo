import request from '../utils/request';

export function testApi(params: any) {
  request({
    url: '/role/role_list',
    method: 'get',
    params,
  });
}
