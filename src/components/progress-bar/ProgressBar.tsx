import { useEffect, useState } from "react";
import s from "./ProgressBar.module.scss";

interface Props {
  departureTime: string;
  arrivalTime: string; // Value 0 to 100%
}

export function ProgressBar({ departureTime, arrivalTime }: Props) {
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const departure = new Date(departureTime);
      const arrival = new Date(arrivalTime);

      if (now < departure) {
        // Еще не вылетел
        setProgress(0);
        setLabel("Еще не вылетел");
      } else if (now >= departure && now <= arrival) {
        // В полете
        const totalTime = arrival.getTime() - departure.getTime();
        const elapsedTime = now.getTime() - departure.getTime();
        const progressPercentage = (elapsedTime / totalTime) * 100;
        setProgress(progressPercentage);
        setLabel("");
      } else {
        // Прибыли
        setProgress(100);
        clearInterval(interval);
        setLabel("Прибыл");
      }
    }, 100);

    return () => clearInterval(interval);
  }, [departureTime, arrivalTime]);

  return (
    <div className={s.progress}>
      <div className={s.progressBar}></div>
      {<div className={s.label}>{label}</div>}
      <div className={s.scale} style={{ width: `${progress}%` }}>
        <img src="airplane.png" alt="airplane-icon" />
      </div>
    </div>
  );
}
