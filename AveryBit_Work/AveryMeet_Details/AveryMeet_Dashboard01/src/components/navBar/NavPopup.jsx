import { IoIosCheckmark } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setNavItem } from "../../../Redux/slice/popupSlice";

const options = [
  "Home",
  "My Conversation",
  "All Conversation",
  "Shared with Me",
  "Trash",
];

const NavPopup = () => {
  const dispatch = useDispatch();
  const selectedNavItem = useSelector((state) => state.popup.selectedNavItem);

  return (
    <div className="w-[240px] bg-white border-[1px] p-2 rounded-lg shadow-lg absolute left-[70px] top-[50px] z-50">
      {options.map((item) => (
        <div
          key={item}
          className="flex justify-between items-center gap-[20px] hover:bg-slate-200 cursor-pointer p-[3px] rounded-md font-medium"
          onClick={() => dispatch(setNavItem(item))}
        >
          {item}
          {selectedNavItem === item && <IoIosCheckmark />}
        </div>
      ))}
    </div>
  );
};

export default NavPopup;
