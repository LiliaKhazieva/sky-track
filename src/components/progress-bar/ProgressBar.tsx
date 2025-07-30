import s from "./ProgressBar.module.scss";

interface Props {
  progress: number;
}

export function ProgressBar({ progress }: Props) {
  return (
    <div className={s.progress}>
      <div className={s.progressBar}></div>
      <div className={s.scale} style={{ width: `${progress}%` }}>
        <img src="airplane.png" alt="airplane-icon" />
      </div>
    </div>
  );
}
