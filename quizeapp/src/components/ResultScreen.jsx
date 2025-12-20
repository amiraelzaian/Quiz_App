import CupIcon from "./CupIcon";
import ResultCard from "./ResultCard";
import { motion } from "framer-motion";
import Footer from "./Footer";

export default function ResultScreen({ setScreen, questionNo, score }) {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen gap-8"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <CupIcon />
      <ResultCard setScreen={setScreen} questionNo={questionNo} score={score} />
      <Footer>
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-purple-600">Amira Alazian</span>.
        All rights reserved.
      </Footer>
    </motion.main>
  );
}
