import React from 'react'
import { Button } from '@mui/material'
import Image from '../components/Image'


const GroupItem = ({src, groupName,groupText}) => {
    return (
        <div className='flex justify-between items-center'>

            <div className='flex items-center gap-x-3'>
                <div className='w-12.5 h-12.5 rounded-full'>
                    <Image src={src} />
                </div>
                <div>
                    <h2 className='font-poppins font-bold text-lg text-heading capitalize'>{groupName}</h2>
                    <h3 className='font-inter font-normal text-sm text-body/70'>{groupText}</h3>
                </div>
            </div>

            <Button className='font-poppins! text-sm! bg-heading! py-2! mr-3! rounded-lg!' variant="contained">Join</Button>

        </div>
    )
}

export default GroupItem