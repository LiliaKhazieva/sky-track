import s from "./Preloader.module.scss";

export function Pleloader() {
  return (
    <div className={s.preloader}>
      <div className={s.spinner}></div>
    </div>
  );
}
