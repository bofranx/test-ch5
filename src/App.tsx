import React from "react";
import NavButton from "./components/NavButton";
import { motion } from "framer-motion";
import Cameras from "./components/Cameras";
import { usePublishDigital, useSubscribeDigital } from "react-ch5";

function App() {
  const press = usePublishDigital("21");
  const feedback = useSubscribeDigital("21");

  const container = {
    open: {
      opacity: 1,
      scale: 1,
    },
    close: { opacity: 0, scale: 0 },
  };
  return (
    <div className="overflow-hidden">
      <div className="absolute w-full h-screen p-0 m-0">
        <motion.div
          className="w-full h-screen flex justify-center items-center"
          initial="open"
          animate={feedback ? "close" : "open"}
          exit="close"
          variants={container}
        >
          <NavButton
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 172 172"
                className="w-10 h-10 fill-current"
              >
                <path d="M20.64,20.64c-7.56531,0 -13.76,6.19469 -13.76,13.76v61.92c0,7.56531 6.19469,13.76 13.76,13.76h34.4v27.52c0,7.56531 6.19469,13.76 13.76,13.76h82.56c7.56531,0 13.76,-6.19469 13.76,-13.76v-61.92c0,-7.56531 -6.19469,-13.76 -13.76,-13.76h-34.4v-27.52c0,-7.56531 -6.19469,-13.76 -13.76,-13.76zM20.64,27.52h82.56c3.84313,0 6.88,3.03688 6.88,6.88v27.52h-41.28c-7.56531,0 -13.76,6.19469 -13.76,13.76v27.52h-34.4c-3.84312,0 -6.88,-3.03687 -6.88,-6.88v-61.92c0,-3.84312 3.03688,-6.88 6.88,-6.88zM68.8,68.8h82.56c3.84313,0 6.88,3.03688 6.88,6.88v61.92c0,3.84313 -3.03687,6.88 -6.88,6.88h-82.56c-3.84312,0 -6.88,-3.03687 -6.88,-6.88v-30.315c0.09406,-0.45687 0.09406,-0.94062 0,-1.3975v-30.2075c0,-3.84312 3.03688,-6.88 6.88,-6.88z"></path>
              </svg>
            }
            label="Share"
            color="green"
            onClick={() => {}}
          />
          <NavButton
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 172 172"
                className="w-10 h-10 fill-current"
              >
                <path d="M17.2,30.96c-9.46,0 -17.2,7.74 -17.2,17.2v75.68c0,9.46 7.74,17.2 17.2,17.2h92.88c9.46,0 17.2,-7.74 17.2,-17.2v-18.3825l39.6675,21.3925l5.0525,2.795v-87.29l-5.0525,2.795l-39.6675,21.3925v-18.3825c0,-9.46 -7.74,-17.2 -17.2,-17.2zM17.2,37.84h92.88c5.73781,0 10.32,4.58219 10.32,10.32v75.68c0,5.73781 -4.58219,10.32 -10.32,10.32h-92.88c-5.73781,0 -10.32,-4.58219 -10.32,-10.32v-75.68c0,-5.73781 4.58219,-10.32 10.32,-10.32zM165.12,53.8575v64.285l-37.84,-20.425v-23.435z"></path>
              </svg>
            }
            label="Cameras"
            color="blue"
            onClick={() => {
              press(true);
            }}
          />
        </motion.div>
      </div>
      <Cameras
        isVisible={feedback}
        onClick={() => {
          press(false);
        }}
      />
    </div>
  );
}

export default App;
