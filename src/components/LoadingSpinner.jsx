import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-4">
      <motion.div
        className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}