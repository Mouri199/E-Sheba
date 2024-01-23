import img1 from '/ChooseUs.jpg'
import { MdKeyboardDoubleArrowRight } from "react-icons/md"

const ChooseUs = () => {
    return (
        <div className='lg:flex mx-5 justify-center items-center gap-20 mt-20'>
            <div>
                <h1 className='text-4xl font-bold text-[#0360D9] mb-5'>Why You Choose Us?</h1>
                <div className='lg:flex justify-between text-lg lg:mx-0 mx-10 dark:text-white gap-10'>
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
                            <MdKeyboardDoubleArrowRight className='text-redclr'></MdKeyboardDoubleArrowRight><p className='my-4'>Health Suggetion</p>
                        </div>

                        <div className='flex items-center  gap-3'>
                            <MdKeyboardDoubleArrowRight className='text-redclr'></MdKeyboardDoubleArrowRight><p>Pet Medicine</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className='lg:w-[700px] transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1' src={img1} alt="" />
            </div>

        </div>
    );
};

export default ChooseUs;