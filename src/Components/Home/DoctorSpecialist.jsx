import img1 from '/h1-image1.jpg'
import img2 from '/medicine-article.webp'
import img3 from '/h1-image2.jpg'
import img4 from '/h1-image4.jpg'

const DoctorSpecialist = () => {
    return (
        <div className='mt-20 lg:flex justify-center items-center gap-10'>
            <div className='lg:flex gap-7'>
                <div>
                    <img className='h-[500px] transition ease-in-out hover:scale-105 duration-300 hover:-translate-y-1' src={img2} alt="" />
                    <img className='w-[500px] mt-4 transition ease-in-out hover:scale-105 duration-300 hover:-translate-y-1' src={img1} alt="" />
                </div>
                <div>
                    <img className='w-[350px] transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1' src={img3} alt="" />
                    <img  className='h-[520px] mt-4 transition ease-in-out hover:scale-105 duration-300 hover:-translate-y-1' src={img4} alt="" />
                </div>
            </div>
            <div className='px-5'>
                <h1 className='text-5xl font-bold text-[#0360D9] transition ease-in-out hover:scale-105 duration-300 hover:-translate-y-1'>Doctor Specialist</h1>
                <p className='my-5'>“One of the most important factors about people’s lives is the <br /> information of, the use of, and the growing knowledge of <br /> medicine. Medicine is a form of art. It depends on how skillfully <br /> doctors apply their knowledge when dealing with patients.”</p>
                <h1 className='text-3xl font-semibold mt-5 text-[#0360D9]'>Ataturk Changes</h1>
                <p className=''>Psychartist</p>
            </div>
        </div>
    );
};

export default DoctorSpecialist;