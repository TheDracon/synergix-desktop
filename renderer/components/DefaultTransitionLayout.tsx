import { motion } from "framer-motion";

const DefaultTransitionLayout = ({ children }) => (
    <motion.div
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 600, opacity: 0 }}
      transition={{
        duration: .3,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
  export default DefaultTransitionLayout;