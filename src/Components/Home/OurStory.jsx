import img from '/sized-kendal-l4ikccachoc-unsplash.webp'

const OurStory = () => {
    return (
        <div>
            <section>
                <div className="bg-[#A5CCFF] mt-10">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-white">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl text-[#0360D9]">About Us</h1>
                        <p className="transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1 mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-black ">Welcome to MedCareHub, where health and well-being converge with cutting-edge medical solutions.We are dedicated to revolutionizing healthcare by providing access to innovative and reliable medical information and products.</p>
                        <div className="flex flex-wrap justify-center">
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold border rounded hover:bg-[#0360D9] text-[#0360D9] hover:text-white ">Learn more</button>
                        </div>
                    </div>
                </div>
                <img src={img} alt="" className="lg:w-[900px] mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1 " />
            </section>
        </div>
    );
};

export default OurStory;