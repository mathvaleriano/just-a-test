import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as breedsService from '../../services/breeds'
import { Breed } from '../../shared/types/breeds';
import { AppThunk, Dispatch } from '..'

type State = {
  error: string,
  items: Breed[],
  loading: boolean
}

const initialState: State = {
  error: '',
  items: [] as Breed[],
  loading: false,
}

const { actions, reducer } = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    setItems: (state, { payload }: PayloadAction<Breed[]>) => {
      state.items = payload
    },
    setError: (state, { payload = '' }: PayloadAction<string>) => {
      state.error = payload
    },
    toggleLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    },
  }
})

export const {
  setError,
  setItems,
  toggleLoading
} = actions

export const get = (name?: string): AppThunk => (
  async (dispatch: Dispatch) => {
    try {
      dispatch(toggleLoading(true))
      const { data } = await breedsService.get(name)
      dispatch(setItems(data))
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(toggleLoading(false))
    }
  }
)

export default reducer
