import { DoctorData } from "../../assets/Data/Doctor";
import { SlCalender } from "react-icons/sl";
import { TbCoinTaka } from "react-icons/tb";
import { TbGenderGenderqueer } from "react-icons/tb";
import { motion } from "framer-motion";


const DoctorCard = () => {
    const linkVariants = {
        hover: {
            scale: 1.1,
            transition: { duration: 0.2 },
        },
    };
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 lg:gap-6 my-10">
            {
                DoctorData?.map((data) => (
                    <div key={data.ID}>
                        <div className="max-w-sm bg-white border  border-gray-200 rounded-lg shadow">
                            <figure className="px-3 pt-4">
                                <img className="transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1 rounded-t-lg h-[200px] w-[500px]  lg:w-[700px]" src={data.image} alt="" />
                            </figure>

                            <div className="p-5">
                                <a href="#">
                                    <h5 className="lg:mb-2 lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.DocName}</h5>
                                </a>
                                <p className="mb-3 font-normal lg:text-lg text-sm text-gray-700 dark:text-gray-400">{data.DocType}</p>
                                <hr className="my-4" />

                                <p className="flex items-center lg:text-lg text-sm gap-3"><SlCalender />Available {data.startAvail >= 12 ? data.startAvail % 12 : data.startAvail} {data.startAvail >= 12 ? 'PM' : 'AM'} to {data.endAvail >= 12 ? data.endAvail % 12 : data.endAvail} {data.endAvail >= 12 ? 'PM' : 'AM'}</p>

                                <p className="flex items-center gap-3 lg:text-lg text-sm my-2"><TbCoinTaka />{data.serviceFee}</p>

                                <p className="flex items-center gap-3 lg:text-lg text-sm my-2"><TbGenderGenderqueer /> {data.gender}</p>

                                <motion.button whileHover="hover"  variants={linkVariants}  className="btn bg-[#0360D9] hover:bg-[#0360D9] text-white  w-full">View Profile</motion.button>
                            </div>
                        </div>
                    </div>
                ))
            }



        </div>
    );
};

export default DoctorCard;