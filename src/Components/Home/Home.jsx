import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import DoctorSpecialist from "./DoctorSpecialist";
import OurStory from "./OurStory";
import Review from "./Review";
import SpecialistCard from "./SpecialistCard";
import img from '/last-section-bg.jpg'



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialistCard></SpecialistCard>
            <DoctorSpecialist></DoctorSpecialist>
            <ChooseUs></ChooseUs>
            <OurStory></OurStory>
            <div className="hero h-[600px]" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold">Buying medicines should be quick & easy!</h1>
                        <p className="mb-5">Build an online pharmacy with IPharm</p>
                        <button className="btn btn-primary">Nuy Medicine</button>
                    </div>
                </div>
            </div>
            <Review></Review>
        </div>
    );
};

export default Home;