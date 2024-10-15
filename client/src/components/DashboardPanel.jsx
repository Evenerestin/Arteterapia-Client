import moment from "moment";
import "moment/locale/pl";
import Clock from "react-live-clock";
import "../css/DashboardPanel.css";
import GraphDisplay from "./GraphDisplay";

const DashboardPanel = () => {
  moment.locale("pl");
  return (
    <div id="panel" className="outlet flexColumn">
      <header className="flex">
        <div className="heading">
          {/* <h1>Panel</h1> */}
          {/* <h2>Panel Główny</h2> */}
          <h1>Panel Główny</h1>
          <span className="flex">
            <p>Ostatnia aktualizacja:</p>
          </span>
        </div>
        <h2>
          <Clock
            format={"dddd, HH:mm"}
            ticking={true}
            timezone={"Etc/GMT-2"}
            className="clock"
          />
        </h2>
      </header>
      <div className="statistics flex">
        <div className="flexColumn">
          <div className="graphView">
            <GraphDisplay />
          </div>
          <div className="mainStatistics"></div>
        </div>
        <div className="expandedStatistics"></div>
      </div>
    </div>
  );
};

export default DashboardPanel;
