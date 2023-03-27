import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { KeyboardArrowDown } from '@mui/icons-material'
import { KeyboardArrowUp } from '@mui/icons-material'
const Featured = () => {
  return (
    <div className='flex-[2] shadow-xl shadow-[rgba(201,201,201,0.47)] p-[10px] '>
        <div className="top flex items-center justify-between text-gray-400">
            <h1 className="title text-[16px] font-[500] ">Total Revenue</h1>
                <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom p-[20px] flex flex-col items-center justify-center gap-[10px]">
            <div className="featuredChart w-[100px] h-[100px]">
                <CircularProgressbar text="50%" value={50} strokeWidth= {3} />

            </div>
            <p className="font-[500] text-gray-400 text-[20px]">Total Saled Made Today</p>
            <p className="text-[30px]">$720</p>
            <p className="text-[12px] text-center text-gray-400">Latest transactions are still processing and their are not included in this data</p>
            <div className="summary w-full flex items-center justify-between">
                <div className="item text-center">
                    <div className="itemTitle text-[14px] text-gray-400">Today</div>
                    <div className="itemResult flex items-center mt-[10px] text-[15px] text-green-400">
                    < KeyboardArrowUp fontSize='small'/>
                        <div className="revenue">$23.5k</div>
                    </div>
                </div>
                <div className="item text-center">
                    <div className="itemTitle text-[14px] text-gray-400">Last Week</div>
                    <div className="itemResult flex items-center mt-[10px] text-[15px] text-red-400">
                    < KeyboardArrowDown fontSize='small'/>
                        <div className="revenue">$73.5k</div>
                    </div>
                </div>
                <div className="item text-center">
                    <div className="itemTitle text-[14px] text-gray-400">Last Month</div>
                    <div className="itemResult flex items-center mt-[10px] text-[15px] text-green-400 ">
                    < KeyboardArrowUp fontSize='small'/>
                        <div className="revenue">$280.5k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured