import img from '/h2-banner01.jpg'

const OurStory = () => {
    return (
        <div>
            <section>
                <div className="bg-[#A5CCFF] mt-10">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-white">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl text-[#0360D9]">Our Story</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl ">We are pleased to offer quick and thorough healthcare services with an on-site laboratory and digital X-Ray machine to help improve diagnosis</p>
                        <div className="flex flex-wrap justify-center">
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold border rounded hover:bg-[#0360D9] text-[#0360D9] hover:text-white">Get started</button>
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold border rounded hover:bg-[#0360D9] text-[#0360D9] hover:text-white ">Learn more</button>
                        </div>
                    </div>
                </div>
                <img src={img} alt="" className="w- mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 " />
            </section>
        </div>
    );
};

export default OurStory;