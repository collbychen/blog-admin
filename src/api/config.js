import request from '@/utils/request'

export function getAllConfig() {
  return request({
    url: '/config/all',
    method: 'get'
  })
}

export function getConfig(id) {
  return request({
    url: '/config',
    method: 'get',
    params: { id }
  })
}

export function postConfig(data) {
  return request({
    url: '/config',
    method: 'post',
    data
  })
}

export function putConfig(data) {
  return request({
    url: '/config',
    method: 'put',
    data
  })
}

export function deleteConfig(id) {
  return request({
    url: '/config',
    method: 'delete',
    params: { id }
  })
}

export function getGlobal() {
  return request({
    url: '/config/global',
    method: 'get'
  })
}
