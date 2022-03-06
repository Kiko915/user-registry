import { Tabs } from "antd";
import styles from "../styles/Home.module.css";
import ViewerPDF from "./ViewerPDF";
import DownloadPDF from "./DownloadPDF";
import Description from "./Description";
import { useState } from "react";
const { TabPane } = Tabs;

export default function RegisterTabs() {
  const [values, setValues] = useState({ title: "", description: "" });

  return (
    <div className={styles.tabz}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Describing" key="1">
          <Description setVals={setValues} {...values} />
        </TabPane>
        <TabPane tab="Download PDF" key="3">
          <DownloadPDF values={values} />
        </TabPane>
      </Tabs>
    </div>
  );
}
