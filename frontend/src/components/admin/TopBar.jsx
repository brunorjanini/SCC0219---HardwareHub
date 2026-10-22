import ProfileIcon from "./ProfileIcon";
import "./TopBar.css";

export default function TopBar({ title }) {
  return (
    <>
      <div className="topbar">
        <div className="textbox">
          <h2>{title}</h2>
          <p>Painel administrativo HardwareHub</p>
        </div>

        <ProfileIcon />
      </div>
    </>
  );
}
