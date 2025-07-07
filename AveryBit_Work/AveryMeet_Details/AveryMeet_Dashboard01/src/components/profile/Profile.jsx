import React from "react";
import { useSelector } from "react-redux";
import { SlEnergy } from "react-icons/sl";
import { CiSettings } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa6";
import { IoHelpCircleOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { MdLogout } from "react-icons/md";

const Profile = () => {
  const open = useSelector((state) => state.sidebar.isOpen);

  return (
    <div
      className={`w-[250px]  border-[1px] rounded-lg shadow-xl border-slate-300 
       absolute p-[5px] bg-white ${
         open ? "left-[18px] top-[140px]" : " left-[70px]"
       }`}
    >
      {!open && (
        <div className=" flex justify-center items-center gap-2 mt-4">
          <div
            className="bg-green-800 w-[40px] h-[40px] flex 
            justify-center items-center rounded-full text-2xl text-white
            shadow-md"
          >
            A
          </div>
          <div>
            <p className="font-bold">{`Aayush Patidar`}</p>
            <p className="text-sm">{`arjeetpatidar@gmail.com`}</p>
          </div>
        </div>
      )}
      <div className="mt-6">
        {/* element 01 */}
        <div
          className=" flex flex-col justify-center items-center
         w-[90%] hover:bg-slate-100 mx-auto pl-3 pr-3 pt-2 pb-2
            rounded-lg hover:text-blue-500"
        >
          <div className=" flex justify-start gap-5 items-center w-[100%]  ">
            <SlEnergy className="text-lg font-bold " />
            <p className="font-medium ">Upgrade Plan</p>
          </div>
        </div>

        {/* element 02 */}
        <div
          className=" flex flex-col justify-center items-center
             w-[90%] hover:bg-slate-100 mx-auto pl-3 pr-3 pt-2 pb-2
            rounded-lg hover:text-blue-500"
        >
          <div className=" flex justify-start gap-5 items-center w-[100%]  ">
            <CiSettings className="text-lg font-bold " />
            <p className="font-medium "> Account Setings</p>
          </div>
        </div>

        {/* element 03 */}
        <div
          className=" flex flex-col justify-center items-center
             w-[90%] hover:bg-slate-100 mx-auto pl-3 pr-3 pt-2 pb-2
            rounded-lg hover:text-blue-500"
        >
          <div className=" flex justify-start gap-5 items-center w-[100%]  ">
            <FaUserPlus className="text-lg font-bold " />
            <p className="font-medium "> Invite Teammates</p>
          </div>
        </div>
        {/* element 04 */}
        <div
          className=" flex flex-col justify-center items-center
             w-[90%] hover:bg-slate-100 mx-auto pl-3 pr-3 pt-2 pb-2
            rounded-lg hover:text-blue-500"
        >
          <div className=" flex justify-start gap-5 items-center w-[100%]  ">
            <IoHelpCircleOutline className="text-lg font-bold " />
            <p className="font-medium "> Help Center</p>
          </div>
        </div>
        {/* element 05 */}
        <div
          className=" flex flex-col justify-center items-center
             w-[90%] hover:bg-slate-100 mx-auto pl-3 pr-3 pt-2 pb-2
            rounded-lg hover:text-blue-500"
        >
          <div className=" flex justify-start gap-5 items-center w-[100%]  ">
            <FiMessageCircle className="text-lg font-bold " />
            <p className="font-medium "> Contact Support</p>
          </div>
        </div>
        {/* element 06 */}
        <div
          className=" flex flex-col justify-center items-center
             w-[90%] hover:bg-slate-100 mx-auto pl-3 pr-3 pt-2 pb-2
            rounded-lg hover:text-blue-500"
        >
          <div className=" flex justify-start gap-5 items-center w-[100%]  ">
            <MdLogout className="text-lg font-bold " />
            <p className="font-medium "> Logout</p>
          </div>
        </div>
        <div className="border-[1px] border-slate-400 w-[95%] mx-auto"></div>
      </div>
      <div
        className="flex flex-col justify-center items-center gap-1
         mt-2 bg-slate-100 pt-[5px] pb-[5px] rounded-lg"
      >
        <button
          className=" w-[90%] border-[2px] border-blue-600
           rounded-lg p-[8px] mx-auto"
        >
          Manage Workspace
        </button>
        <button
          className="flex justify-center items-center w-[90%] mx-auto 
           border-blue-400 border-[1px] rounded-lg hover:bg-blue-700
           bg-blue-500 p-[8px] gap-2 text-white"
        >
          <FaUserPlus className="text-lg font-bold " />
          <p className="font-medium "> Invite Teammates</p>
        </button>
      </div>
    </div>
  );
};

export default Profile;
