import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className='relative'>
            {/* Desktop Header */}
            <div className='hidden md:flex items-center justify-between'>
                <div className='flex items-center'>
                    <h1 className='mr-6'>
                        <Image
                            src="/asset/images/portfolio.png"
                            alt="Logo"
                            className="w-32 md:w-40 h-12 md:h-16"
                            width={100}
                            height={100}
                        />
                    </h1>
                    <ul className='flex items-center oswald'>
                        <li className='mr-6'><Link href="/About">About</Link></li>
                        <li className='mr-6'><Link href="/Work">Work</Link></li>
                        <li className='mr-6'><Link href="/Notebook">Notebook</Link></li>
                        <li className='mr-6'><Link href="/Contact">Contact</Link></li>
                        <li><Link href="/More">More</Link></li>
                    </ul>
                    <div className='ml-[165px]'>
                        <ul className='flex items-center gap-5'>
                            <li>
                                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/asset/images/instagram.png"
                                        alt="Instagram"
                                        className="w-6 h-6"
                                        width={100}
                                        height={100}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/asset/images/linkedin.png"
                                        alt="LinkedIn"
                                        className="w-6 h-6"
                                        width={100}
                                        height={100}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/asset/images/twitterx.png"
                                        alt="Twitter"
                                        className="w-6 h-6"
                                        width={100}
                                        height={100}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/asset/images/whatsapp.png"
                                        alt="WhatsApp"
                                        className="w-6 h-6"
                                        width={100}
                                        height={100}
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Header */}
            <div className='md:hidden'>
                <div className='flex items-center justify-between p-4'>
                    <Image
                        src="/asset/images/portfolio.png"
                        alt="Logo"
                        className="w-32 h-12"
                        width={100}
                        height={100}
                    />
                    <button
                        onClick={toggleMenu}
                        className='text-gray-500 hover:text-gray-700 focus:outline-none'
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='fixed inset-0 z-50 bg-black bg-opacity-50'>
                        <div className='fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg'>
                            <div className='flex justify-end p-4'>
                                <button
                                    onClick={toggleMenu}
                                    className='text-gray-500 hover:text-gray-700 focus:outline-none'
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <nav className='px-4'>
                                <ul className='space-y-4 oswald'>
                                    <li><Link href="/About" onClick={toggleMenu}>About</Link></li>
                                    <li><Link href="/Work" onClick={toggleMenu}>Work</Link></li>
                                    <li><Link href="/Notebook" onClick={toggleMenu}>Notebook</Link></li>
                                    <li><Link href="/Contact" onClick={toggleMenu}>Contact</Link></li>
                                    <li><Link href="/More" onClick={toggleMenu}>More</Link></li>
                                </ul>
                                <div className='mt-8'>
                                    <ul className='flex items-center gap-4 justify-center'>
                                        <li>
                                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                                <Image
                                                    src="/asset/images/instagram.png"
                                                    alt="Instagram"
                                                    className="w-6 h-6"
                                                    width={100}
                                                    height={100}
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                                <Image
                                                    src="/asset/images/linkedin.png"
                                                    alt="LinkedIn"
                                                    className="w-6 h-6"
                                                    width={100}
                                                    height={100}
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                                <Image
                                                    src="/asset/images/twitterx.png"
                                                    alt="Twitter"
                                                    className="w-6 h-6"
                                                    width={100}
                                                    height={100}
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
                                                <Image
                                                    src="/asset/images/whatsapp.png"
                                                    alt="WhatsApp"
                                                    className="w-6 h-6"
                                                    width={100}
                                                    height={100}
                                                />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Header