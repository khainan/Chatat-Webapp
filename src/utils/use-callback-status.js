import React from 'react'

function useIsMounted() {
  const mounted = React.useRef(false)
  React.useLayoutEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  }, [])
  return mounted
}

function useCallbackStatus() {
  const isMounted = useIsMounted()
  const [{status, message}, setState] = React.useReducer(
    (s, a) => ({...s, ...a}),
    {status: 'rest', error: null},
  )

  const safeSetState = (...args) =>
    isMounted.current ? setState(...args) : null

   
  const isPending = status === 'pending'
  const isRejected = status === 'rejected'

  function run(promise) {
    if (!promise || !promise.then) {
      throw new Error(
        `The argument passed to useCallbackStatus().run must be a promise. Maybe a function that's passed isn't returning anything?`,
      )
    }
    safeSetState({status: 'pending'})
    return promise.then(
      ({message}) => {
        
        safeSetState({status: 'rest', message})
        return message
      }
    ).catch(error => {
      console.log("masuk sini");
      const message = error.response.data.message;
      safeSetState({status: 'rejected', message })
      return Promise.reject(error)
    })
  }

  return {
    isPending,
    isRejected,
    message,
    status,
    run,
  }
}

export default useCallbackStatus
