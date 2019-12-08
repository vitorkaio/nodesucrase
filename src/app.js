import { getUser } from './services/github'

const app = async () => {
  try {
    const res = await getUser('vitorkaio')
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

app()
