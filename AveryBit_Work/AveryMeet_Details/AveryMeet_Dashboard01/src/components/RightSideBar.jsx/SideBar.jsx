import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../../Redux/slice/ToogleSideBar";
import { togglePopup } from "../../../Redux/slice/popupSlice";
import { GoBell } from "react-icons/go";
import { CgPushChevronRightR } from "react-icons/cg";
import Image from "../../assets/react.svg";
import FullSideBar from "./FullSideBar";
import IconOnlyView from "./IconOnlyView";
import Notifaction from "../notifaction/Notifaction";

const SideBar = () => {
  const dispatch = useDispatch();
  const isPopupVisible = useSelector((state) => state.popup.isVisible);
  const open = useSelector((state) => state.sidebar.isOpen);
  const [sideBarHover, setSideBarHover] = useState(false);

  // Auto-close notification popup when sidebar state changes
  useEffect(() => {
    if (isPopupVisible) {
      dispatch(togglePopup());
    }
  }, [open]);

  // Handle toggling the sidebar
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="relative h-screen">
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-xl z-10 transition-all duration-300 ease-in-out ${
          open ? "w-72" : "w-16"
        }`}
        onMouseEnter={() => setSideBarHover(true)}
        onMouseLeave={() => setSideBarHover(false)}
      >
        {/* Header Section */}
        <div className="p-4 h-16 flex items-center">
          <div className={`flex items-center justify-between w-full`}>
            <div className="flex items-center gap-2">
              {!open && !sideBarHover && (
                <img
                  src={Image}
                  alt="Logo"
                  className="w-8 h-8 transition-all duration-300"
                />
              )}

              {!open && sideBarHover && (
                <CgPushChevronRightR
                  className={`text-xl cursor-pointer text-gray-600 hover:text-gray-900 transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  } `}
                  onClick={handleToggleSidebar}
                />
              )}
              {open && (
                <div className="flex justify-center items-center gap-2">
                  <img
                    src={Image}
                    alt="Logo"
                    className="w-8 h-8 transition-all duration-300"
                  />
                  <span className="font-semibold text-lg transition-opacity duration-300">
                    Dashboard
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              {open && (
                <div className="flex justify-center items-center gap-4">
                  <CgPushChevronRightR
                    className={`text-xl cursor-pointer text-gray-600 hover:text-gray-900 transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    } ${!open && !sideBarHover ? "opacity-0" : "opacity-100"}`}
                    onClick={handleToggleSidebar}
                  />
                  <GoBell
                    className="text-xl cursor-pointer text-gray-600 hover:text-gray-900"
                    onClick={() => dispatch(togglePopup())}
                  />
                </div>
              )}
            </div>
            {isPopupVisible && <Notifaction />}
          </div>
        </div>
        {/* Main Content/Navigation */}
        <div className="flex-grow overflow-y-auto h-[calc(100%-16rem)]">
          {open ? <FullSideBar /> : <IconOnlyView />}
        </div>
        {/* Footer Section */}
        {open && (
          <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
            <div className="font-medium mb-1">Basic (Free)</div>
            <div className="w-full bg-gray-200 rounded-full h-1 mb-1">
              <div
                className="bg-blue-500 h-1 rounded-full"
                style={{ width: `1%` }}
              ></div>
            </div>
            <div className="text-gray-700 text-sm">
              1 of 300 monthly minutes used.
            </div>
            <div className="text-gray-700 text-sm mb-3">
              Minutes reset in 23 days
            </div>
            <button className="w-full py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
              Get Otter Pro
            </button>
          </div>
        )}
      </div>

      {/* Main Content Wrapper - Adjust content margin based on sidebar width */}
      <div
        className={`transition-all duration-300 ${open ? "ml-72" : "ml-16"}`}
      >
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default SideBar;
