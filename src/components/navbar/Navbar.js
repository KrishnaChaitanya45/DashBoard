import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlined from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlinedOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className='navbar flex items-center h-[50px] text-[14px] text-[#555] border-b border-[0.5px] border-[rgb(230,227,227)]'>
      <div className="wrapper flex items-center p-[20px] w-[100%] justify-between">
        <div className="search outline-none  flex items-center border-[0.5px] border-solid border-gray-400 p-[3px]">
        
          <input type="text" className='font-semibold border-none outline-none bg-transparent placeholder:text-[12px] placeholder:font-bold' placeholder='Search Here...' />
          <SearchIcon />

        </div>
        <div className="items flex items-center ">
          <div className="items  flex items-center mr-[30px]">
            <LanguageOutlinedIcon   className='text-[20px] cursor-pointer text-[#7451f8]'/>

          </div>
          <div className="items  flex items-center mr-[30px]">
            <DarkModeOutlinedIcon  className='text-[20px] cursor-pointer text-[#7451f8]'/>

          </div>
          <div className="items flex items-center mr-[30px]">
            <FullscreenExitOutlined  className='text-[20px] cursor-pointer text-[#7451f8]'/>

          </div>
          <div className="items flex items-center mr-[30px] relative">
            < NotificationsNoneOutlinedIcon  className='text-[20px] cursor-pointer text-[#7451f8] relative'/>
            <div className="counter text-white bg-red-500 w-[15px] h-[15px] absolute top-[-1px] right-[-1px] rounded-full flex items-center justify-center text-[12px] font-bold">
              1
            </div>

          </div>
          <div className="items flex items-center mr-[30px] relative">
            <ChatBubbleOutlinedOutlinedIcon  className='text-[20px] cursor-pointer text-[#7451f8] relative'/>
            <div className="counter text-white bg-red-500 w-[15px] h-[15px] absolute top-[-3px] right-[-3px] rounded-full flex items-center justify-center text-[12px] font-bold">
              2
            </div>

          </div>
          <div className="items flex items-center mr-[30px]">
            <ListOutlinedIcon   className='text-[20px] cursor-pointer text-[#7451f8]' />

          </div>
          <div className="items flex items-center mr-[30px]">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888" className="w-[40px] h-[40px] rounded-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar