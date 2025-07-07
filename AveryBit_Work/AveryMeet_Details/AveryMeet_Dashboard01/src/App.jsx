import CenterView from "./components/main/CenterView";
import NavBar from "./components/navBar/NavBar";
import SideBar from "./components/RightSideBar.jsx/SideBar";
import { IoIosCheckboxOutline } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="w-full flex fixed h-screen ">
      <SideBar />

      <div className="flex flex-col flex-1  min-w-0">
        <div className="w-[100%] h-[60px] border-b bg-white px-4 shadow-sm sticky top-0 z-20">
          <NavBar />
        </div>

        <div className="overflow-x-hidden flex">
          <CenterView />
          <div
            className="h-[100px] flex justify-center items-center flex-col
             gap-2 bg-slate-200 rounded-3xl text-xl p-4 absolute right-4
             top-[40%] "
          >
            <CiCalendar
              className=" hover:scale-110 cursor-pointer
              rounded-full "
            />
            <CiBoxList
              className="hover:scale-110 cursor-pointer
              rounded-full"
            />
            <IoIosCheckboxOutline
              className="hover:scale-110 cursor-pointer
              rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// home.jsx
// import React from "react";
// import meetings from "../../../meetingData";
// import { MdOutlineArrowUpward } from "react-icons/md";
// import { useSelector } from "react-redux";
// import "../../../../AveryMeet_Dashboard/src/index.css";

// const Home = () => {
//   // Get sidebar state to adjust layout accordingly
//   const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

//   return (
//     <div
//       className={`w-[100%] flex-1 min-h-screen bg-gray-50 relative scrollbar-none ${
//         isSidebarOpen ? "ml-72" : "ml-16"
//       } transition-all duration-300 overflow-x-hidden`}
//       style={{
//         scrollbarWidth: "thin",
//         scrollbarColor: "#CBD5E0 #F7FAFC",
//       }}
//     >
//       {/* Main content area with scrollbar on right edge */}
//       <div
//         className="w-full h-screen scrollbar-none overflow-y-auto pr-1"
//         style={{
//           scrollbarWidth: "thin",
//           scrollbarColor: "#CBD5E0 #F7FAFC",
//         }}
//       >
//         <div className="px-4 sm:px-6 py-6 pb-32">
//           <h1 className="text-2xl font-bold mb-6 text-gray-800">
//             Your Meetings
//           </h1>

//           <div className="flex flex-col gap-6 max-w-4xl">
//             {meetings.map((meeting) => (
//               <div key={meeting.id} className="flex flex-col gap-2">
//                 <div className="flex items-center gap-2">
//                   <h2 className="text-lg text-gray-500 font-medium">
//                     {meeting.day}
//                     <span className="text-gray-500 font-medium">,</span>
//                   </h2>
//                   <h2 className="text-lg text-gray-500 font-medium">
//                     {meeting.date}
//                   </h2>
//                 </div>

//                 <div
//                   className="w-full border border-gray-200 bg-white rounded-lg
//                   flex flex-col p-4 gap-2 cursor-pointer hover:shadow-md transition-shadow"
//                   onClick={() => {}}
//                 >
//                   <p className="text-lg font-medium text-gray-800">
//                     {meeting.title}
//                   </p>

//                   <div className="flex flex-wrap items-center gap-2">
//                     <p className="text-sm font-medium text-gray-500">
//                       {meeting.time}
//                     </p>
//                     <div className="flex flex-wrap items-center">
//                       {meeting.attendees.map((attend, id) => (
//                         <span
//                           key={id}
//                           className="text-sm font-medium text-gray-600"
//                         >
//                           {id > 0 ? ", " : ""}
//                           {attend}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="text-sm text-gray-600 mt-1">
//                     {meeting.summary}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Fixed bottom input bar with responsive width */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4 px-4 z-10">
//         <div
//           className={`transition-all duration-300 ${
//             isSidebarOpen ? "pl-72" : "pl-16"
//           }`}
//         >
//           <div className="max-w-4xl mx-auto">
//             <div className="relative flex items-center">
//               <input
//                 type="text"
//                 placeholder="Ask anything about your conversation"
//                 className="w-full h-12 px-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//               <button className="absolute right-2 flex justify-center items-center p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
//                 <MdOutlineArrowUpward className="text-xl" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
