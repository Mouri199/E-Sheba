import { Specialist } from "../../assets/Data/Specialist";


const SpecialistCard = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold my-20 mx-[120px]">
                Our Consulting Specialists
            </h1>
            <div className="lg:flex lg:space-y-0 space-y-5 mx-5 justify-center gap-10">

                {
                    Specialist?.map((data) => (
                        <div key={data.title}>
                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 h-[240px] dark:border-gray-700">
                                <img className="bg-[#E6F5FC] p-2 rounded-full" src={data.image} alt="" />
                                <a href="#">
                                    <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{data.details}</p>

                            </div> </div>

                    ))
                }



            </div>
        </div>

    );
};

export default SpecialistCard;