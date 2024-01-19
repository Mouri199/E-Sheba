import { MedicineData } from "../../assets/Data/Medicine";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import DoctorSpecialist from "./DoctorSpecialist";
import OurStory from "./OurStory";
import Review from "./Review";
import SpecialistCard from "./SpecialistCard";
import img from '/last-section-bg.jpg'



const Home = () => {

    // const uniqueCategories = Array.from(new Set(MedicineData.map(item => item.Category)));

    return (
        <div>
            <Banner></Banner>
            <SpecialistCard></SpecialistCard>
            <div className="lg:flex justify-around mx-5 lg:mx-10 my-20">
               {
                MedicineData?.map((data)=>(
                    <div key={data.ID}>
                        <img src={data.CategoryImage} alt="" />

                    </div>
                ))
               }
            </div>
            <DoctorSpecialist></DoctorSpecialist>
            <ChooseUs></ChooseUs>
            <OurStory></OurStory>
            <div className="hero h-[600px]" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 lg:text-5xl text-3xl font-bold">Buying medicines should be quick & easy!</h1>
                        <p className="mb-5">Build an online pharmacy with IPharm</p>
                        <button className="btn bg-[#0360D9] text-white">Buy Medicine</button>
                    </div>
                </div>
            </div>
            <Review></Review>
        </div>
    );
};

export default Home;