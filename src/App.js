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
      case 'info':
        return toast.info(message);
        break;
      case 'success':
        return toast.success(message);
        break;
      case 'warning':
        return toast.warning(message);
        break;
      case 'error':
        console.log("masuk sini", type, message)
        return  toast.error(message[0]);
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
