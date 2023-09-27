// import React, { useState } from 'react';

// function Dropdown (){
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//   let regions = ['region 1', 'region 2', 'region 3', 'region 4'];

//   return <div>
//     <div className="relative flex justify-start items-start gap-5">
//       <button
//         onClick={toggleDropdown}
//         className="relative flex justify-center items-center py-4 text-md bg-white border-2 border-gray-300 text-black focus:outline-none shadow rounded-lg focus:ring ring-gray-200"
//       >
//         <p className="pr-6 text-left text-lg">Region</p>
//         {/* <span className="border-l pl-4 hover:bg-gray w-[35px]">
//           <IoIosArrowDown />
//         </span> */}
//       </button>

//       {isOpen && (
//         <div className="absolute top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
//           <ul className="text-left border rounded">
//             {regions.map((region: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
//               <li key={index} className="cursor-pointer px-4 py-2 hover:bg-gray-100 border-b">
//                 {region}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>

//   </div>
// }

// export default Dropdown;

import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Divider, Dropdown, message, Space, Tooltip } from 'antd';
// import React from 'react';

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: 'Applied',
    key: '1',
    // icon: <UserOutlined />,
  },
   {
    type: 'divider',
  },
  {
    label: 'Shortlisted',
    key: '2',
    // icon: <UserOutlined />,
  },
   {
    type: 'divider',
  },
  {
    label: 'Technical Interview',
    key: '3',
    // icon: <UserOutlined />,
    // danger: true,
  },
   {
    type: 'divider',
  },
  {
    label: 'Opportunity Browsing',
    key: '4',
   
  },
   {
    type: 'divider',
  },
  {
    label: 'Video Interview I',
    key: '5',
   
  },
   {
    type: 'divider',
  },
  {
    label: 'Video Interview II',
    key: '6',
   
  },
   {
    type: 'divider',
  },
  {
    label: 'Video Interview III',
    key: '7',
   
  },
   {
    type: 'divider',
  },
  {
    label: 'Offer',
    key: '8',
   
  },
   {
    type: 'divider',
  },
  {
    label: 'Withdrawn',
    key: '9',
   
  },
   
];

const menuProps = {
  items,
  // onClick: handleMenuClick,
};

const App: React.FC = () => (
  <Space wrap >
    <Dropdown menu={menuProps} className='text-base' overlayStyle={{padding: '8px', fontSize: '30px'}} >
      <Button className='flex justify-between px-6 justify-center items-center w-[340px] h-[50px] bg-[white] rounded-full'
      >
        <Space className='text-[#1D4ED8] text-sm font-semibold'>
          Opportunity Browsing
        </Space>
        <DownOutlined className='' />
      </Button>
    </Dropdown>
  </Space>
);

export default App;

