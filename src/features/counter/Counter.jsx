import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counter/counterSlice'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  // rendering logic is the same as the TS version
}