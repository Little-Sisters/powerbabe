import { motion } from 'framer-motion';

// Page content wrapper, with animation .
export const Page = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) => {
  return (
    <motion.div
      className="motion-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, width: '100%', height: '100%', y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <>{children}</>
    </motion.div>
  );
};
