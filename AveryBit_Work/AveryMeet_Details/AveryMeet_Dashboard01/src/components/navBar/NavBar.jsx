import { RiFilter3Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavPopups } from "../../../Redux/slice/popupSlice";
import NavPopup from "./NavPopup";
import { IoVideocamOutline } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

const NavBar = () => {
  const dispatch = useDispatch();
  const selectedNavItem = useSelector((state) => state.popup.selectedNavItem);
  const popupVisible = useSelector((state) => state.popup.navPopupVisible);

  return (
    <div className=" mt-3 flex justify-between items-center  fix pl-[35px] pr-[35px]">
      <div
        className="flex justify-center items-center gap-2 
         font-medium bg-slate-100 p-2 rounded-xl hover:bg-slate-200
         cursor-pointer"
        onClick={() => dispatch(toggleNavPopups())}
      >
        <RiFilter3Line />
        <p>{selectedNavItem}</p>
      </div>

      <div className="flex justify-center items-center gap-3">
        <div
          className="bg-slate-100 p-[.8rem] rounded-lg flex justify-center items-center
          hover:bg-slate-200 cursor-pointer"
        >
          <IoVideocamOutline />
        </div>

        <div
          className="bg-slate-100 p-[.6rem] rounded-lg flex justify-center items-center
          hover:bg-slate-200 cursor-pointer gap-2 "
        >
          <IoCloudUploadOutline className="text-xl" /> <p>Import</p>
        </div>

        <div
          className="bg-blue-600 text-white flex justify-center items-center
          p-[.6rem] rounded-lg gap-2 font-medium hover:bg-blue-900 cursor-pointer"
        >
          <IoMicOutline className=" text-xl" />
          <p>Record</p>
        </div>

        <div
          className=" bg-slate-100 hover:bg-slate-200 p-[.8rem]
          rounded-lg cursor-pointer"
        >
          <CiCalendar />
        </div>
      </div>
      {popupVisible && <NavPopup />}
    </div>
  );
};

export default NavBar;
