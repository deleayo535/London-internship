import image from '../../../images/Frame 501.png'
import check from '../../../images/Default.svg'
import { ApplicantProps } from './applicant.tpyes';

function Applicant ({
    name,
    place,
    degree,

    
}: ApplicantProps) {
    return(
    <div className='border-t-2'>
        <div className='flex space-x-8 items-center space-between p-8 cursor-pointer'>
            <div className='text-smmd font-bold text-[#1D4ED8]'>
                <img src={check} alt='' />
            {/* <CheckSquareOutlined  style={{paddingRight: '28px'}}/> */}
            </div>
            <div className="w-[900px] rounded-lg">
                <div className="flex px-2 py- space-x-2">
                    <div className="w-[15%]  ">
                        <div className="w-[100%] items-center justify-center mt-14">
                            <img className="w-[80px] h-[80px] rounded-full" src={image} alt=""/>
                        </div>
                    </div>
                    <div className="w-[] text-[19px] space-y-3">
                        <p className="pl-[8px] text-smmd font-bold">{name}</p>
                        <p className="pl-[8px] text-sm font-semibold">{place}</p>
                        <p className="pl-[8px] text-sm">{degree}</p>
                        <div className="flex gap-4 pl-[8px]">
                            <h3 className="text-[#1D4ED8] text-sm">#top_candidate</h3>
                            <h3 className="text-[#1D4ED8] text-sm">#top_candidate</h3>
                            {/* <h3 className="text-[#18A0FB]">time</h3> */}
                        </div>
                        <div className='flex space-x-4'>
                            <div className='bg-[#F3FAFC] w-[100px] h-[30px] text-sxm rounded-lg px-2 justify-center items-center flex'>New York</div>
                            <div className='bg-[#F3FAFC] w-[100px] h-[30px] text-sxm rounded-lg px-2 justify-center items-center flex'>Marketing</div>
                            <div className='bg-[#F3FAFC] w-[100px] h-[30px] text-sxm rounded-lg px-2 justify-center items-center flex'>London</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Applicant;