import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from "../../components/navbar/Navbar";
import Widget from '../../components/widgets/Widget';
import Featured from '../../components/features/Featured';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/List';

const Home = () => {
  return (
    <div className='home flex'>
        <Sidebar />
    <div className="homeContainer flex-[6]"> 
    <Navbar />
    <div className="widgets flex p-[20px] gap-[20px]">
      <Widget type='users' />
      <Widget type='orders' />
      <Widget type='earnings' />
      <Widget type='balance' />

    </div>
    <div className="charts flex p-[20px] gap-[20px] pt-[5px] pb-[5px] pl-[20px] pr-[20px]">
      <Featured />
      <Chart />

    </div>
    <div className="listContainer shadow-xl shadow-[rgba(201,201,201,0.47)] p-[20px] m-[20px]">
      <div className="listTitle text-gray-400 mb-[15px] font-[500]"> Latest Transactions</div>
      <List />
    </div>
    
    </div>
    </div>
  )
}

export default Home