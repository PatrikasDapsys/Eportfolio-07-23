import { motion } from "framer-motion";
import React from "react";

function LoadingPage() {
  return (
    <section className="w-screen h-screen bg-dark-900 text-white flex justify-center items-center relative z-10">
      <div className="flex flex-col text-2xl xs:text-4xl xs:flex-row">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="pb-3 mb-3 xs:pr-6 xs:mr-6 font-[530] whitespace-nowrap border-b-[1px] xs:border-b-0 xs:border-r-[1px]"
        >
          Patrikas Dapšys
        </motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          Portfolio
        </motion.div>
      </div>
    </section>
  );
}

export default LoadingPage;
