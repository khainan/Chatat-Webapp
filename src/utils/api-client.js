import axios from 'axios';
function client(endpoint, {body, ...customConfig} = {},method) {

     const requestBody = JSON.stringify(body);
     const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json"}
     
    return axios({
      method: method,
      url: `https://azaradigital.com/_devservice/sysFront/${endpoint}`,
      data: requestBody,
      headers
    }).then(r => r.data);

 
  }
  
  export default client
  