import axios from './config'
import { Breed } from '../shared/types/breeds'

export const get = (name?: string) => (
  axios.get<Breed[]>('/breeds', {
    params: {
      q: name
    }
  })
)
