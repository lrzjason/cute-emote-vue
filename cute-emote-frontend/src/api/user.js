import request from '@/utils/request'

export function fetchList (query) {
  return request({
    url: '/user/list',
    method: 'get',
    params: query
  })
}

export function fetchDetail (id) {
  return request({
    url: '/user/detail',
    method: 'get',
    params: { id }
  })
}

export function createItem (data) {
  console.log('createItem', data)
  return request({
    url: '/user/create',
    method: 'post',
    data
  })
}

export function updateItem (data) {
  console.log('updateItem', data)
  return request({
    url: '/user/update',
    method: 'post',
    data
  })
}

export function deleteItem (data) {
  return request({
    url: '/user/delete',
    method: 'delete',
    data
  })
}

export function login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
