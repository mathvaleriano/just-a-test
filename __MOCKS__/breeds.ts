import faker from 'faker'
import { Breed } from '../src/shared/types/breeds'

const MAX_LEVEL = 5

export default (quantity = 1): Breed[] => (
  new Array(quantity).fill({}).map(() => ({
    affection_level: faker.random.number(MAX_LEVEL),
    description: faker.lorem.text(),
    energy_level: faker.random.number(MAX_LEVEL),
    id: faker.random.number(),
    name: faker.lorem.word(),
    origin: faker.lorem.word(),
    temperament: faker.lorem.words(),
    wikipedia_url: faker.internet.url()
  }))
)
