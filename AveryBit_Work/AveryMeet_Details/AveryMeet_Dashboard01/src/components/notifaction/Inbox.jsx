import React from "react";
import { GoBell } from "react-icons/go";

const Inbox = () => {
  return (
    <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center mt-[-100px] gap-[25px]">
      <div className="bg-slate-300 p-[2rem] rounded-full">
        <GoBell className="text-3xl" />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="font-bold text-lg">No notifications</h2>
        <p className="w-[340px] text-wrap text-sm text-center">
          Here's where you'll get notified when someone mentions you, assigns an
          action item to you, shares a conversation with you, and more.
        </p>
      </div>
    </div>
  );
};

export default Inbox;
