import request from '@/utils/request'

export function getPageComment() {
  return request({
    url: '/comment/all',
    method: 'get',
  })
}

export function getComment(id) {
  return request({
    url: '/comment',
    method: 'get',
    params: { id }
  })
}

export function postComment(data) {
  return request({
    url: '/comment',
    method: 'post',
    data
  })
}

export function putComment(data) {
  return request({
    url: '/comment',
    method: 'put',
    data
  })
}


export function commentCount() {
  return request({
    url: '/comment/commentCount',
    method: 'get'
  })
}

export function latestComment(number) {
  return request({
    url: '/comment/latest',
    method: 'get',
    params: { number }
  })
}
