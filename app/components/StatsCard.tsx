'use client';

import { motion } from 'framer-motion';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

export default function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2 }}
      className="glass-effect rounded-2xl p-6 sm:p-8 smooth-transition shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-white/70">{title}</p>
          <motion.p 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            {value}
          </motion.p>
        </div>
        <motion.div 
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.2 }}
          className="rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 p-3 sm:p-4"
        >
          {icon}
        </motion.div>
      </div>
    </motion.div>
  );
}