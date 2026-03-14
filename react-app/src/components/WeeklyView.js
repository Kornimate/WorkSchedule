import { useEffect, useState } from "react";
import { GetWeekText } from "../services/TimeService";
import DetailsDialog from "./DetailsDialog";
import { wpConfig } from "../config/wpConfig";
import "../styles/WeeklyView.css";

const WeeklyView = ({ data, offsetInWeeks }) => {
  const date = new Date();
  const weekDayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const [timeText, setTimeText] = useState(GetWeekText(offsetInWeeks));
  const [open, setOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);

  useEffect(() => {
    setTimeText(GetWeekText(offsetInWeeks));
  }, [offsetInWeeks]);

  function hourClicked(stateInfo) {
    if (stateInfo === null) return;

    setSelectedHour(stateInfo);
    setOpen(true);
  }

  return (
    <>
      <div>
        <h2>{timeText}</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th
                className={
                  date.getDay() === 1 && offsetInWeeks === 0
                    ? "text-bordered"
                    : ""
                }
                style={
                  date.getDay() === 1 && offsetInWeeks === 0
                    ? { borderColor: wpConfig.borderColor }
                    : {}
                }
              >
                {weekDayNames[0]}
              </th>
              <th
                className={
                  date.getDay() === 2 && offsetInWeeks === 0
                    ? "text-bordered"
                    : ""
                }
                style={
                  date.getDay() === 2 && offsetInWeeks === 0
                    ? { borderColor: wpConfig.borderColor }
                    : {}
                }
              >
                {weekDayNames[1]}
              </th>
              <th
                className={
                  date.getDay() === 3 && offsetInWeeks === 0
                    ? "text-bordered"
                    : ""
                }
                style={
                  date.getDay() === 3 && offsetInWeeks === 0
                    ? { borderColor: wpConfig.borderColor }
                    : {}
                }
              >
                {weekDayNames[2]}
              </th>
              <th
                className={
                  date.getDay() === 4 && offsetInWeeks === 0
                    ? "text-bordered"
                    : ""
                }
                style={
                  date.getDay() === 4 && offsetInWeeks === 0
                    ? { borderColor: wpConfig.borderColor }
                    : {}
                }
              >
                {weekDayNames[3]}
              </th>
              <th
                className={
                  date.getDay() === 5 && offsetInWeeks === 0
                    ? "text-bordered"
                    : ""
                }
                style={
                  date.getDay() === 5 && offsetInWeeks === 0
                    ? { borderColor: wpConfig.borderColor }
                    : {}
                }
              >
                {weekDayNames[4]}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((day, index) => (
              <tr key={`tr_${index}`}>
                <td
                  style={{
                    backgroundColor: wpConfig.secondaryColor,
                    color: wpConfig.textColor,
                  }}
                >
                  {index + 8}-{index + 9}
                </td>
                {day?.map((hour, index2) => (
                  <td
                    title={`${weekDayNames[index2]} ${index + 8}-${index + 9} ${hour ? hour.shortDescription : "Not Working"}`}
                    key={`td_${index}_${index2}`}
                    style={{
                      backgroundColor: hour
                        ? hour.color
                        : wpConfig.secondaryColor,
                      color: wpConfig.textColor,
                      borderColor:
                        date.getHours() === index + 8 &&
                        date.getDay() === index2 + 1 &&
                        offsetInWeeks === 0
                          ? wpConfig.borderColor
                          : "",
                    }}
                    className={`${date.getHours() === index + 8 && date.getDay() === index2 + 1 && offsetInWeeks === 0 ? "border-outlined" : ""}`}
                    onClick={() => hourClicked(hour)}
                  >
                    {hour?.textRepresentation}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DetailsDialog open={open} setOpen={setOpen} stateInfo={selectedHour} />
    </>
  );
};

export default WeeklyView;
