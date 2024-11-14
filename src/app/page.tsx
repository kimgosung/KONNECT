'use client';

import React, { createRef, RefObject, useState } from 'react';
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
            setTimeout(() => setIsScrolling(false), 2100);
        }
    };

    return (
        <div className="h-screen bg-black overflow-hidden relative" onWheel={handleScroll}>
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-3">
                {[0, 1, 2, 3].map((index) => (
                    <motion.div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentPage ? 'bg-gray-200 scale-125' : 'bg-gray-500'}`}
                        animate={{ opacity: index === currentPage ? 1 : 0.5 }}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    className="relative z-10 h-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    {currentPage === 0 && (
                        <div ref={pageRefs[0]}
                             className="relative h-screen bg-black flex flex-col items-center justify-center text-white overflow-hidden">
                            <div className="absolute top-0 right-0 bottom-0 w-full h-full z-0">
                                <video
                                    src={'/videos/background_video.mov'}
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-full object-cover fixed"
                                />
                            </div>
                            <motion.div
                                className="z-10 drop-shadow-lg"
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: 'easeOut' }}
                            >
                                <Image src="/images/Logo.png" alt="logo" width={450} height={380} />
                            </motion.div>
                            <motion.div
                                className="absolute bottom-16 z-10 text-3xl text-gray-300 cursor-pointer"
                                onClick={() => setCurrentPage(1)}
                                whileHover={{ scale: 1.2 }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 2, duration: 1, ease: 'easeOut' }}
                                >
                                    <FaChevronDown />
                                </motion.div>
                            </motion.div>
                        </div>
                    )}

                    {currentPage === 1 && (
                        <div ref={pageRefs[1]}
                             className="h-screen bg-black flex flex-col items-center justify-center text-white">
                            <motion.h1
                                className="font-gMarketSansBold text-5xl mb-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                KONNECT, 건국을 연결하다.
                            </motion.h1>
                        </div>
                    )}

                    {currentPage === 2 && (
                        <div ref={pageRefs[2]}
                             className="h-screen bg-black flex flex-col items-center justify-center text-white">
                            <motion.h1
                                className="font-gMarketSansBold text-5xl mb-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                2024년 12월 4일
                            </motion.h1>
                            <motion.p
                                className="text-lg text-gray-300 text-center px-8 md:px-20 max-w-3xl"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                            >
                                KONNECT가 공식적으로 오픈됩니다. 다양한 이벤트와 소통의 장이 마련된 KONNECT에서 여러분을 기다립니다.
                            </motion.p>
                        </div>
                    )}

                    {currentPage === 3 && (
                        <div ref={pageRefs[3]}
                             className="h-screen bg-black flex flex-col items-center justify-center text-white">
                            <motion.h1
                                className="font-gMarketSansBold text-5xl mb-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                KONNECT가 시작됩니다.
                            </motion.h1>
                            <motion.p
                                className="text-lg text-gray-300 text-center px-8 md:px-20 max-w-3xl"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                            >
                                여러분과 함께할 KONNECT, 2024년 12월 4일부터 새로운 연결을 시작하세요.
                            </motion.p>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
