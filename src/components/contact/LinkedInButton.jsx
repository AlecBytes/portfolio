"use client"
import { Linkedin } from "lucide-react";
import Link from "next/link";
import clsx from "clsx"
import { motion } from 'framer-motion';

const LinkedinBtn = ({ href, children, className = "", ...props }) => {
  return (
    <>
        <motion.div className='w-fit cursor-pointer z-50'
                  initial="hidden"
                  animate="show"
        >
            <Link
                href={"https://www.linkedin.com/in/alexanderjackpatterson/"}
                target={'_blank'}
                className='text-foreground rounded-full flex items-center justify-center custom-bg'
                aria-label={"LinkedIn"}
                name={"LinkedIn"}
            >
                <span className='relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent'>
                    {<Linkedin className='w-full h-auto' strokeWidth={1.5} />}

                    <span className='peer bg-transparent absolute top-0 left-0 w-full h-full' />

                    <span className={clsx("absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap"
                    )}>
                        {"LinkedIn"}
                    </span>    
                
                </span>
                    
            </Link>
        </motion.div>
    </>
  );
};

export default LinkedinBtn;