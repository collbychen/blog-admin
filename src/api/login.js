import request from '@/utils/request'

export function login(query) {
  return request({
    url: 'login',
    method: 'post',
    data: query
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'get'
  })
}
