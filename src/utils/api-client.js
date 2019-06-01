function client(endpoint, {body, ...customConfig} = {}) {

   // const token = window.localStorage.getItem('__chatat_token__')
    const headers = {'content-type': 'application/json', 'Authorization': 'Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0'};
    // if (token) {
    //   headers['Content-Hash'] = token
    // }
    const config = {
      method: body ? 'POST' : 'GET',
      ...customConfig,
      headers: {
        ...headers,
        ...customConfig.headers,
      },
    }
    if (body) {
      config.body = JSON.stringify(body)
    }
  
    return window
      .fetch(`https://azaradigital.com/_devservice/sysFront/costumer/${endpoint}`, config)
      .then(r => r.json())
  }
  
  export default client
  