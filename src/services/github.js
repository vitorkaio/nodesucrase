import axios from 'axios'

const URL = 'https://api.github.com/users/'

export const getUser = async (username) => {
  const res = await axios.get(`${URL}${username}`)
  return res
}
