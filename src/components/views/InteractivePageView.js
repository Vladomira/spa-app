import {
  useState,
  // useEffect, useRef
} from "react";

export default function InteractivePageView() {
  // const [roundNum, setRoundNum] = useState();
  // const intervalBigNum = useRef(null);
  // const [roundValue, setRoundValue] = useState();
  // const [littleValue, setLittleValue] = useState();
  // const [lessNum, setLessNum] = useState();
  const [stepForRound, setStepForRound] = useState(1000);
  // const [stepForLess, setStepForLess] = useState();

  const handleChange = (e) => {
    let { name, value } = e.currentTarget;
    // console.log(e.currentTarget.stepDown(1000), "step");

    switch (name) {
      case "roundNum":
        setStepForRound((prev) => {
          // console.log("prev", prev);
          if (prev !== 20000) {
            prev += 1000;
          }
        });
        break;

      case "lessNum":
        // setLessNum(value);
        break;
      default:
        return;
    }
  };
  // console.log(stepForRound, "stepForRound");
  // useEffect(() => {

  // }, [roundNum]);
  return (
    <>
      <form>
        <label>
          <input
            id="font-size-control"
            name="roundNum"
            type="range"
            // min="1000"
            max="20000"
            step={stepForRound}
            // value={roundValue}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            id="font-size-control"
            name="lessNum"
            // value={littleValue}
            type="range"
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
}
// const { name, value } = e.currentTarget;
