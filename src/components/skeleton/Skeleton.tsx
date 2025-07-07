import s from "./Skeleton.module.scss";
export function Skeleton() {
  return (
    <div className={s.skeleton}>
      <div className={s.top}>
        <div className={s.left}>
          <div className={s.icon}></div>
          <span className={s.text}></span>
        </div>
        <div className={s.right}>
          <span className={s.numberFly}></span>
          <span className={s.numberFly}></span>
        </div>
      </div>
      <div className={s.middle}>
        <span className={s.country}></span>
        <span className={s.country}></span>
      </div>
      <div className={s.bottom}>
        <span></span>
        <div className={s.progress}></div>
        <span></span>
      </div>
    </div>
  );
}
