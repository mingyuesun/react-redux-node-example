import axios from 'axios'

export const setAuthorization = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `self ${token}`
	} else {
		delete axios.defaults.headers.common['Authorization']
	}
}
