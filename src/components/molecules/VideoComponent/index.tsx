import mail from '../../../images/Mail.svg'
import user from '../../../images/User_Check.svg'
import usercheck from '../../../images/User_Check2.svg'
import uservioce from '../../../images/User_Voice.png'
import cp from '../../../images/CP Icons (tag)_Artboard 2 (1) 1.svg'
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Button, Dropdown, Space, message } from 'antd';


const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  
  const items: MenuProps['items'] = [
    {
      label: 'Applied',
      key: '1',
      
    },
    {
      label: 'Video Interview',
      key: '2',
      
    },
    {
      label: 'Saved Videos',
      key: '3',
      
    },
    
  ];

const menuProps = {
    items,
    onClick: handleMenuClick,
  };

function VideoComponent (){
    return <div className='flex justify-center items-center space-x-4'>
        <div className='flex space-x-2 border-r-2 pr-4 h-[30px] justify-center items-center cursor-pointer'>
            <div className='bg-[white] hover:bg-[#E9EFFF] rounded-lg flex w-[40px] h-[40px] justify-center items-center'>

            <img className="w-[30px] h-[30px] rounded-full" src={cp} alt=""/>
            </div>
            <div className='bg-[white] hover:bg-[#E9EFFF] rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[30px] h-[30px] rounded-full" src={user} alt=""/>
            </div>
            <div className='bg-[white] hover:bg-[#E9EFFF] rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[30px] h-[30px] rounded-full" src={uservioce} alt=""/>
            </div>
            <div className='bg-[white] hover:bg-[#E9EFFF] rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[30px] h-[30px] rounded-full" src={usercheck} alt=""/>
            </div>
            <div className='bg-[white] hover:bg-[#E9EFFF] rounded-lg flex w-[40px] h-[40px] justify-center items-center'>
            <img className="w-[30px] h-[30px] rounded-full" src={mail} alt=""/>
            </div>

        </div>
        <div>
        <Space direction="vertical">
     
        <Dropdown menu={menuProps}>
      <Button className='flex justify-between px-4 justify-center items-center w-[280px] h-[46px] bg-[#1D5ECD] text-[white] rounded-md'>
        <Space className='text-sm font-semibold '>
          Move To Video Interview
        </Space>
        <DownOutlined />
      </Button>
    </Dropdown>
   </Space>
        </div>
    </div>
}

export default VideoComponent;



