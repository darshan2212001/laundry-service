import React from 'react';
import { motion } from 'motion/react';

interface Props {
    children: React.ReactNode;
}

export default function PageTransition({ children }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}
