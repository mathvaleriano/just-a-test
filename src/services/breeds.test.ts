import axios from './config'
import MockAdapter from 'axios-mock-adapter'
import * as breedsService from './breeds'
import generateBreeds from '../../__MOCKS__/breeds'

const axiosMock = new MockAdapter(axios)

const breeds = generateBreeds(5)

beforeAll(() => {
  axiosMock
    .onGet('/breeds', { params: { q: 'test' } }).reply(200, [])
    .onGet('/breeds').reply(200, breeds)
})

afterAll(() => {
  axiosMock.reset()
})

test('should return a list of breeds', async () => {
  const result = await breedsService.get()
  expect(result.data).toEqual(breeds)
})

test('should return an empty list of breeds', async () => {
  const result = await breedsService.get('test')
  expect(result.data).toEqual([])
})
