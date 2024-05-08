import styles from "./Root.module.css";

import SiteHeader from "../SiteHeader/SiteHeader";
import SiteNav from "../SiteNav/SiteNav";
import SiteFooter from "../SiteFooter/SiteFooter";
import MainContent from "../MainContent/MainContent";
import Sidebar from "../Sidebar/Sidebar";

function Root() {
  return (
    <>
    <div className={styles.pagewrapper} > 
    <div className={styles.sidebar}>
      <Sidebar />
    </div>
    <div className={styles.wrapper}>
      <SiteHeader />
      <SiteNav />
      <MainContent />
      <SiteFooter />
    </div>
    </div>
    </>
  );
}

export default Root;
