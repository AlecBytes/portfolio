import React from "react";
import ItemLayout from "./itemLayout";
import Image from "next/image";
import diplomaPic from "../../../public/diploma.webp"
import gradPic2 from "../../../public/grad-photo-handShake.webp"

const AboutDetails = () => {
    return (
        <section className="py-20 w-full">
            <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">

                <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
                    <h2 className="text-xl md:text-2xl text-left w-full capitalize">
                        Architect of Enchantment
                    </h2>
                    <p className="font-light text-xs sm:text-sm md:text-base">
                    Recently graduated from the University of Florida with a bachelors in Computer Science, 3.93 GPA. 
                    I&apos;m seeking a software engineering related role. Currently leading data conversions for Implementation Services at Enumerate. 
                    I have extensive experience in SaaS customer onboarding and related data migrations. 
                    Reach out to me about anything cutting edge technology, I&apos;d love to chat.
                    </p>
                </ItemLayout>

                <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        3.95 <sub className="font-semibold text-base">GPA @ UF, cum laude</sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        7 <sub className="font-semibold text-base">years in customer onboarding data conversion</sub>
                    </p>
                </ItemLayout>


                <ItemLayout
                    className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
                    >
                    <img
                        className="w-full h-auto"
                        src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=alecbytes&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&langs_count=6&hide_progress=false&size_weight=0.6&count_weight=0.4&hide=makefile,shell,scss,vue,css,html,cmake,PHP`}
                        alt="AlecBytes-Top Languages"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                    <img className="w-full h-auto"
                        src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=alecbytes&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&show=prs_merged&rank_icon=github`}
                        alt="AlecBytes - Github Stats"
                        loading="lazy" 
                    />
                </ItemLayout>

                <ItemLayout className={"col-span-full"}> 
                    <img className="w-full h-auto"
                        src="https://skillicons.dev/icons?i=git,github,java,js,ts,py,cpp,r,processing,html,css,sass,tailwind,regex,md,vue,react,nextjs,vite,nodejs,npm,cypress,postman,apollo,graphql,fastapi,supabase,postgres,mongodb,docker,aws,vercel,linux,ubuntu,windows,bash,powershell,vim,visualstudio,vscode,idea,cmake,pytorch,tensorflow,sklearn,anaconda,gmail,discord,raspberrypi,qt,latex"
                        alt="AlecBytes - Skills"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}> {/* should deploy my own github stat api */}
                    <img className="w-full h-auto"
                        src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=alecbytes&theme=dark&hide_border=true&background=FEFE5B00&ring=FEFE5B&currStreakLabel=FEFE5B`}
                        alt="GitHub Streak"
                        loading="lazy" 
                    />
                </ItemLayout>

                {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <a 
                        href="https://github.com/AlecBytes/pantrypal" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block w-full hover:scale-105 transition-transform"
                    >
                        <img className="w-full h-auto"
                            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=alecbytes&repo=PantryPal&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
                            alt="AlecBytes-PantryPal"
                            loading="lazy"
                        />
                    </a>
                </ItemLayout> */}

                {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <a 
                        href="https://github.com/AlecBytes/dbProject" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block w-full hover:scale-105 transition-transform"
                    >
                        <img className="w-full h-auto"
                            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=alecbytes&repo=dbProject&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
                            alt="AlecBytes-Baseball-Stats"
                            loading="lazy"
                        />
                    </a>
                </ItemLayout> */}

                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <a 
                        href="https://github.com/AlecBytes/portfolio" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block w-full hover:scale-105 transition-transform"
                    >
                        <img className="w-full h-auto"
                            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=alecbytes&repo=portfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
                            alt="AlecBytes-Portfolio"
                            loading="lazy"
                        />
                    </a>
                </ItemLayout>

                <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
                    <Image
                        src={diplomaPic}
                        alt="Graduation Photo at University of Florida"
                        placeholder="blur"
                        priority={true}
                        sizes="(min-width: 1024px) 66vw, 100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                        }}
                    />
                    <a 
                        href="https://services.student.ufl.edu/cediploma/?p=ceDiplomaValidate"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-4 hover:text-accent transition-colors"
                    >
                        <span className="underline text-base text-xs sm:text-lg">
                            UF Certified Electronic Credential Validation
                        </span>
                    </a>
                </ItemLayout>

                <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4"}>
                    <div>
                        <Image
                            src={gradPic2}
                            alt="Graduation Photo at University of Florida"
                            placeholder="blur"
                            loading="lazy"
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </ItemLayout>

            </div>
        </section>
    )
}

export default AboutDetails