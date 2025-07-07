import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setView } from "../../../Redux/slice/viewSlice";
import { hidePopup } from "../../../Redux/slice/popupSlice";
import MainView from "./MainView";

const NotificationPopup = () => {
  const dispatch = useDispatch();
  const currentView = useSelector((state) => state.view.currentView);
  const isSidebarOpen = useSelector((state) => state.sidebar.open);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        dispatch(hidePopup());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div
      ref={popupRef}
      className="absolute w-[400px] h-[500px] border border-slate-400 rounded-lg bg-white shadow-xl z-[9999]"
      style={{
        top: isSidebarOpen ? "0px" : "50px",
        left: isSidebarOpen ? "0px" : "295px",
      }}
    >
      <div className="p-[10px] flex justify-between items-center">
        <p className="font-medium text-xl ml-2">Notifications</p>
        <button
          className="bg-slate-200 text-slate-400 font-bold
           text-sm p-[10px] rounded-lg hover:bg-blue-300 
           hover:text-blue-600  mr-3"
        >
          Mark all as readed
        </button>
      </div>
      <div className="border-[1px] border-slate-400 w-[100%]"></div>

      <div className="flex items-center p-[5px] gap-3">
        <button
          className="w-[80px] font-medium text-md text-black flex flex-col items-center"
          onClick={() => dispatch(setView("Inbox"))}
        >
          Inbox
          <div
            className={`h-[2px] w-full mt-1 ${
              currentView === "Inbox" ? "bg-blue-700" : "bg-transparent"
            }`}
          ></div>
        </button>
        <button
          className="w-[80px] font-medium text-md text-black flex flex-col items-center"
          onClick={() => dispatch(setView("Unread"))}
        >
          Unread
          <div
            className={`h-[2px] w-full mt-1 ${
              currentView === "Unread" ? "bg-blue-700" : "bg-transparent"
            }`}
          ></div>
        </button>
      </div>

      <div className="border-[1px] border-slate-400 w-[100%]"></div>

      <MainView />
    </div>
  );
};

export default NotificationPopup;
