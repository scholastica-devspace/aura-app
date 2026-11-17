import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'


const Message = () => {

  let dispatch = useDispatch()
  const data = useSelector(state => state.counter.value)

  const handleIncrement = () => {
    dispatch(increment(1))
  }

  const handleDecrement = () => {
    dispatch(decrement(1))

  }

  return (
    <div className='flex flex-col items-center mt-30'>
      <h1 className='font-poppins font-bold text-5xl text-heading'>Counter  {data}</h1>

      <div className='flex gap-x-5'>
        <Button onClick={handleIncrement} className='font-poppins! text-sm! bg-heading! rounded-full! py-4! mt-7! mb-2!' variant="contained">Increment</Button>
        <Button onClick={handleDecrement} className='font-poppins! text-sm! bg-heading! rounded-full! py-4! mt-7! mb-2!' variant="contained">Decrement</Button>
      </div>
    </div>
  )
}

export default Message