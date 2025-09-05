import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("set up");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("canceled");
    };
  }, []);

  return (
    <p className="lead">
      The current Time is : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}{" "}
    </p>
  );
};

export default CurrentTime;
