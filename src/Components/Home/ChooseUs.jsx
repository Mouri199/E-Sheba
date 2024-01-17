import img1 from '/Rectangle 11.png'
import { MdKeyboardDoubleArrowRight } from "react-icons/md"

const ChooseUs = () => {
    return (
        <div className='lg:flex mx-5 justify-center items-center gap-20 mt-20'>
            <div>
                <h1 className='text-4xl font-bold text-[#0360D9] mb-5'>Why You Choose Us?</h1>
                <div className='flex justify-between text-lg lg:mx-0 mx-10 dark:text-white gap-10'>
                    <div>
                        <div className='flex items-center gap-3'>
                            <MdKeyboardDoubleArrowRight className='text-redclr'></MdKeyboardDoubleArrowRight> <p>Good Service</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <MdKeyboardDoubleArrowRight className='text-redclr'></MdKeyboardDoubleArrowRight> <p className='my-4'> Help People</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <MdKeyboardDoubleArrowRight className='text-redclr'></MdKeyboardDoubleArrowRight><p>Hugine Tools</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-3'>
                            <MdKeyboardDoubleArrowRight className='text-redclr'></MdKeyboardDoubleArrowRight><p>24h Service</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <MdKeyboardDoubleArrowRight className='text-redclr'></MdKeyboardDoubleArrowRight><p className='my-4'>Health Check</p>
                        </div>

                        <div className='flex items-center  gap-3'>
                            <MdKeyboardDoubleArrowRight className='text-redclr'></MdKeyboardDoubleArrowRight><p>Blood Bank</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={img1} alt="" />
            </div>

        </div>
    );
};

export default ChooseUs;