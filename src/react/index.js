import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/style.css";

const Index = () => {
  return <div className={styles.redcolor}>Welcome Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
