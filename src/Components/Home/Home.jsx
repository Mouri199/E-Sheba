import Banner from "./Banner";
import DoctorSpecialist from "./DoctorSpecialist";
import SpecialistCard from "./SpecialistCard";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialistCard></SpecialistCard>
            <DoctorSpecialist></DoctorSpecialist>
        </div>
    );
};

export default Home;