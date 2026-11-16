import React from 'react'
import Icon from '../assets/icon-02.png'
import GroupItem from '../components/GroupItem'
import GroupTitle from '../components/GroupTitle'
import SerachBar from '../components/SerachBar'

const Friendlist = () => {
    return (
        <div className='w-full h-100'>

            <SerachBar />

            <div className='mx-3 p-5 rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)] flex flex-col gap-y-5 bg-mute/80'>

                <GroupTitle title="Friends" />

                <div className='flex flex-col gap-y-5 h-65  overflow-y-scroll'>
                    <GroupItem src={Icon} groupName="Raghav" groupText="Dinner?" />
                    <GroupItem src={Icon} groupName="Swathi" groupText="Sure!" />
                    <GroupItem src={Icon} groupName="Kiran" groupText="Hi....." />
                    <GroupItem src={Icon} groupName="Tejeshwini C" groupText="I will call him today." />
                    <GroupItem src={Icon} groupName="Raghav" groupText="Dinner?" />
                    <GroupItem src={Icon} groupName="Swathi" groupText="Sure!" />
                    <GroupItem src={Icon} groupName="Kiran" groupText="Hi....." />
                    <GroupItem src={Icon} groupName="Tejeshwini C" groupText="I will call him today." />
                </div>

            </div>

        </div>
    )
}

export default Friendlist