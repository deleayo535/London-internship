
  import calender from '../../../images/Calendar_Check.svg'
  import file from '../../../images/File_Document.svg'
  import heart from '../../../images/Heart_01.svg'
  import house from '../../../images/House_01.svg'
  import notebook from '../../../images/Notebook.svg'

  import setting from '../../../images/Settings.svg'
  import share from '../../../images/Share_Android.svg'
  import user from '../../../images/Users_Group.svg'
  import right from '../../../images/Chevron_Right_MD.svg'
  import image from '../../../images/Frame 501.png'
  
  function SideMenu() {
    return (
      <div className="">
        <div className='flex flex-col justify-center items-center justify-between h-[100vh]'>

       <div className='flex flex-col space-y-3 px-4 py-6 justify-center items-center'>

            <div className='bg-[white] hover:bg-[#E9EFFF]  rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[38px] h-[38px] rounded-full " src={image} alt=""/>
            </div>
            <div className='bg-[#E9EFFF] rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[28px] h-[28px] rounded-full" src={house} alt=""/>
            </div>
            <div className='bg-[white] hover:bg-[#E9EFFF]  rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[28px] h-[28px] rounded-full " src={user} alt=""/>
            </div>
            <div className='bg-[white] hover:bg-[#E9EFFF]  rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[28px] h-[28px] rounded-full " src={calender} alt=""/>
            </div>
           
            
            <div className='bg-[white] hover:bg-[#E9EFFF]  rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[28px] h-[28px] rounded-full " src={share} alt=""/>
            </div>
            <div className='bg-[white] hover:bg-[#E9EFFF]  rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[28px] h-[28px] rounded-full " src={file} alt=""/>
            </div>
           
            <div className='bg-[white] hover:bg-[#E9EFFF]  rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[28px] h-[28px] rounded-full " src={notebook} alt=""/>
            </div>
            

            <div className='bg-[white] hover:bg-[#E9EFFF]  rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[28px] h-[28px] rounded-full " src={heart} alt=""/>
            </div>
           
           
            <div className='bg-[white] hover:bg-[#E9EFFF]  rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[28px] h-[28px] rounded-full " src={right} alt=""/>
            </div>
        </div>
        <div className='flex flex-col space-y-6 px-4 py-6 justify-center items-center'>
            <div className='bg-[white] hover:bg-[#E9EFFF]  rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[38px] h-[38px] rounded-full " src={setting} alt=""/>
            </div>
            <div className='bg-[white] hover:bg-[#E9EFFF]  rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[38px] h-[38px] rounded-full " src={image} alt=""/>
            </div>
        </div>
        </div>
      </div>
    );
  }
  export default SideMenu;