import { default as axios } from "axios";
import { useEffect } from "react";

function EffectTutorial() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response: { data: any }) => {
        console.log(response.data);
      });
  });
  console.log("hellow World");
  return <div>EffectTutorial</div>;
}

export default EffectTutorial;
