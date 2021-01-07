import request from '@/utils/request'

export function getAllSpider() {
  return request({
    url: '/spider/all',
    method: 'get'
  })
}

export function geySpider(id) {
  return request({
    url: '/spider',
    method: 'get',
    params: { id }
  })
}

export function postSpider(data) {
  return request({
    url: '/spider',
    method: 'post',
    data
  })
}

export function putSpider(data) {
  return request({
    url: '/spider',
    method: 'put',
    data
  })
}

export function deleteSpider(id) {
  return request({
    url: '/spider',
    method: 'delete',
    params: { id }
  })
}

export function spiderArticle(data) {
  return request({
    url: '/spider/spiderArticle',
    method: 'post',
    params: data
  })
}

