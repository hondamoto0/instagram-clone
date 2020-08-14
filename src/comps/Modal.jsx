import React from "react";
import { motion } from "framer-motion";
const Modal = ({ selectedImg, setSelectedImg }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={() => setSelectedImg(null)}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        src={selectedImg.url}
        alt="enlarged pic"
      />
    </motion.div>
  );
};

export default Modal;
