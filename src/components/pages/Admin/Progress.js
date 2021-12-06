import React from "react";
import useStorage from "../../../Hooks/useStorage";
const Progress = ({ file, setfile }) => {
    const {url, Progress} = useStorage(file);
    console.log(Progress, url);

  return (
  <div className="profress-bar">Progress
     
  </div>
  )
};

export default Progress;
