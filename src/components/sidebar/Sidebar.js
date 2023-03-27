import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex-1 border-r-[0.5px] border-[rgb(230,227,227)] min-h-[100vh]">
      <div className="top flex items-center justify-center h-[50px] ">
        <Link to="/">
          <span className="logo text-[20px] text-[#6439ff] font-bold">
            Admin Dashboard
          </span>
        </Link>
      </div>
      <hr className="border-[0.5px] border-solid border-[rgb(230,227,227)] h-0" />
      <div className="center p-[10px]">
        <ul>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <DashboardIcon className="text-[#7451f8] text-[18px]" />
            <Link to="/">
              <span className="ml-[10px] font-[600] text-[15px] text-gray-400">
                Dashboard
              </span>
            </Link>
          </li>
          <p className=" font-bold text-[#999] text-[10px] mt-[25px] mb-[10px] ">
            SERVICE
          </p>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <PeopleIcon className="text-[#7451f8] text-[18px]" />
            <Link to="users">
              {" "}
              <span className="ml-[10px] font-[600] text-[15px] text-gray-400">
                Users
              </span>
            </Link>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <InventoryIcon className="text-[#7451f8] text-[18px]" />
            <span className="ml-[10px] font-[600] text-[15px] text-gray-400">
              <Link to="/products">Products</Link>
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <BookmarkBorderIcon className="text-[#7451f8] text-[18px]" />
            <span className="ml-[10px] font-[600] text-[15px] text-gray-400">
              Orders
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <LocalShippingIcon className="text-[#7451f8] text-[18px]" />
            <span className="ml-[10px] font-[600] text-[15px] text-gray-400">
              Delivery
            </span>
          </li>
          <p className=" font-bold text-[#999] text-[10px] mt-[25px] mb-[10px]">
            Main
          </p>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <QueryStatsIcon className="text-[#7451f8] text-[18px]" />
            <span className="ml-[10px] font-[600] text-[15px] text-gray-400">
              Stats
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <NotificationsIcon className="text-[#7451f8] text-[18px]" />
            <span className="ml-[10px] font-[600] text-[15px] text-gray-400">
              Notifications
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <SystemSecurityUpdateGoodIcon className="text-[#7451f8] text-[18px]" />
            <span className="ml-[10px] font-[600] text-[15px] text-gray-400">
              System Health
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <PsychologyIcon className="text-[#7451f8] text-[18px]" />
            <span className="ml-[10px] font-[600] text-[15px] text-gray-400">
              Logs
            </span>
          </li>
          <p className=" font-bold text-[#999] text-[10px] mt-[25px] mb-[10px]">
            USER
          </p>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <SettingsIcon className="text-[#7451f8] text-[18px]" />
            <span className="ml-[10px] font-[600] text-[15px] text-gray-400">
              Settings
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <PersonIcon className="text-[#7451f8] text-[18px]" />
            <span className="ml-[10px] font-[600] text-[15px] text-gray-400">
              Profile
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <LogoutIcon className="text-[#7451f8] text-[18px]" />
            <span className="ml-[10px] font-[600] text-[15px] text-gray-400">
              Log out
            </span>
          </li>
        </ul>
      </div>
      <div className="bottom flex items-center ml-14 mt-8">
        <div className="colorOptions w-[20px] h-[20px] rounded-[5px] border-[0.5px] border-solid border-[#7451f8] bg-white m-[5px]"></div>
        <div className="colorOptions w-[20px] h-[20px] rounded-[5px] border-[0.5px] border-solid border-[#7451f8] bg-[#333] m-[5px]"></div>
      </div>
    </div>
  );
};

export default Sidebar;
