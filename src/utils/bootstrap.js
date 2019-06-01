import {getUser} from './auth-client'

async function bootstrapAppData() {
  const data = await getUser();
  if (!data) {
    return {user: null}
  }
  const user = data.data
  return {
    user
  }
}

export {bootstrapAppData}
