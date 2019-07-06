import request from '@/utils/request'

export function fetchList (query) {
  return request({
    url: '/emotes/list',
    method: 'get',
    params: query
  })
}

export function fetchEmote (id) {
  return request({
    url: '/emotes/detail',
    method: 'get',
    params: { id }
  })
}

export function createEmote (data) {
  return request({
    url: '/emotes/create',
    method: 'post',
    data
  })
}

export function updateEmote (data) {
  return request({
    url: '/emotes/update',
    method: 'post',
    data
  })
}

export function deleteEmote (data) {
  return request({
    url: '/emotes/delete',
    method: 'delete',
    data
  })
}
