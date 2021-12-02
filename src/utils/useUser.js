import { useState,useEffect } from 'react';
import {useToken} from './useToken'

export const useUser = () => {
    const [token] = useToken()

    const getPayloadFromToken = token => {
        const enocodedPayload = token.split('.')[1]
        return JSON.parse(atob(enocodedPayload))
    }

    const [user,setuser] = useState(()=>{
        if(!token) return null
        return getPayloadFromToken(token)
    })

    useEffect(() => {
        if(!token){
            setuser(null)
        }else{
            setuser(getPayloadFromToken(token))
        }
    },[token])

    return user
}


