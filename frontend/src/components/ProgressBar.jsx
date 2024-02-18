/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ percentage }) => {
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        textColor: "#ebebeb",
        pathColor: "#6b72e9",
        trailColor: "#AFAEB7",
        pathTransition: "stroke-dashoffset 0.5s ease 0s",
        trailTransition: "stroke-dashoffset 0.5s ease 0s",
      })}
    />
  );
};

export default ProgressBar;
