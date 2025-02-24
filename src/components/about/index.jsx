import React from "react";
import ItemLayout from "./itemLayout";

const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">

                <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
                        Architect of Enchantment
                    </h2>
                    <p className='font-light text-xs sm:text-sm md:text-base'>
                    Recently graduated from the University of Florida with a bachelors in Computer Science, 3.93 GPA. 
                    I'm seeking a software engineering related role. Currently leading data migrations for Implementation Services at Enumerate. 
                    I have extensive experience in customer onboarding and related data migrations. 
                    Reach out to me about anything cutting edge technology, I'd love to chat.
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        3.95 <sub className="font-semibold text-base">GPA @ UF, cum laude</sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        7 <sub className="font-semibold text-base">years of experience in Data Migration.</sub>
                    </p>
                </ItemLayout>

                <ItemLayout
                    className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
                    >
                    <img
                        className="w-full h-auto"
                        src={`https://github-readme-stats.vercel.app/api/top-langs?username=alecbytes&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&langs_count=6&hide_progress=false`}
                        alt="AlecBytes"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className={'col-span-full md:col-span-8 !p-0'}>
                    <img className="w-full h-auto"
                        src="https://github-readme-stats.vercel.app/api?username=alecbytes&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&show=prs_merged"
                        alt="AlecBytes"
                        loading="lazy" 
                    />
                </ItemLayout>

                <ItemLayout className={'col-span-full'}> 
                    <img className="w-full h-auto"
                        src="https://skillicons.dev/icons?i=js,html,css,anaconda,apollo,aws,bash,cpp,cmake,cypress,discord,docker,fastapi,git,github,gmail,graphql,idea,java,latex,linux,md,mongodb,nextjs,nodejs,npm,postgres,postman,powershell,processing,py,pytorch,qt,r,raspberrypi,react,regex,sass,supabase,sklearn,tailwind,tensorflow,ts,ubuntu,vercel,vim,visualstudio,vite,vscode,vue,windows"
                        alt="AlecBytes"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className={'col-span-full md:col-span-6 !p-0'}> {/* should deploy my own github stat api */}
                    <img className="w-full h-auto"
                        src="http://github-readme-streak-stats.herokuapp.com?user=alecbytes&theme=dark&hide_border=true&background=FEFE5B00&ring=FEFE5B&currStreakLabel=FEFE5B"
                        alt="GitHub Streak"
                        loading="lazy" 
                    />
                </ItemLayout>

                <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                    <img className="w-full h-auto"
                        src="https://github-readme-stats.vercel.app/api/pin/?username=alecbytes&repo=PantryPal&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
                        alt="AlecBytes"
                        loading="lazy" 
                    />
                </ItemLayout>

                <ItemLayout className={'col-span-6 !p-0'}>
                    <img className="w-full h-auto"
                        src="https://github-readme-stats.vercel.app/api/pin/?username=alecbytes&repo=dbProject&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
                        alt="AlecBytes"
                        loading="lazy" 
                    />
                </ItemLayout>

                <ItemLayout className={'col-span-6 !p-0'}>
                    <img className="w-full h-auto"
                        src="https://github-readme-stats.vercel.app/api/pin/?username=alecbytes&repo=connexx-chainlink&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
                        alt="AlecBytes"
                        loading="lazy" 
                    />
                </ItemLayout>


            </div>
        </section>
    )
}

export default AboutDetails