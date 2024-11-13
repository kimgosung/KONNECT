'use client';

import { createRef, RefObject, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function Home() {
    const [currentPage, setCurrentPage] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const pageRefs: RefObject<HTMLDivElement>[] = Array.from({ length: 4 }, () => createRef<HTMLDivElement>());

    const handleScroll = (event: React.WheelEvent) => {
        if (isScrolling) return;

        const direction = event.deltaY > 0 ? 'down' : 'up';
        const nextPage = direction === 'down' ? Math.min(currentPage + 1, 3) : Math.max(currentPage - 1, 0);

        if (nextPage !== currentPage) {
            setCurrentPage(nextPage);
            setIsScrolling(true);
            setTimeout(() => setIsScrolling(false), 2000);
        }
    };

    return (
        <div className="h-screen bg-black overflow-hidden relative" onWheel={handleScroll}>
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={currentPage}
                    className="relative z-10 h-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    {currentPage === 0 && (
                        <div ref={pageRefs[0]} className="relative h-screen bg-black flex flex-col items-center justify-center text-white space-y-6 overflow-hidden">
                            <motion.div
                                className="absolute top-0 right-0 w-full h-full z-0"
                                initial={{ scale: 1 }}
                                animate={{ scale: 1.2 }}
                                transition={{ duration: 40, ease: 'easeInOut' }}
                                style={{
                                    backgroundImage: `url('/images/background_image.png')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    filter: 'blur(3px) brightness(0.7)',
                                }}
                            />
                            <motion.div
                                className="z-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            >
                                <Image src="/images/Logo.png" alt="logo" width={490} height={400} />
                            </motion.div>
                            <motion.div
                                className="z-10 text-center text-2xl font-light"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
                            >
                                <p className="text-2xl font-medium p-2">건국대학교 컴퓨터공학부 IT 컨퍼런스 및 네트워킹 동아리</p>
                                <p className="mt-4 text-lg max-w-md mx-auto">
                                    동아리 활동을 통해 최신 IT 트렌드와 기술을 배우고, 네트워킹 기회를 통해 동문 및 업계 전문가들과의 교류를 이어가세요.
                                </p>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-16 z-10 text-3xl text-gray-300 animate-bounce"
                                onClick={() => setCurrentPage(1)}
                                whileHover={{ scale: 1.1 }}
                            >
                                <FaChevronDown />
                            </motion.div>
                        </div>
                    )}
                    {currentPage === 1 && (
                        <div ref={pageRefs[1]} className="h-screen bg-black flex items-center justify-center text-white text-4xl font-bold">
                            Discover More Features
                        </div>
                    )}
                    {currentPage === 2 && (
                        <div ref={pageRefs[2]} className="h-screen bg-black flex items-center justify-center text-white text-4xl font-bold">
                            Join Our Community
                        </div>
                    )}
                    {currentPage === 3 && (
                        <div ref={pageRefs[3]} className="h-screen bg-black flex items-center justify-center text-white text-4xl font-bold">
                            Start Your Journey
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
