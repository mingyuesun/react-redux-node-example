import axios from 'axios'

export const signupRequest = (userData) => {
  return dispatch => {
		return axios.post('/api/users', userData)
	}
}

export const isUserExictsRequest = (username) => {
  return dispatch => {
		return axios.get(`/api/users/${username}`, username)
	}
}