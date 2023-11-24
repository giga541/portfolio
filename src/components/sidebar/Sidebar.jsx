import "./sidebar.scss";
import Links from "./Links";
import ToggleButton from "./ToggleButton";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="backgorund">
        <Links />
      </div>
      <ToggleButton />
    </div>
  );
};

export default Sidebar;
