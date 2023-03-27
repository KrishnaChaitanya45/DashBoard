import React from 'react'
import { KeyboardArrowDown } from '@mui/icons-material'
import { KeyboardArrowUp } from '@mui/icons-material'
import { PersonOutline } from '@mui/icons-material'
import { ShoppingCartOutlined } from '@mui/icons-material'
import { MonetizationOnOutlined } from '@mui/icons-material'
import { AccountBalanceWalletOutlined } from '@mui/icons-material'

const Widget = ({type}) => {
    const amount=900;
    const diff=35;
    let data;
    switch (type) {
        case "users":
            data={
                title:"USERS",
                isMoney:false,
                link:"View Active Users",
                icon:<PersonOutline className='text-[20px] p-[3px] rounded-[5px] self-end text-[#DC143C] bg-[rgba(255,0,0,0.2)]'/>
            }
            
            break;
            case "orders":
                data={
                    title:"ORDERS",
                    isMoney:false,
                    link:"View All Orders",
                    icon:<ShoppingCartOutlined className='text-[20px] p-[3px] rounded-[5px] self-end text-[#DAA520] bg-[rgba(218,165,32,0.2)]'/>

                }
                break;
                case "earnings":
                    data={
                        title:"EARNINGS",
                        isMoney:true,
                        link:"View Net Earnings",
                        icon:<MonetizationOnOutlined className='text-[20px] p-[3px] rounded-[5px] self-end text-green-600 bg-[rgba(0,128,0,0.2)]'/>
    
                    }
                break;
                case "balance":
                    data={
                        title:"BALANCE",
                        isMoney:true,
                        link:"See Details",
                        icon:<AccountBalanceWalletOutlined className='text-[20px] p-[3px] rounded-[5px] self-end text-purple-500 bg-[rgba(128,0,128,0.2)]'/>
    
                    }
                    break;
    
        default:
    }
  return (
    <div className='widget flex justify-between p-[10px] flex-1 shadow-xl shadow-[rgba(201,201,201,0.47)] rounded-[10px] h-[100px]'>
        <div className="left flex flex-col justify-between ">
        <span className="title font-bold text-[15px] text-[rgb(160,160,160)]">{data.title}</span>
        <span className="counter text-[25px] font-[300]">{data.isMoney && "$"} {amount}</span>
        <span className="link text-[12px] border-b-[1px] border-solid border-gray-400 w-max cursor-pointer">{data.link}</span>

        </div>

        <div className="right flex flex-col justify-between">
        <div className="percentage text-red-500">
            <KeyboardArrowDown  />
            {diff} %
            </div>
            {data.icon}

        </div>
       
        </div>
  )
}

export default Widget