import React from 'react'
import Icon from '../assets/icon-02.png'
import GroupItem from '../components/GroupItem'
import GroupTitle from '../components/GroupTitle'
import SerachBar from '../components/SerachBar'

const Blockedusers = () => {
    return (
        <div className='w-full h-100 mt-13'>

            <SerachBar />

            <div className='mx-3 p-5 rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)] flex flex-col gap-y-5 bg-mute/80'>

                <GroupTitle title="Blocked Users" />

                <div className='flex flex-col gap-y-5 h-65 overflow-y-scroll'>
                    <GroupItem src={Icon} groupName="Raghav" groupText="Today, 8:56pm" />
                    <GroupItem src={Icon} groupName="Swathi" groupText="Today, 2:31pm" />
                    <GroupItem src={Icon} groupName="Kiran" groupText="Yesterday, 6:22pm" />
                    <GroupItem src={Icon} groupName="Tejeshwini C" groupText="Today, 12:22pm" />
                    <GroupItem src={Icon} groupName="Raghav" groupText="Today, 8:56pm" />
                    <GroupItem src={Icon} groupName="Raghav" groupText="Today, 8:56pm" />
                    <GroupItem src={Icon} groupName="Swathi" groupText="Today, 2:31pm" />
                    <GroupItem src={Icon} groupName="Kiran" groupText="Yesterday, 6:22pm" />
                    <GroupItem src={Icon} groupName="Tejeshwini C" groupText="Today, 12:22pm" />
                    <GroupItem src={Icon} groupName="Raghav" groupText="Today, 8:56pm" />
                </div>

            </div>

        </div>
    )
}

export default Blockedusers