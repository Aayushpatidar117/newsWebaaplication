import { useSelector } from "react-redux";
import Inbox from "../../components/notifaction/Inbox";
import Unread from "../../components/notifaction/Unread";

const MainView = () => {
  const currentView = useSelector((state) => state.view.currentView);

  switch (currentView) {
    case "Inbox":
      return <Inbox />;
    case "Unread":
      return <Unread />;
    default:
      return <Inbox />;
  }
};

export default MainView;
