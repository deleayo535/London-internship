import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FormInput } from './components/atoms';
import Dashboard from './components/organisms/Dashboard';
import Dropdown from './components/molecules/Dropdown';
import Filter from './components/molecules/Filters';
import Candidate from './components/organisms/Candidates';
import SideMenu from './components/organisms/SideMenu';
// import classes from './App.css';

function App() {
  return (
    <div className="App flex w-[100vw]">

      <div className='fixed w-[5%] h-[100%]'>
        <div className='w-[70px] bg-[white]'>
          <SideMenu />
        </div>
      </div>
      <div className="App-body ml-[70px] w-[95%]">
        <div>

        <div className='flex gap-12'>

        </div>
          <div className='flex justify-between space-between space-x-8 w-[100%]'>
            <div className=' w-[30%]'>
              <Dashboard/>
              <div className='mt-6 text-sxm'>
                <FormInput placeholder={'search by name, edu, exp or #tag'}  className='signInput'/>
              </div>
              <Filter/>
            </div>
            <div className='w-[70%] place-content-end'>
              <Candidate/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
