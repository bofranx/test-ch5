import React from "react";
import { motion } from "framer-motion";

type Props = {
  svg?: any;
  label: string;
  color: string;
  onClick: () => void;
};

const NavButton: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center m-6">
      <motion.button
        whileHover={{ scale: 0.9 }}
        className={
          "w-24 h-24 bg-" +
          props.color +
          "-400 hover:bg-" +
          props.color +
          "-500 rounded-full fill-current text-gray-100 hover:text-gray-200 outline-none focus:outline-none flex items-center justify-center"
        }
        onClick={props.onClick}
      >
        {props.svg}
      </motion.button>
      <div className="text-gray-600 text-sm flex items-center mt-1">
        {props.label}
      </div>
    </div>
  );
};

export default NavButton;
