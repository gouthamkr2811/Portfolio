import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Header() {
    return (
        <section className='flex items-center justify-between'>
            <div className='flex items-center'>
                <h1 className='mr-6'>
                    <Image
                        src="/asset/images/portfolio.png"
                        alt="Logo"
                        className="w-40 h-16"
                        width={100}
                        height={100}
                    />
                </h1>
                <ul className='flex items-center oswald' >
                    <li className='mr-6'> <a href="About">About</a></li>
                    <li className='mr-6'> <a href="Work">Work</a></li>
                    <li className='mr-6'> <a href="Notebook">Notebook</a></li>
                    <li className='mr-6'> <a href="Contact">Contact</a></li>
                    <li> <a href="More">More</a></li>
                </ul>
                <div className='ml-[165px]'>
                <ul className='flex items-center gap-5'>
                    <li>
                    <Link href="https://web.whatLinksapp.com" target="_blank" rel="noopener noreferrer">
                        <Image
                                src="/asset/images/instagram.png"
                                alt="Logo"
                                className="w-6 h-6"
                                width={100}
                                height={100}
                            />
                    </Link>

                    </li>
                    <li>
                        <Link href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/asset/images/linkedin.png"
                                alt="Logo"
                                className="w-6 h-6"
                                width={100}
                                height={100}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/asset/images/twitterx.png"
                            alt="Logo"
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
                                alt="Logo"
                                className="w-6 h-6"
                                width={100}
                                height={100}
                            />
                    </Link>
                    
                    </li>
                </ul>
            </div>
            </div>
        </section>

    )
}

export default Header