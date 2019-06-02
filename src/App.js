import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import UnAuthenticatedApp from './UnAuthenticatedApp'
import AuthenticatedApp from './AuthenticatedApp'
import {useUser} from './context/user-context'
import './App.css';
import Loading from './components/Loading';


function App() {
  const user = useUser()
  return (
    <React.Suspense fallback={<Loading />}>
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </React.Suspense>
  )
}

export default App
