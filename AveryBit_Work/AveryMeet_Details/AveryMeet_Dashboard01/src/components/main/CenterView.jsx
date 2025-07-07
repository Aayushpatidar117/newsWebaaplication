// import { useSelector } from "react-redux";
// import Home from "../main/Home";
// import MyConversation from "../main/MyConversation";
// import AllConversation from "../main/AllConversation";
// import SharedWithMe from "../main/SharedWithMe";
// import Trash from "../main/Trash";

// const CenterView = () => {
//   const selectedNavItem = useSelector((state) => state.popup.selectedNavItem);

//   switch (selectedNavItem) {
//     case "Home":
//       return <Home />;
//     case "My Conversation":
//       return <MyConversation />;
//     case "All Conversation":
//       return <AllConversation />;
//     case "Shared with Me":
//       return <SharedWithMe />;
//     case "Trash":
//       return <Trash />;
//     default:
//       return <Home />;
//   }
// };

// export default CenterView;

// CenterView.jsx
import { useSelector } from "react-redux";
import Home from "../main/Home";
import MyConversation from "../main/MyConversation";
import AllConversation from "../main/AllConversation";
import SharedWithMe from "../main/SharedWithMe";
import Trash from "../main/Trash";

const CenterView = () => {
  const selectedNavItem = useSelector((state) => state.popup.selectedNavItem);

  // This wrapper ensures the child components get proper width
  return (
    <div className="w-[90%] mt-2 h-screen p-[5] overflow-x-auto scrollbar-none mx-auto overflow-y-hidden">
      {(() => {
        switch (selectedNavItem) {
          case "Home":
            return <Home />;
          case "My Conversation":
            return <MyConversation />;
          case "All Conversation":
            return <AllConversation />;
          case "Shared with Me":
            return <SharedWithMe />;
          case "Trash":
            return <Trash />;
          default:
            return <Home />;
        }
      })()}
    </div>
  );
};

export default CenterView;
