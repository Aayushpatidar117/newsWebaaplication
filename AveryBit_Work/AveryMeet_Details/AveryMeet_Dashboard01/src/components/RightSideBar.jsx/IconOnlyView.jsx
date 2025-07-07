import { GoBell, GoHome, GoSearch } from "react-icons/go";
import { LuGrid2X2, LuMessageCircle } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import {
  hideProfile,
  togglePopup,
  toggleProfile,
} from "../../../Redux/slice/popupSlice";
import Notifaction from "../notifaction/Notifaction";
import Profile from "../profile/Profile";
import { useEffect, useRef } from "react";

const IconOnlyView = () => {
  const dispatch = useDispatch();
  const isPopupVisible = useSelector((state) => state.popup.isVisible);
  const isProfileVisible = useSelector((state) => state.popup.profileVisible);
  const profileRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        dispatch(hideProfile());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col items-center justify-center m-3 fixed">
        <div ref={profileRef} className="relative  mb-4">
          <div
            className="w-10 h-10 rounded-full
            bg-green-800 flex items-center justify-center 
            text-white font-medium hover:shadow-lg cursor-pointer"
            onClick={() => dispatch(toggleProfile())}
          >
            A
          </div>
        </div>

        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-slate-200 hover:text-blue-600">
          <GoBell
            className="text-xl cursor-pointer hover:bg-slate-200 "
            onClick={() => dispatch(togglePopup())}
          />
        </div>

        <div
          className="w-[40px] h-[40px] flex justify-center items-center 
          rounded-full hover:bg-slate-200 group"
        >
          <GoHome
            size={20}
            className="text-gray-700 group-hover: hover:text-blue-600 cursor-pointer my-4"
          />
        </div>

        <div
          className="w-[40px] h-[40px] flex justify-center items-center 
          rounded-full hover:bg-slate-200 group"
        >
          <LuMessageCircle
            size={20}
            className="text-gray-700 cursor-pointer group-hover:text-blue-600 my-4"
          />
        </div>

        <div
          className="w-[40px] h-[40px] flex justify-center items-center 
          rounded-full hover:bg-slate-200 group"
        >
          <GoSearch
            size={20}
            className="text-gray-700 cursor-pointer my-4 group-hover:text-blue-600"
          />
        </div>

        <div
          className="w-[40px] h-[40px] flex justify-center items-center 
          rounded-full hover:bg-slate-200 group"
        >
          <LuGrid2X2
            size={20}
            className="text-gray-700 cursor-pointer my-4 group-hover:text-blue-600"
          />
        </div>
      </div>
      {isPopupVisible && <Notifaction />}
      {isProfileVisible && <Profile />}
    </>
  );
};

export default IconOnlyView;
