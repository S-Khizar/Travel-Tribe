import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MiddleFooter from './MiddleFooter';
import Popular from './TabData/Popular';
import Outdoors from './TabData/Outdoors';
import Mountains from './TabData/Mountains';
import Beaches from './TabData/Beaches';
import UniqueStays from './TabData/UniqueStays';
import ArtsCulture from './TabData/ArtsCulture';
import Categories from './TabData/Categories';
import ThingsToDo from './TabData/ThingsToDo';
import BottomFooter from './BottomFooter';


const Footer = () => {
    return (
        <>
            <div className='  border-b-4'>
                <div className='p-8  bg-gray-100'>

                    <p className='text-3xl mb-4'>Inspiration for futer getaways</p>
                    <Tabs >
                        <TabList className='flex flex-col md:flex-row  gap-x-16 p-2 md:gap-x-1  ' >
                            <Tab className='bg-gray-100  cursor-pointer p-2'>Popular</Tab>
                            <Tab className='bg-gray-100 cursor-pointer p-2'>Arts & culture</Tab>
                            <Tab className='bg-gray-100  cursor-pointer p-2'>Outdoors</Tab>
                            <Tab className='bg-gray-100 cursor-pointer p-2'>Mountains</Tab>
                            <Tab className='bg-gray-100  cursor-pointer p-2'>Beach</Tab>
                            <Tab className='bg-gray-100 cursor-pointer p-2'>Unique Stays</Tab>
                            <Tab className='bg-gray-100  cursor-pointer p-2'>Categories</Tab>
                            <Tab className='bg-gray-100 cursor-pointer p-2'>Things to do</Tab>


                        </TabList>


                        <TabPanel>
                            <Popular />
                        </TabPanel>
                        <TabPanel>
                            <ArtsCulture />

                        </TabPanel>
                        <TabPanel>
                            <Outdoors />

                        </TabPanel>
                        <TabPanel>
                            <Mountains />

                        </TabPanel>
                        <TabPanel>
                            <Beaches />

                        </TabPanel>
                        <TabPanel>
                            <UniqueStays />

                        </TabPanel>
                        <TabPanel>
                            <Categories />

                        </TabPanel>
                        <TabPanel>
                            <ThingsToDo />
                        </TabPanel>


                    </Tabs>
                </div>


            </div>
            <div className='p-8  bg-gray-100  '>
                <MiddleFooter />
                <hr className=' border-2 mt-4'/>
                <BottomFooter/>
            </div>

        </>


    )
}

export default Footer