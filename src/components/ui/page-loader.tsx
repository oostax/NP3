'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PageLoader() {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#111214]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img src="/Logo.png" alt="Dr. Kery Lady" className="h-12 w-auto select-none" draggable={false} />
            <div className="relative h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute left-0 top-0 h-full w-1/3 rounded-full bg-gradient-to-r from-[#c273f8] to-[#c171f8]"
                initial={{ x: '-100%' }}
                animate={{ x: ['-100%', '150%'] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
