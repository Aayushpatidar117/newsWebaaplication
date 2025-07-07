import React, { useEffect, useRef } from "react";
import { GoGift, GoHome, GoSearch } from "react-icons/go";
import { LuChevronDown, LuGrid2X2, LuMessageCircle } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { hidePopup, toggleProfile } from "../../../Redux/slice/popupSlice";
import Profile from "../profile/Profile";

const FullSideBar = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.popup.profileVisible);
  const profileRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      setTimeout(() => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
          dispatch(hidePopup());
        }
      }, 0);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch]);

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div
          className="w-[90%] border border-gray-300 rounded-xl
          mt-[10px] shadow-xl flex flex-col justify-center items-center"
        >
          <div
            className="flex justify-center cursor-pointer
              w-[100%] hover:bg-slate-200 rounded-t-xl"
            ref={profileRef}
            onClick={() => dispatch(toggleProfile())}
          >
            <div
              className="w-10 h-10 rounded-full 
                             bg-green-800 flex items-center justify-center 
                             text-white font-medium hover:shadow-x m-2"
            >
              A
            </div>
            <div className="ml-2 flex-grow">
              <div className="font-medium">Aayush Patidar</div>
              <div className="text-gray-500 text-sm truncate">
                arjeetpatidar@gma...
              </div>
            </div>
            <button className="mr-5">
              <LuChevronDown size={20} />
            </button>
          </div>

          {open && <Profile />}

          <div className="w-full border-t border-gray-300"></div>

          <button
            className="w-full flex items-center justify-start 
                    px-3 py-3 text-gray-700 hover:text-blue-600 
                    gap-3 hover:bg-blue-200 rounded-b-xl"
          >
            <GoGift size={18} className="ml-2" />
            <span>Get Pro For Free</span>
          </button>
        </div>
      </div>

      <div className="mt-2">
        <div
          className="flex items-center px-4 py-2 w-[90%] rounded-lg mx-auto
         hover:bg-slate-200 cursor-pointer group hover:text-blue-600 "
        >
          <GoHome
            size={20}
            className="text-gray-700 group-hover:text-blue-600"
          />
          <span className="ml-3 text-gray-700 group-hover:text-blue-600">
            Home
          </span>
        </div>
        <div className="flex items-center group w-[90%] rounded-lg mx-auto px-4 py-2 group hover:bg-slate-200 cursor-pointer">
          <LuMessageCircle
            size={20}
            className="text-gray-700 group-hover:text-blue-600"
          />
          <span className="ml-3 text-gray-700 group-hover:text-blue-600">
            Chat
          </span>
        </div>
        <div className="flex items-center w-[90%] rounded-lg mx-auto px-4 py-2 hover:bg-slate-200 group cursor-pointer">
          <GoSearch
            size={20}
            className="text-gray-700 group-hover:text-blue-600"
          />
          <span className="ml-3 text-gray-700 group-hover:text-blue-600">
            Search
          </span>
        </div>
        <div className="flex items-center w-[90%] rounded-lg mx-auto px-4 py-2 group hover:bg-slate-200 cursor-pointer">
          <LuGrid2X2
            size={20}
            className="text-gray-700 group-hover:text-blue-600"
          />
          <span className="ml-3 text-gray-700 group-hover:text-blue-600">
            Apps
          </span>
        </div>
      </div>
    </>
  );
};

export default FullSideBar;
