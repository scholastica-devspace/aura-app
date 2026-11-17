import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'

const Notification = () => {

  let dispatch = useDispatch ()
    const data = useSelector (state=>state.counter.value)
  
    const handleIncrement = () =>{
      dispatch(incrementByAmount(10))
    }
    
    return (
      <div className='flex flex-col items-center mt-30'>
        <h1 className='font-poppins font-bold text-5xl text-heading'>Counter  {data}</h1>
  
        <Button onClick={handleIncrement} className='font-poppins! text-sm! bg-heading! rounded-full! py-4! mt-7! mb-2!' variant="contained">Add Value</Button>
      </div>
    )
}

export default Notification