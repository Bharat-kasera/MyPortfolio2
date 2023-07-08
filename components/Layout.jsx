import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar";
import Explorer from "../components/Explorer";
import Bottombar from "../components/Bottombar";
import Tabsbar from "./Tabsbar";
import styles from "../styles/Layout.module.css";
import Illustration from "../components/Illustration";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />

        <div style={{ width: "100%" }}>
          <Tabsbar />


          <main className={styles.content}>{children}</main>
        </div>
      </div>

      <Bottombar />
    </>
  );
};

export default Layout;
