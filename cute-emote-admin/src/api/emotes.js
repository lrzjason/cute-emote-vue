import request from '@/utils/request'

export function fetchList (query) {
  return request({
    url: '/emotes/list',
    method: 'get',
    params: query
  })
}

export function fetchDetail (id) {
  return request({
    url: '/emotes/detail',
    method: 'get',
    params: { id }
  })
}

export function createItem (data) {
  console.log('createItem', data)
  return request({
    url: '/emotes/create',
    method: 'post',
    data
  })
}

export function updateItem (data) {
  console.log('updateItem', data)
  return request({
    url: '/emotes/update',
    method: 'post',
    data
  })
}

export function deleteItem (data) {
  return request({
    url: '/emotes/delete',
    method: 'delete',
    data
  })
}
