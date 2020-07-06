import axios from 'axios'
import {setAuthorization} from '../setAuthorization'
import {SET_CURRENT_USER} from '../constants'
import jwtDecode from 'jwt-decode'

export const setCurrentUser = (user) => {
	return {
		type: SET_CURRENT_USER,
		user
	}
}

export const logout = () => {
	return dispatch => {
		localStorage.removeItem('token')
		setAuthorization(false)
		dispatch(setCurrentUser(null))
	}
}

export const loginRequest = (userData) => {
	return dispatch => {
		return axios.post('/api/auth', userData).then(response => {
			const { token } = response.data
			window.localStorage.setItem('token', token)
			setAuthorization(token)
      dispatch(setCurrentUser(jwtDecode(token)))
		})
	}
}