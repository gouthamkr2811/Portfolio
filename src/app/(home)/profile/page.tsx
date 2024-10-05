'use client';

import React, { useEffect, useState } from 'react';
import Header from "../_components/Header";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { LottieComponentProps } from 'lottie-react';

const LottieComponent = dynamic<LottieComponentProps>(() => import('lottie-react'), { ssr: false });

interface AnimationData {
    v: string;
    fr: number;
    ip: number;
    op: number;
    w: number;
    h: number;
}

const Page: React.FC = () => {
    const [animationData, setAnimationData] = useState<AnimationData | null>(null);
    const [animationData2, setAnimationData2] = useState<AnimationData | null>(null);

    useEffect(() => {
        import("../../../../public/asset/animation/Animation - 1726741325931.json")
            .then((data: AnimationData) => {
                setAnimationData(data);
            })
            .catch((err) => {
                console.error("Error loading animation data:", err);
            });
        import("../../../../public/asset/animation/Animation - 1726750191202.json")
            .then((data: AnimationData) => {
                setAnimationData2(data);
            })
            .catch((err) => {
                console.error("Error loading animation data:", err);
            });
    }, []);

    const Card = ({ title, content }:{title?:string ,content?:string}) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <div className="gap-3 pt-[7%] mt-[24px]">
                <Link href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <div
                        className={`
                            flex border border-solid border-[#383737] w-[800px] rounded-[20px] h-[340px] pt-[20px]
                            transition-all duration-300 ease-in-out
                            ${isHovered ?
                                'bg-[#1e1d1d] scale-105 shadow-lg rotate-1' :
                                'bg-[#1615159c] shadow-md'
                            }
                        `}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="ml-[40px] mt-[25px]">
                            <div className="w-[50px] h-[50px]">
                                {animationData && <LottieComponent animationData={animationData} />}
                            </div>
                            <h1 className="text-[25px] oswald">{title}</h1>
                            <h5 className="green-wave-text text-[13px] w-[422px] mt-[12px] oswald">{content}</h5>
                        </div>
                        <div>
                            <div className="w-[270px] h-[100px] absolute right-[250px] top-[750px] [&:nth-child(2)]:top-[755px]">
                                {animationData2 && <LottieComponent animationData={animationData2} />}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    };

        

    return (
        <div className="relative overflow-hidden">
            <section className="relative h-screen overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                >
                    <source src="/asset/background_video/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <section className="relative z-10 w-full p-8 ml-10">
                    <Header />
                    <div className="mt-[20px] ml-[20px]">
                        <h1 className="text-5xl font-bold oswald">
                            <span className="text-[#18181D] mr-3 oswald">
                                <span className="text-green-400 animate-pulse">I&apos;m</span>
                            </span>
                            Goutham
                        </h1>
                        <h5 className="green-wave-text mt-[25px] w-[58%] oswald">
                            A full-stack developer bridges design and functionality,
                            blending frontend creativity with backend precision.
                        </h5>
                        <div className="mt-7 ">
                            <Button
                                variant="outline"
                                className="mr-4 border-gray-300 hover:bg-green-400 text-white transition-colors duration-200 oswald"
                            >
                                See my resume
                            </Button>
                            <Button
                                variant="outline"
                                className="border-gray-300 hover:bg-green-400 text-white transition-colors duration-200 oswald"
                            >
                                Get in touch
                            </Button>
                        </div>
                    </div>
                </section>
            </section>

            <section className="ml-[230px]">
                <Card
                    title="About me"
                    content="A skilled full-stack developer with expertise in backend development, front-end engineering, and UI/UX design, you excel at building scalable applications."
                />
                <Card
                    title="My Skills"
                    content="Proficient in a wide range of technologies including JavaScript, React, Node.js, Python, and SQL."
                />
                <Card
                    title="My Projects"
                    content="Developed various full-stack applications, including an e-commerce platform with real-time inventory management."
                />
            </section>

            <div className="mt-[150px]">
                <hr />
            </div>

            <section className="h-[180px]">
                <div className="flex justify-between">
                    <div className="ml-[100px] mt-[25px]">
                        <h1 className="mr-6">
                            <Image
                                src="/asset/images/portfolio.png"
                                alt="Logo"
                                className="w-40 h-16"
                                width={100}
                                height={100}
                            />
                        </h1>
                        <h6 className="mt-[10px] oswald">Thank you for visiting</h6>
                    </div>
                    <div className="mr-[100px] mt-[20px]">
                        <ul className="oswald">
                            <li className="mr-6"><Link href="/About">About</Link></li>
                            <li className="mr-6"><Link href="/Work">Work</Link></li>
                            <li className="mr-6"><Link href="/Notebook">Notebook</Link></li>
                            <li className="mr-6"><Link href="/Contact">Contact</Link></li>
                            <li><Link href="/More">More</Link></li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Page;