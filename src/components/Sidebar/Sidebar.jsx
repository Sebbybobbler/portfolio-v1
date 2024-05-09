import styles from "./Sidebar.module.css";
import SiteNav from "../SiteNav/SiteNav";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.initials}>
        <h1>SD</h1>
      </div>
      <SiteNav />
    </div>
  );
}
