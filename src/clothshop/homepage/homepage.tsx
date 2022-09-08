import Navigation from "../navigation/navigation";
import { Divider } from "antd";
import "antd/dist/antd.css";

export const HomePage = () => {
  return (
    <div>
      <div className="img">
        <img src="https://static.wixstatic.com/media/d9399c_a5cbad54….01,enc_auto/fullsizeoutput_cd8_edited_edited.png" />
      </div>
      <div className="title">THE CLOTH SHOP</div>
      <div className="navigation">
        {" "}
        <Navigation />
      </div>
      <Divider>EST 1982</Divider>

      <div className="slider">slider</div>
    </div>
  );
};

export default HomePage;
