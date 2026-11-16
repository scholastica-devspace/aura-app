import React from 'react'
import Icon from '../assets/icon-02.png'
import GroupItem from '../components/GroupItem'
import GroupTitle from '../components/GroupTitle'
import SerachBar from '../components/SerachBar'

const Mygroups = () => {
    return (
        <div className='w-full h-100 mt-13'>

            <SerachBar />

            <div className='mx-3 p-5 rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)] flex flex-col gap-y-5 bg-mute/80'>

                <GroupTitle title="My Groups" />

                <div className='flex flex-col gap-y-5 h-65 overflow-y-scroll'>
                    <GroupItem src={Icon} groupName="Friends Reunion" groupText="Hi Guys, Wassup!" />
                    <GroupItem src={Icon} groupName="Friends Forever" groupText="Good to see you." />
                    <GroupItem src={Icon} groupName="Crazy Cousins" groupText="What plans today?" />
                    <GroupItem src={Icon} groupName="Friends Reunion" groupText="Hi Guys, Wassup!" />
                    <GroupItem src={Icon} groupName="Friends Forever" groupText="Good to see you." />
                    <GroupItem src={Icon} groupName="Crazy Cousins" groupText="What plans today?" />
                </div>

            </div>

        </div>
    )
}

export default Mygroups