import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
import ResumeDetails from "@/components/resume";
import Button from "@/components/Button"

const BookModel = dynamic(() => import ("@/components/models/BookModel"), {
  ssr: false
});

export const metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <>
      <Image 
        src={bg} 
        priority
        sizes="100vw"
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"/>
    

        <div className='w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0'>
            <RenderModel>
              <BookModel />
            </RenderModel>
        </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">Alec&apos;s Resume</h1>
          <p className="font-light text-foreground text-ls mt-4">Education, Skills, Experience, and Projects</p>
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4">
            <Button 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4"
            >
              1-page PDF resume
            </Button>
            <Button 
              href="/resume_extended.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4"
            >
              2-page PDF resume
            </Button>
          </div>
        </div>
      </div>

      <ResumeDetails />

      <Button
        href="/contact"
      >Contact Me</Button>
    </>
  );
}
