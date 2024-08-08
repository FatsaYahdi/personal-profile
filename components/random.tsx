"use client"
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const greetings = [
    'Hello',
    'Hola',
    'Bonjour',
    'Ciao',
    'こんにちは',
    '你好',
    '안녕하세요',
    'مرحبا',
    'Привет',
];

const RandomGreeting = () => {
    const [greeting, setGreeting] = useState('Hello');

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * (greetings.length - 1)) + 1;
            setGreeting(greetings[randomIndex]);
        }, 2000); // Change greeting every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={greeting}
        >
            {greeting} 👋
        </motion.h2>
    );
};

export default RandomGreeting;
