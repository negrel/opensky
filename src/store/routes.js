import { createStore, compose, combineReducers } from 'redux'
import { lazyReducerEnhancer } from 'pwa-helpers'
import { connectRouter, navigate } from 'lit-redux-router'

const store = createStore(
  (state) => state,
  compose(lazyReducerEnhancer(combineReducers))
)
connectRouter(store)

export const router = {
  goto: (path) => {
    store.dispatch(navigate(path))
  }
}
