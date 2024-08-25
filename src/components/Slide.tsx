// Slide.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface SlideProps {
  title: string;
  content: string;
}

const Slide: React.FC<SlideProps> = ({ title, content }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1>{title}</h1>
    <p>{content}</p>
  </motion.div>
);

export default Slide;
