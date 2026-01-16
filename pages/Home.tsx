import React from 'react';
import { SiteSettings } from '../types';
import { motion } from 'framer-motion';

interface HomeProps {
  settings: SiteSettings;
}

const Home: React.FC<HomeProps> = ({ settings }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
    >
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 hand-drawn">wow!</h1>
      <p className="text-xl text-zinc-400 mb-8">how did we get here?</p>
      <p className="text-sm font-black uppercase tracking-widest text-zinc-500">
      </p>
    </motion.div>
  );
};

export default Home;
