import { get, patch, post } from "../index";

const PATH='/user/'

export function createUser(body) {
  return post(`${PATH}`, body);
}

export function login(body) {
  return post(`${PATH}/login`, body);
}

export function editUser(id, body) {
  return patch(`${PATH}/${id}`, body);
}

export function getMyUser() {
  return get(`${PATH}/my`);
}