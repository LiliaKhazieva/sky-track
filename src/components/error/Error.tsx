import { CircleAlert } from "lucide-react";
import styles from "./Error.module.scss";

export function Error({ err }: { err: any }) {
  console.log(err);
  return (
    <div className={styles.error}>
      <div>
        <CircleAlert
          color="#ff3d02b4"
          size={18}
          style={{ marginBottom: "3px" }}
        />
        <span> Error:</span>
      </div>
      <div>
        <span>Map is not loaded. Please try again later.</span>
      </div>
    </div>
  );
}
