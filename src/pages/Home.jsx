import React from 'react'
import { Grid } from '@mui/material'
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { Button } from '@mui/material'


import Image from '../components/Image'
import Icon from '../assets/icon-02.png'



const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <div className='w-full h-100  mt-5'>

          <div className='flex items-center w-[95%] mx-auto rounded-lg py-2 my-4 px-5
          shadow-[0px_5px_6px_0px_rgba(0,0,0,0.4)]'>
            <FaSearch className='text-2xl text-olive' />
            <input className='w-full text-xl py-2 px-5 outline-none' type="text" placeholder='Search' />
            <HiDotsVertical className='text-2xl text-olive' />
          </div>

          <div className='h-70 overflow-y-scroll mx-3 px-5 py-8 rounded-lg my-8 shadow-[0px_5px_6px_0px_rgba(0,0,0,0.4)] flex flex-col gap-y-5 bg-mute/80'>

            <div className='flex justify-between items-center'>

              <div className='flex gap-x-5'>
                <div className='w-12.5 h-12.5 rounded-full'>
                  <Image src={Icon} />
                </div>
                <div>
                  <h2 className='font-poppins font-bold text-lg text-heading capitalize'>Friends Reunion</h2>
                  <h3 className='font-inter font-normal text-sm text-body/70'>Hi Guys, Wassup!</h3>
                </div>
              </div>

              <Button className='font-poppins! text-sm! bg-heading! py-2! rounded-lg!' variant="contained">Join</Button>

            </div>

            <div className='flex justify-between items-center'>

              <div className='flex gap-x-5'>
                <div className='w-12.5 h-12.5 rounded-full'>
                  <Image src={Icon} />
                </div>
                <div>
                  <h2 className='font-poppins font-bold text-lg text-heading capitalize'>Friends Reunion</h2>
                  <h3 className='font-inter font-normal text-sm text-body/70'>Hi Guys, Wassup!</h3>
                </div>
              </div>

              <Button className='font-poppins! text-sm! bg-heading! py-2! rounded-lg!' variant="contained">Join</Button>

            </div>

            <div className='flex justify-between items-center'>

              <div className='flex gap-x-5'>
                <div className='w-12.5 h-12.5 rounded-full'>
                  <Image src={Icon} />
                </div>
                <div>
                  <h2 className='font-poppins font-bold text-lg text-heading capitalize'>Friends Reunion</h2>
                  <h3 className='font-inter font-normal text-sm text-body/70'>Hi Guys, Wassup!</h3>
                </div>
              </div>

              <Button className='font-poppins! text-sm! bg-heading! py-2! rounded-lg!' variant="contained">Join</Button>

            </div>

            

          </div>

        </div>
      </Grid>

    </Grid>
  )
}

export default Home