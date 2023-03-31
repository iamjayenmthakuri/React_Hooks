import { default as axios } from "axios";
import { useEffect, useState } from "react";

function EffectTutorial() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response: { data: any }) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);
  return <div>{data}</div>;
}

export default EffectTutorial;
