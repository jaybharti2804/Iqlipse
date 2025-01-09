"use client"

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Info, Megaphone, MessageCircle } from 'lucide-react';
import CustomPortableText from '@/sanity/utils/customPortableText';
import { imageURL } from '@/sanity/utils/common.utils';

export default function HeroSection({clubInfo}) {

    const goToSection = (sectionId)=>{
        if(!window)return;
        document?.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth'});
    }

    return (
        <section id="hero-section">
            <div className="grid max-w-screen-xl px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto ml-auto lg:ml-10 place-self-center lg:col-span-7">
                    <button
                        className="flex flex-row py-1 px-2 rounded-full text-sm justify-center items-center m-2 hover:bg-backgroundColor3 transition-all duration-200 border-2 border-borderColor1 text-textColor3 hover:text-textColor1 group hover:border-textColor1 font-bold bg-backgroundColor2"
                        onClick={()=>goToSection('about-us')}
                    >
                        <Info className='w-5 h-5 transition-all duration-200 ml-1 mr-1'/>
                        About us 
                        <ChevronRight className='w-5 h-5 transition-all duration-200 ml-1 group-hover:ml-3'/>
                    </button>
                    <h1 className={`max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl inline-block bg-gradient-to-r bg-clip-text text-[rgba(0,0,0,0)] from-buttonColor to-logoColor `}>
                        {clubInfo.primaryHeroText}
                    </h1>
                    <div className="max-w-2xl text-textColor3 mb-2 md:text-lg lg:text-xl">
                        <CustomPortableText value={clubInfo.secondaryHeroText}/>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-bold text-center text-[#fff] rounded-lg bg-logoColor focus:ring-4 focus:ring-borderColor3 group hover:scale-110 transition-all duration-300 hover:bg-buttonColor my-1"
                    >
                        Contact us
                        <MessageCircle className='ml-2'/>
                    </Link>
                    <button
                        onClick={()=>goToSection('upcoming-events')}
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-textColor2 border border-borderColor3 rounded-lg hover:text-textColor1 hover:border-textColor1 hover:bg-backgroundColor2 focus:ring-4 focus:ring-borderColor2 group hover:scale-110 transition-all duration-300 my-1"
                    >
                        Upcoming Events
                        <Megaphone className='ml-2'/>
                    </button>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image src={imageURL(clubInfo.logoBig)} alt="iqlipse-logo" width={500} height={500} />
                </div>
            </div>
        </section>
    );
}