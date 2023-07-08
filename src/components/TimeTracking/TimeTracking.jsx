import "./TimeTracking.css";
import TimeTrackingItem from "./TimeTrackingItem";
import Card from "../UI/Card";
import { useState } from "react";
import TimeTrackingBg from "./TimeTrackingBg";

function TimeTracking(props) {
  const time = props.onTimeData;

  return props.items.map((item) => (
    <div key={item.id}>
      <Card className="card--time-tracking">
        {time === "Daily" && (
          <TimeTrackingItem
            title={item.title}
            mainPresent={item.daily[0]}
            mainPrevious={item.daily[1]}
          />
        )}

        {time === "Weekly" && (
          <TimeTrackingItem
            title={item.title}
            mainPresent={item.weekly[0]}
            mainPrevious={item.weekly[1]}
          />
        )}

        {time === "Monthly" && (
          <TimeTrackingItem
            title={item.title}
            mainPresent={item.monthly[0]}
            mainPrevious={item.monthly[1]}
          />
        )}
      </Card>
      <TimeTrackingBg />
    </div>
  ));
}

export default TimeTracking;
