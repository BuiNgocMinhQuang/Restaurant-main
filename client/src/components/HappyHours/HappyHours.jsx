import BgHours from "../../assets/happyhouse-bg.jpeg";
import "./HappyHours.scss";
const HappyHours = () => {
  return (
    <div>
      <div>
        <div className="happy-hours ">
          <div className="overplay-bg"></div>
          <img src={BgHours} alt="" className="bg-header" />
          <div className="happy-title">
            <h2>Happy Hours</h2>
            <p className="happy-time">Monday - Friday (4:00 Pm - 7:00 pm)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyHours;
