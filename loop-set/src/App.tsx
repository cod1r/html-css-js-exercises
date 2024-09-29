import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div
      style={{
        height: "max-content",
        width: "max-content",
        position: "relative",
      }}
    >
      <div style={{ fontSize: 25 }}>Loop Set</div>
      <div
        style={{
          left: 0,
          top: 0,
          position: "absolute",
          border: "1px solid white",
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          rotate: "15deg",
          scale: "2",
        }}
      >
        <motion.div
          animate={{
            offsetDistance: ["0%", "100%"],
            transition: { repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 0 },
          }}
          style={{
            clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
            offsetPath: "border-box",
            width: 10,
            height: 10,
            backgroundColor: "green",
          }}
        ></motion.div>
      </div>
    </div>
  );
}

export default App;
