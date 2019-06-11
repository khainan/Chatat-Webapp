import React from 'react'
import {useAuth} from './auth-context'

const UserContext = React.createContext()

function UserProvider(props) {
  const {
    data: {data},
  } = useAuth();
  
  return <UserContext.Provider value={data} {...props} />
}

function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`)
  }
  return context
}

export {UserProvider, useUser}
