import Applicant from '../../molecules/Applicant';
import Dropdown from '../../molecules/Dropdown';
import check from '../../../images/Default.svg'

import VideoComponent from '../../molecules/VideoComponent';

function Candidate () {
    return(

        <div >

        <div className='flex justify-center justify-between items-center'>
       <Dropdown/> 
       <VideoComponent/>

        </div>
    <div className="w-[100%] bg-[white] rounded-lg h-[] mt-10">
        <div className='flex justify-between space-between p-8 '>
            <div className='flex justify-center items-center space-x-8'>
                <div className='text-smmd font-bold text-[#1D4ED8]'>
                <img src={check} alt='' />

                </div>
                    <div className='text-smmd font-bold text-[#1D4ED8]'>
                    247 Candidates
                    </div>
            </div>
            <div className='flex gap-4 cursor-pointer'>
                <p className='border-r-2 text-smmd font-semibold pr-4 text-[#1D4ED8]'>Qualified</p>
                <p className='border-r-2 text-smmd font-semibold hover:text-[#1D4ED8] pr-4'>Task</p>
                <p className='text-smmd font-semibold hover:text-[#1D4ED8]'>Disqualified</p>
            </div>
        </div>
            
        <div>
            <Applicant  name={'Aaliyah Sanderson'} place={'Riyadh, Saudi Arabia'}  degree={'Bachelor - Cambridge University (2023 - 2023)'} />
            <Applicant  name={'Jojn Doe'} place={'Bostom, USA'}  degree={'Bachelor - MIT (2023 - 2023)'}/>
            <Applicant  name={'Thomas Matt'} place={'Edinburgh, UK'}  degree={'Bachelor - Harvard University (2023 - 2023)'}/>
            <Applicant  name={'Kamilia Smith'} place={'London Uk'}  degree={'Bachelor - Boston University (2023 - 2023)'}/>
            <Applicant  name={'Roy Jade'} place={'Cambridge,  UK'}  degree={'Bachelor - Yale (2023 - 2023)'}/>
            <Applicant  name={'Ahmed Salman'} place={'New York, USA'}  degree={'Bachelor - Cambridge University (2023 - 2023)'}/>
            <Applicant  name={'Aaliyah Sanderson'} place={'Riyadh, Saudi Arabia'}  degree={'Bachelor - Cambridge University (2023 - 2023)'} />
            <Applicant  name={'Jojn Doe'} place={'Bostom, USA'}  degree={'Bachelor - MIT (2023 - 2023)'}/>
            <Applicant  name={'Thomas Matt'} place={'Edinburgh, UK'}  degree={'Bachelor - Harvard University (2023 - 2023)'}/>
            <Applicant  name={'Kamilia Smith'} place={'London Uk'}  degree={'Bachelor - Boston University (2023 - 2023)'}/>
            <Applicant  name={'Roy Jade'} place={'Cambridge,  UK'}  degree={'Bachelor - Yale (2023 - 2023)'}/>
            <Applicant  name={'Ahmed Salman'} place={'New York, USA'}  degree={'Bachelor - Cambridge University (2023 - 2023)'}/>
           
        </div>
        </div>
    </div>)
}

export default Candidate;