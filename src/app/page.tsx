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
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    className="relative z-10 h-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    {/* 첫 번째 페이지 */}
                    {currentPage === 0 && (
                        <div ref={pageRefs[0]} className="relative h-screen bg-black flex flex-col items-center justify-center text-white space-y-8 overflow-hidden">
                            {/* 부드러운 확대 및 이동이 포함된 배경 이미지 */}
                            <motion.div
                                className="absolute top-0 right-0 w-full h-full z-0"
                                initial={{ scale: 1 }}
                                animate={{ scale: 1.2, y: 50 }}
                                transition={{ duration: 50, ease: 'easeInOut' }}
                                style={{
                                    backgroundImage: `url('/images/background_image.png')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    filter: 'blur(6px) brightness(0.5)',
                                }}
                            />

                            {/* 로고 애니메이션 */}
                            <motion.div
                                className="z-10 drop-shadow-lg"
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: 'easeOut' }}
                            >
                                <Image src="/images/Logo.png" alt="logo" width={380} height={380} />
                            </motion.div>

                            {/* 동아리 소개 텍스트 애니메이션 */}
                            <motion.div
                                className="z-10 text-center text-2xl font-light tracking-wide"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 1.6, ease: 'easeOut' }}
                            >
                                <p className="text-lg font-semibold p-2 tracking-widest text-gray-100 shadow-lg">
                                    건국대학교 컴퓨터공학부 IT 컨퍼런스 및 네트워킹 동아리
                                </p>
                                <p className="mt-4 text-sm max-w-lg mx-auto text-gray-300 opacity-90 tracking-wide">
                                    최신 기술을 학습하고 네트워킹 기회를 제공하는 저희 동아리와 함께 성장하세요.
                                </p>
                            </motion.div>

                            {/* 스크롤 화살표 애니메이션 */}
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

                    {/* 두 번째 페이지 */}
                    {currentPage === 1 && (
                        <div ref={pageRefs[1]} className="h-screen bg-black flex items-center justify-center text-white text-4xl font-bold">
                            Discover More Features
                        </div>
                    )}

                    {/* 세 번째 페이지 */}
                    {currentPage === 2 && (
                        <div ref={pageRefs[2]} className="h-screen bg-black flex items-center justify-center text-white text-4xl font-bold">
                            Join Our Community
                        </div>
                    )}

                    {/* 네 번째 페이지 */}
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
