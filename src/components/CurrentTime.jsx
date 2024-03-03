import React from "react";
import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
   // console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      //console.log("Cancelled the interval");
    };
  }, []);

  return (
    <p>
      This is the Current Time: {time.toLocaleDateString()} - {" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
