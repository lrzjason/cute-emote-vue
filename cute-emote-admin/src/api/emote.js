import request from '@/utils/request'

export function fetchList (query) {
  return request({
    url: '/emote/list',
    method: 'get',
    params: query
  })
}

export function fetchDetail (id) {
  return request({
    url: '/emote/detail',
    method: 'get',
    params: { id }
  })
}

export function createItem (data) {
  console.log('createItem', data)
  return request({
    url: '/emote/create',
    method: 'post',
    data
  })
}

export function updateItem (data) {
  console.log('updateItem', data)
  return request({
    url: '/emote/update',
    method: 'post',
    data
  })
}

export function deleteItem (data) {
  return request({
    url: '/emote/delete',
    method: 'delete',
    data
  })
}
