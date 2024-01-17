import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import DoctorSpecialist from "./DoctorSpecialist";
import OurStory from "./OurStory";
import SpecialistCard from "./SpecialistCard";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialistCard></SpecialistCard>
            <DoctorSpecialist></DoctorSpecialist>
            <ChooseUs></ChooseUs>
            <OurStory></OurStory>
        </div>
    );
};

export default Home;