import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Card from './Card';



const HotelSection = ({hoteldata}) => {
    return (
        <div className='p-7'>
            <Tabs>
                <TabList>
                    <Tab>Amazing view</Tab>
                    <Tab>Amazing pool</Tab>
                    <Tab>Farms</Tab>
                    <Tab>Islands</Tab>
                    <Tab>Luxe</Tab>
                    <Tab>Cabins</Tab>
                    <Tab>Tree house</Tab>
                    
                </TabList>

                <TabPanel>
                    <div className='p-5'>
                        <div className='flex flex-wrap gap-7'>
                            {hoteldata.slice(0,8).map((data) => (
                                
                                <Card key={data.id} img={data.img} date={data.date} distance={data.distance} hotelName={data.hotelName} price={data.price} id={data.id} />
                                
                                
                            ))}
                        </div>
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='p-5'>
                        <div className='flex flex-wrap gap-7'>
                            {hoteldata.slice(8, 15).map((data) => (
                                <Card key={data.id} img={data.img} date={data.date} distance={data.distance} hotelName={data.hotelName} price={data.price} id={data.id} />
                            ))}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='p-5'>
                        <div className='flex flex-wrap gap-7'>
                            {hoteldata.slice(15, 23).map((data) => (
                                <Card key={data.id} img={data.img} date={data.date} distance={data.distance} hotelName={data.hotelName} price={data.price} id={data.id} />
                            ))}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='p-5'>
                        <div className='flex flex-wrap gap-7'>
                            {hoteldata.slice(23, 31).map((data) => (
                                <Card key={data.id} img={data.img} date={data.date} distance={data.distance} hotelName={data.hotelName} price={data.price} id={data.id} />
                            ))}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='p-5'>
                        <div className='flex flex-wrap gap-7'>
                            {hoteldata.slice(31, 39).map((data) => (
                                <Card key={data.id} img={data.img} date={data.date} distance={data.distance} hotelName={data.hotelName} price={data.price} id={data.id} />
                            ))}
                        </div>
                    </div>


                </TabPanel>
                <TabPanel>
                    <div className='p-5'>
                        <div className='flex flex-wrap gap-7'>
                            {hoteldata.slice(39, 47).map((data) => (
                                <Card key={data.id} img={data.img} date={data.date} distance={data.distance} hotelName={data.hotelName} price={data.price} id={data.id} />
                            ))}
                        </div>
                    </div>


                </TabPanel>
                <TabPanel>
                <div className='p-5'>
                        <div className='flex flex-wrap gap-7'>
                            {hoteldata.slice(47).map((data) => (
                                <Card key={data.id} img={data.img} date={data.date} distance={data.distance} hotelName={data.hotelName} price={data.price} id={data.id} />
                            ))}
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default HotelSection