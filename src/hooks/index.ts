import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import type { StoreState, StoreDispatch } from '../store'

export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector

export const useStoreDispatch = () => useDispatch<StoreDispatch>()

// Hooks del store
export function useMainStore() {
  return useStoreSelector((state) => state.main)
}