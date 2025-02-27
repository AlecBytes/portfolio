"use client"
import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import dynamic from "next/dynamic";
import Resume from "@/components/resume";
import Link from "next/link";
import Button from "@/components/Button"

const BookModel = dynamic(() => import ("@/components/models/BookModel"), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <Image 
        src={bg} 
        priority sizes="100vw"
        alt="background-image" 
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>
    

        <div className='w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0'>
            <RenderModel>
            <BookModel />
            </RenderModel>
        </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7x1 sm:text-8xl lg:text-9xl text-accent">Alec's Resume</h1>
          <p className="font-light text-foreground text-ls mt-4">Education, Skills, Experience, and Projects</p>
          {/* <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn font-light text-foreground text-ls mt-4">1-page PDF Resume: Click here</a> */}
          <Button 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4"
          >
            1-page PDF resume
          </Button>
        </div>
      </div>

      <Resume />

      <Button
        href="/contact"
      >Contact Me</Button>


    </>
  );
}
