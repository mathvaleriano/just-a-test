import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import { get } from '../../store/reducers/breeds'
import Card from '../Card'
import Flex from '../Flex'

const App = () => {
  const dispatch = useDispatch()
  const { error, items, loading } = useSelector(
    ({ breeds }: RootState) => breeds
  )

  useEffect(() => {
    dispatch(get())
  }, [dispatch])

  if (error) {
    return <p className="error">Error: {error}</p>
  }

  if (loading) {
    return <p className="loading">Loading...</p>
  }

  return <Flex
    direction="row"
    justifyContent="space-around"
    alignItems="stretch"
  >
    {items.map(breed => (
      <Card breed={breed} key={breed.id} />
    ))}
  </Flex>
}

export default App
