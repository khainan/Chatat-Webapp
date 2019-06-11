import axios from 'axios';
function client(endpoint, {body, ...customConfig} = {},method) {

     const requestBody = JSON.stringify(body);
     const headers =  {"headers": {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json"}}
     const requestMethod = {"method": method}
  
    return axios
      .post(`https://azaradigital.com/_devservice/sysFront/costumer/${endpoint}`, requestBody, headers, requestMethod)
      .then(r => r.data)
  }
  
  export default client
  