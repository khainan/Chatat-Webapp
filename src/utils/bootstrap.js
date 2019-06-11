import {getUser} from './auth-client'

async function bootstrapAppData() {
  const data = await getUser();
  if (!data) {
    return {data: null}
  }

  return data
  
}

export {bootstrapAppData}
