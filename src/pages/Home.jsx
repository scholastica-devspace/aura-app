import React from 'react'
import { Grid } from '@mui/material'
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { Button } from '@mui/material'

import Grouplist from '../layouts/Grouplist'
import Friendlist from '../layouts/Friendlist'
import Userlist from '../layouts/Userlist'
import Friendrequest from '../layouts/Friendrequest'
import Mygroups from '../layouts/Mygroups'
import Blockedusers from '../layouts/Blockedusers'



const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <Grouplist/>
      </Grid>
      <Grid size={4}>
        <Friendlist/>
      </Grid>
      <Grid size={4}>
        <Userlist/>
      </Grid>
      <Grid size={4}>
        <Friendrequest/>
      </Grid>
      <Grid size={4}>
        <Mygroups/>
      </Grid>
      <Grid size={4}>
        <Blockedusers/>
      </Grid>










    </Grid>
  )
}

export default Home