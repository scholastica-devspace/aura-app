import React from 'react'
import { Grid } from '@mui/material'
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { Button } from '@mui/material'


import Image from '../components/Image'
import Icon from '../assets/icon-02.png'
import GroupItem from '../components/GroupItem'
import GroupTitle from '../components/GroupTitle'
import SerachBar from '../components/SerachBar'



const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <div className='w-full h-100'>

          <SerachBar/>

          <div className='mx-3 p-5 rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)] flex flex-col gap-y-8 bg-mute/80'>

            <GroupTitle title="Group List" />

            <div className='flex flex-col gap-y-8 h-60 overflow-y-scroll'>
              <GroupItem src={Icon} groupName="Friends Reunion" groupText="Hi Guys, Wassup!"/>
              <GroupItem src={Icon} groupName="Friends Forever" groupText="Good to see you."/>
              <GroupItem src={Icon} groupName="Crazy Cousins" groupText="What plans today?"/>
              <GroupItem src={Icon} groupName="Friends Reunion" groupText="Hi Guys, Wassup!"/>
              <GroupItem src={Icon} groupName="Friends Forever" groupText="Good to see you."/>
              <GroupItem src={Icon} groupName="Crazy Cousins" groupText="What plans today?"/>
              </div>                    
            
          </div>

          

        </div>
      </Grid>
      
      
      

      

      

      

    </Grid>
  )
}

export default Home