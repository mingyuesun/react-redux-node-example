import axios from 'axios'

export const signupRequest = (userData) => {
  return dispatch => {
		return axios.post('/api/users', userData)
	}
}