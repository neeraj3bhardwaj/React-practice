import {useContext, createContext} from "react"

export const userContext = createContext({})

export const userProvider = userContext.Provider

export default function useUserContext () {
    return useContext(userContext)
}
