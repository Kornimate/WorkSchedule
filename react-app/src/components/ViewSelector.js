import MonthlyView from "./MonthlyView";
import WeeklyView from "./WeeklyView";
import { useEffect, useState } from "react";
import {
  CreateTimeList,
  CreateTimeMatrix,
  GetCurrentAndNextMonthData,
  GetCurrentMonthData,
} from "../services/TimeService";
import DataContainer from "../models/DataContainer";
import Download from "./Download";
import { wpConfig } from "../config/wpConfig";
import next from "../assets/upcoming.png";
import last from "../assets/previous.png";
import "../styles/ViewSelector.css";

const ViewSelector = () => {
  const [isWeeklyViewShown, setIsWeeklyViewShown] = useState(true);

  const [stateOfWeeks, setStateOfWeeks] = useState(0);
  const [stateOfMonths, setStateOfMonths] = useState(0);
  const [weekTable, setWeekTable] = useState(
    CreateTimeMatrix(
      GetCurrentAndNextMonthData(DataContainer, stateOfWeeks),
      stateOfWeeks,
    ),
  );
  const [monthTable, setMonthTable] = useState(
    CreateTimeList(
      GetCurrentMonthData(DataContainer, stateOfMonths),
      stateOfMonths,
    ),
  );

  function SetWeeklyView(event) {
    setIsWeeklyViewShown(true);
  }

  function SetMonthlyView(event) {
    setIsWeeklyViewShown(false);
  }

  function DecrementStateOfTime() {
    if (isWeeklyViewShown) setStateOfWeeks((prevValue) => prevValue - 1);
    else setStateOfMonths((prevValue) => prevValue - 1);
  }

  function IncrementStateOfTime() {
    if (isWeeklyViewShown) setStateOfWeeks((prevValue) => prevValue + 1);
    else setStateOfMonths((prevValue) => prevValue + 1);
  }

  useEffect(() => {
    setWeekTable(
      CreateTimeMatrix(
        GetCurrentAndNextMonthData(DataContainer, stateOfWeeks),
        stateOfWeeks,
      ),
    );
  }, [stateOfWeeks]);

  useEffect(() => {
    setMonthTable(
      CreateTimeList(
        GetCurrentMonthData(DataContainer, stateOfMonths),
        stateOfMonths,
      ),
    );
  }, [stateOfMonths]);

  return (
    <>
      <div className="buttons-div">
        <button
          className="week-button"
          onClick={DecrementStateOfTime}
          style={{ backgroundColor: wpConfig.primaryColor }}
        >
          <img src={last} alt="last week" />
        </button>
        <div>
          <button
            style={
              isWeeklyViewShown
                ? {
                    backgroundColor: wpConfig.primaryColor,
                    borderColor: wpConfig.primaryColor,
                    color: wpConfig.textColor,
                  }
                : {
                    backgroundColor: wpConfig.secondaryColor,
                    borderColor: wpConfig.secondaryColor,
                    color: wpConfig.textColor,
                  }
            }
            className={
              isWeeklyViewShown ? "active-button" : "non-active-button"
            }
            onClick={SetWeeklyView}
          >
            Week
          </button>
          <button
            style={
              !isWeeklyViewShown
                ? {
                    backgroundColor: wpConfig.primaryColor,
                    borderColor: wpConfig.primaryColor,
                    color: wpConfig.textColor,
                  }
                : {
                    backgroundColor: wpConfig.secondaryColor,
                    borderColor: wpConfig.secondaryColor,
                    color: wpConfig.textColor,
                  }
            }
            className={
              !isWeeklyViewShown ? "active-button" : "non-active-button"
            }
            onClick={SetMonthlyView}
          >
            Month
          </button>
        </div>
        <button
          className="week-button"
          onClick={IncrementStateOfTime}
          style={{ backgroundColor: wpConfig.primaryColor }}
        >
          <img src={next} alt="next week" />
        </button>
      </div>
      <div className="container">
        {isWeeklyViewShown ? (
          <WeeklyView data={weekTable} offsetInWeeks={stateOfWeeks} />
        ) : (
          <MonthlyView data={monthTable} offsetInMonths={stateOfMonths} />
        )}
      </div>
      <Download offsetInMonths={stateOfMonths} />
    </>
  );
};

export default ViewSelector;
