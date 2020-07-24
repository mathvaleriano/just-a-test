import reducer, { toggleLoading, setError, get, setItems } from './breeds'
import generateBreeds from '../../../__MOCKS__/breeds'

const initialState = {
  error: '',
  items: [],
  loading: false
}

test('should initialize state', () => {
  expect(reducer(undefined, { type: '' }))
    .toEqual(initialState)
})

test('should set error message', () => {
  const state = reducer(undefined,
    { type: setError.type, payload: 'error' }
  );
  expect(state).toEqual({
    ...initialState,
    error: 'error'
  })
})

test('should update loading', () => {
  const state = reducer(undefined,
    { type: toggleLoading.type, payload: true }
  );
  expect(state).toEqual({
    ...initialState,
    loading: true
  })
})

test('should set items', () => {
  const breeds = generateBreeds()
  const state = reducer(undefined,
    { type: setItems.type, payload: breeds }
  )
  expect(state).toEqual({
    ...initialState,
    items: breeds
  })
})
