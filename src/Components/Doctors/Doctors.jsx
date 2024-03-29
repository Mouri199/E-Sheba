import React from "react";
import { motion } from "framer-motion";
import DoctorCard from "./DoctorCard";
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'


const Doctors = () => {
    const linkVariants = {
        hover: {
            scale: 1.1,
            transition: { duration: 0.2 },
        },
    };

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div>
            <div className="flex gap-16">
                <div className="mt-10 lg:block hidden">
                    <h1 className="text-2xl font-semibold">Filters</h1>
                    <hr className="my-4" />
                    <h1 className="text-xl font-medium ">Category</h1>
                    <hr className="my-4" />
                    <div className="mb-3">
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <p>Health Suggestion</p>
                        </div>

                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <p>Skin Care Suggestion</p>
                        </div>

                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <p>Mental Health Suggestion</p>
                        </div>

                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <p>Psychiatrist</p>
                        </div>

                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <p>Gynecologist</p>
                        </div>
                    </div>
                    <h1 className="text-xl font-medium ">Session Price</h1>
                    <hr className="my-4" />
                    <div className="flex items-center my-3">
                        <input placeholder="mini" className="border rounded-lg w-[70px]" type="text" name="" id="" />
                        <p className="mx-3">-</p>
                        <input placeholder="maxi" className="border rounded-lg w-[70px]" type="text" name="" id="" />
                        <motion.button whileHover="hover"  variants={linkVariants} className="bg-[#0360D9] ml-3 p-2 rounded-lg text-white">Apply</motion.button>
                    </div>
                    <div>
                        <h1 className="text-xl font-medium">Gender</h1>
                        <hr className="my-4" />
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <p>Male</p>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <p>Female</p>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <p>All</p>
                        </div>

                    </div>


                </div>
                <div className="border">
                    <div className="mt-10 mx-5 flex items-center">
                        <fieldset className="w-full space-y-1 ">
                            <label className="hidden">Search</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="button" title="search" className="p-1">
                                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 ">
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                    </button>
                                </span>
                                <input type="search" name="Search" placeholder="Search doctor..." className="w-48 py-2 pl-10 text-sm rounded-md lg:w-[400px] border" />
                            </div>
                        </fieldset>

                        <button onClick={toggleDrawer} className="btn-sm lg:hidden bg-[#0360D9]  rounded-lg text-white">Filter</button>
                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction='left'
                            className='bla bla bla'
                        >
                            <div className="mt-5 ml-5 lg:hidden">
                                <h1 className="text-2xl font-semibold">Filters</h1>
                                <hr className="my-4" />
                                <h1 className="text-xl font-medium ">Category</h1>
                                <hr className="my-4" />
                                <div className="mb-3">

                                    <div className="flex gap-2">
                                        <input type="checkbox" name="" id="" />
                                        <p>Health Suggestion</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <input type="checkbox" name="" id="" />
                                        <p>Skin Care Suggestion</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <input type="checkbox" name="" id="" />
                                        <p>Mental Health Suggestion</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <input type="checkbox" name="" id="" />
                                        <p>Psychiatrist</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <input type="checkbox" name="" id="" />
                                        <p>Gynecologist</p>
                                    </div>
                                </div>
                                <h1 className="text-xl font-medium ">Session Price</h1>
                                <hr className="my-4" />
                                <div className="flex items-center my-3">
                                    <input placeholder="mini" className="border rounded-lg w-[70px]" type="text" name="" id="" />
                                    <p className="mx-3">-</p>
                                    <input placeholder="maxi" className="border rounded-lg w-[70px]" type="text" name="" id="" />

                                </div>
                                <button className="bg-[#0360D9]  p-2 btn-sm rounded-lg text-white">Apply</button>

                                <div>
                                    <h1 className="text-xl font-medium mt-2">Gender</h1>
                                    <hr className="my-4" />
                                    <div className="flex gap-2">
                                        <input type="checkbox" name="" id="" />
                                        <p>Male</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <input type="checkbox" name="" id="" />
                                        <p>Female</p>
                                    </div>

                                </div>
                            </div>
                        </Drawer>


                    </div>
                    <div className="text-center my-10">
                        <h1 className="lg:text-4xl text-2xl font-bold ">Our Expert Doctors</h1>
                        <p className="text-lg">Meet our doctor—a beacon of knowledge, a guardian of health, and a partner in your wellness journey.</p>
                    </div>
                    <div className="mx-5">
                        <DoctorCard></DoctorCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;