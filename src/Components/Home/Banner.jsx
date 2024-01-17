import banner from '/banner.png'

const Banner = () => {
    return (
        <div>
            <div className='lg:flex justify-around items-center bg-[#E1EEFF]  lg:px-[120px]'>
                <div className='px-5'>
                    <h1 className="lg:text-6xl text-3xl lg:mt-0+- font-bold">Find & Search Your <br />
                        <span className="text-[#0360D9]">Favourite</span> Doctor</h1>
                    <p> One of the essential qualities of a professional doctor is his humanity.  At our clinic, <br /> we take a great care of your health, mental and physical.</p>
                </div>
                <div className='absolute py-4 lg:mt-[582px]  lg:px-[120px] flex px-3 mx-3 gap-10 bg-[#0360D9] text-white lg:w-full w-[400px]'>
                    <div>
                        <h1 className='lg:text-6xl text-xl font-bold'>24/7 <span className='lg:mx-5'> | </span></h1>
                        <p>Online Support</p>
                    </div>
                    <div>
                        <h1 className='lg:text-6xl text-xl font-bold'>100+ <span className='lg:mx-5'> | </span></h1>
                        <p>Doctors</p>
                    </div>

                    <div>
                        <h1 className='lg:text-6xl text-xl font-bold'>1M+</h1>
                        <p>Active Patients</p>
                    </div>
                </div>
                <div>

                    <div className='lg:block hidden'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="700" viewBox="0 0 56 56" fill="none">
                            <circle cx="28" cy="38" r="28" fill="#A5CCFF" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="700" viewBox="0 0 56 56" fill="none">
                            <circle cx="28" cy="58" r="28" fill="#A5CCFF" />
                        </svg>
                    </div>

                    <img className='absolute -mt-[600px] lg:-ml-[140px] -ml-[60px] w-[798px] h-[600px]' src={banner} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;