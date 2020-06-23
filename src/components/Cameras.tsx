import React from "react";
import { motion } from "framer-motion";

type Props = {
  isVisible: boolean;
  onClick: () => void;
};

const variants = {
  open: { opacity: 1 },
  close: { opacity: 0 },
};

const Cameras: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      {props.isVisible && (
        <motion.div
          className="absolute bg-white w-full h-screen"
          initial="close"
          animate={props.isVisible ? "open" : "close"}
          variants={variants}
          transition={{
            ease: "easeInOut",
          }}
        >
          <div className="container mx-auto flex items-center justify-center w-full h-full">
            <button onClick={props.onClick}>Camera Page</button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Cameras;
