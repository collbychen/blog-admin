import request from '@/utils/request'

export function getAllMenu() {
  return request({
    url: '/menu/all',
    method: 'get'
  })
}

export function getMenu(id) {
  return request({
    url: '/menu',
    method: 'get',
    params: { id }
  })
}

export function postMenu(data) {
  return request({
    url: '/menu',
    method: 'post',
    data
  })
}

export function putMenu(data) {
  return request({
    url: '/menu',
    method: 'put',
    data
  })
}

export function deleteMenu(id) {
  return request({
    url: '/menu',
    method: 'delete',
    params: { id }
  })
}
