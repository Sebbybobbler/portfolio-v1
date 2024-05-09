import styles from "./Sidebar.module.css";
import SiteNav from "../SiteNav/SiteNav";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <h1>SD</h1>
        <SiteNav />
      </div>
    </div>
  );
}
