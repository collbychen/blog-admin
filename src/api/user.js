import request from '@/utils/request'

export function getUserInfo() {
  return request({
    url: '/user',
    method: 'get'
  })
}

export function lastTime() {
  return request({
    url: '/user/last',
    method: 'get'
  })
}

export function putUser(data) {
  return request({
    url: '/user',
    method: 'put',
    data
  })
}

export function changePass(data) {
  return request({
    url: '/user/changePass',
    method: 'put',
    params: data
  })
}
