import banner from '/banner.png'

const Banner = () => {
    return (
        <div>
            <div className='lg:flex justify-around items-center bg-[#E1EEFF]'>
                <div className='px-5 lg:px-0'>
                    <h1 className="lg:text-6xl mb-3 text-3xl font-bold">Find & Search Your <br />
                        <span className="text-[#0360D9]">Constituent</span> Medicine</h1>
                    <p className='mb-5'> MedCareHub is  one of the largest medical store that provides medicines on prescription & <br /> OTC. Order medicine online & get fastest delivery in your city.</p>
                    <button className="btn bg-[#0360D9] text-white">Contact Us</button>
                </div>
                <div className='absolute mt-6 py-4 lg:mt-[582px]  lg:px-[120px] flex px-3 mx-3 gap-10 bg-[#0360D9] text-white lg:w-[1600px]'>
                    <div>
                        <h1 className='lg:text-6xl text-xl font-bold'>24/7 </h1>
                        <p>Online Support</p>
                    </div>
                    <div>
                        <h1 className='lg:text-6xl text-xl font-bold'>100+ </h1>
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
                    <div className='lg:hidden'>
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