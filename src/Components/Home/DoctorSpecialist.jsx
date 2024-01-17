import img1 from '/h1-image1.jpg'
import img2 from '/h1-image3.jpg'
import img3 from '/h1-image2.jpg'
import img4 from '/h1-image4.jpg'

const DoctorSpecialist = () => {
    return (
        <div className='mt-20 lg:flex justify-center items-center gap-10'>
            <div className='flex gap-7'>
                <div>
                    <img className='h-[500px]' src={img1} alt="" />
                    <img className='w-[350px] mt-4' src={img2} alt="" />
                </div>
                <div>
                    <img className='w-[350px]' src={img3} alt="" />
                    <img  className='h-[500px] mt-4' src={img4} alt="" />
                </div>
            </div>
            <div className='px-5'>
                <h1 className='text-5xl font-bold text-[#0360D9]'>Doctor Specialist</h1>
                <p className='my-5'>“One of the most important factors about people’s lives is the <br /> information of, the use of, and the growing knowledge of <br /> medicine. Medicine is a form of art. It depends on how skillfully <br /> doctors apply their knowledge when dealing with patients.”</p>
                <h1 className='text-3xl font-semibold mt-5 text-[#0360D9]'>Ataturk Changes</h1>
                <p className=''>Cardiac surgery</p>
            </div>
        </div>
    );
};

export default DoctorSpecialist;