import React from "react";
import meetings from "../../../meetingData";
import { MdOutlineArrowUpward } from "react-icons/md";
import { useSelector } from "react-redux";
import "../../../../AveryMeet_Dashboard/src/index.css";

const Home = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <>
      <div
        className={`w-[90%] flex-1 min-h-screen scrollbar-thin scrollbar-none flex justify-center items-center p-5 ${
          isSidebarOpen ? "ml-12" : "ml-5"
        } transition-all duration-300  bg-slate-100 rounded-xl shadow-lg overflow-x-hidden`}
      >
        {/* Main content area */}
        <div className="w-full h-screen  ">
          <div className=" pb-32 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
              Your Meetings
            </h1>

            <div className="flex flex-col gap-6 max-w-4xl">
              {meetings.map((meeting) => (
                <div key={meeting.id} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg text-gray-500 font-medium">
                      {meeting.day}
                      <span className="text-gray-500 font-medium">,</span>
                    </h2>
                    <h2 className="text-lg text-gray-500 font-medium">
                      {meeting.date}
                    </h2>
                  </div>

                  <div
                    className="w-full border border-gray-200 bg-white rounded-lg
                  flex flex-col p-4 gap-2 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => {}}
                  >
                    <p className="text-lg font-medium text-gray-800">
                      {meeting.title}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-gray-500">
                        {meeting.time}
                      </p>
                      <div className="flex flex-wrap items-center">
                        {meeting.attendees.map((attend, id) => (
                          <span
                            key={id}
                            className="text-sm font-medium text-gray-600"
                          >
                            {id > 0 ? ", " : ""}
                            {attend}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 mt-1">
                      {meeting.summary}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fixed bottom input bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4 px-4">
          <div
            className={`transition-all duration-300 ${
              isSidebarOpen ? "pl-72" : "pl-16"
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Ask anything about your conversation"
                  className="w-full h-12 px-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 flex justify-center items-center p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                  <MdOutlineArrowUpward className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
