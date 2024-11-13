import axios from 'axios'
import { useContext, useEffect } from 'react'
import { API_REQUEST } from './useEnv'
import { Context } from '../Context/Context'

function useAuth(code) {
    const {setAccessToken} = useContext(Context)

    useEffect(() => {
        axios.post(`${API_REQUEST}/login`, {code}).then(res => {
            setAccessToken(res.data.accessToken)
            history.pushState({}, null, "/")
        })
        .catch(() => {
            location = "/"
        })
    }, [])
}

export default useAuth