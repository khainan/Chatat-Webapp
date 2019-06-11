import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import UnAuthenticatedApp from './UnAuthenticatedApp'
import AuthenticatedApp from './AuthenticatedApp'
import {useUser} from './context/user-context'
import './App.css';
import Loading from './components/Loading';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const user = useUser();
  const notify = (type, message) => {
    switch (type) {
      case 'success':
        
        return toast.success(message);
        break;
      case 'error':
        return  toast.error(message);
        break;
      default:
        return toast(message);
    }
  };
  return (
    <React.Suspense fallback={<Loading />}>
      {user ? <AuthenticatedApp onNotify={notify}/> : <UnAuthenticatedApp onNotify={notify} />}
      <ToastContainer />
    </React.Suspense>
  )
}

export default App
