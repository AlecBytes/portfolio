import React from "react";
import ItemLayout from "./itemLayout";
import Image from "next/image";
import diplomaPic from "../../../public/diploma.png"
import gradPic1 from "../../../public/grad-photo-1.jpg"
import gradPic2 from "../../../public/grad-photo-2.jpg"
import dataWizard from "../../../public/genAI-data-conversion-wiz2.webp"
import dataConversion from "../../../public/gen-AI-data-conversion.webp"
import { Bold } from "lucide-react";

const Resume = () => {
    return (
        <section className="py-20 w-full">
            <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
                {/* Education Section */}
                <ItemLayout className={"col-span-full row-span-1 text-accent"}>
                    <p className="font-semibold w-full text-center text-2xl sm:text-5xl">
                        EDUCATION:
                    </p>
                </ItemLayout>

                <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
                    <div className="font-light text-base">
                        <h3 className="font-semibold text-accent">University of Florida</h3>
                        <p>Bachelor of Science in <span className="font-semibold">Computer Science</span>, <em>Cum Laude</em></p>
                        <p>College of Liberal Arts and Sciences</p>
                        <p className="">December 2024 | Gainesville, FL</p>
                        <p className="mt-2"><span className="font-semibold">Relevant Courses:</span> Software Engineering, Data Structures and Algorithms, Operating Systems, Computer Organization, Algorithm Abstraction and Design, Advanced Programming Fundamentals, Information and Database Management Systems, Enterprise Software Engineering Practices, Information Security, Data Science</p>
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full lg:col-span-4 lg:row-span-1"}>
                    <p className="font-semibold w-full text-center text-2xl sm:text-5xl">
                        3.95 GPA
                    </p>
                </ItemLayout>

                <ItemLayout className={"col-span-full lg:col-span-4 lg:row-span-1"}>
                    <p className="font-semibold w-full text-center text-2xl sm:text-5xl">
                        2024 Grad
                    </p>
                </ItemLayout>

                <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
                    <Image
                        src={diplomaPic}
                        alt="Diploma"
                    />
                    <a href="https://services.student.ufl.edu/cediploma/?p=ceDiplomaValidate"><span className="underline text-base text-xs sm:text-lg">UF Certified Electronic Credential Validation</span></a>
                </ItemLayout>


                <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4"}>
                    <div>
                        <Image
                            src={gradPic2}
                            alt="Grad Pic 1"
                        />
                    </div>
                </ItemLayout>

                {/* Experience Section */}
                <ItemLayout className={"col-span-full row-span-1 text-accent"}>
                    <p className="font-semibold w-full text-center text-2xl sm:text-5xl">
                        EXPERIENCE:
                    </p>
                </ItemLayout>
                
                <ItemLayout className="col-span-full  flex-col items-start row-span-2">
                    {/* Flex container to align text left and image right */}
                    <div className="flex flex-col lg:flex-row justify-between items-start w-full space-y-6 lg:space-y-0 gap-4">
                        {/* Left Text Content */}
                        <div className="lg:w-3/4">
                        <h3 className="font-semibold text-lg">
                            <span className="text-accent">Data Migration Specialist</span>: Implementation Services
                        </h3>
                        <p>Enumerate (formerly TOPS Software) | January 2020 - Present</p>
                        <p className="text-sm text-foreground/60">Clearwater, FL (Remote)</p>
                        <ul className="list-disc ml-4 mt-2 space-y-1">
                            <li>Developed & deployed a Python automation tool that cut manual data validation time by 50%.</li>
                            <li>Reduced file transfer size by up to 90% through a custom JavaScript filter, accelerating enterprise data migration.</li>
                            <li>Collaborated with engineers to refine the &quot;New Community Setup Wizard&quot;, leveraging data migration expertise.</li>
                            <li>Accelerated data-migration workflows, reducing time-to-value from 90 days to 60 days.</li>
                            <li>Team lead of Data Conversions for SaaS customer onboarding projects.</li>
                            <li>Complete 3-15 data conversion projects each month.</li>
                        </ul>
                        </div>

                        <div>
                            <Image
                                src={dataWizard}
                                alt="Data Wizard"
                                // height={200}
                                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="w-auto h-auto hidden xs:block sm:hidden 2xl:block"
                            />
                        </div>
                    </div>
                    </ItemLayout>

                <ItemLayout className={"col-span-full lg:col-span-6 flex-col items-start row-span-1"}>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg">Project Manager: Customer Onboarding</h3>
                            <p className="">TOPS Software | November 2017 - December 2019</p>
                            <p className="text-sm text-foreground/60">Clearwater, FL (On-Site)</p>
                            <ul className="list-disc ml-4 mt-2 space-y-1">
                                <li>Coordinated 3-10 customer onboarding projects/month, migrating clients to a new SaaS platform.</li>
                                <li>Streamlined communication between product, engineering, and client stakeholders.</li>
                            </ul>
                        </div>
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full lg:col-span-6 flex-col items-start"}>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg">Customer Support Specialist</h3>
                            <p className="">TOPS Software | October 2013 - October 2017</p>
                            <p className="text-sm text-foreground/60">Clearwater, FL (On-Site)</p>
                            <ul className="list-disc ml-4 mt-2 space-y-1">
                                <li>Resolved 5-20 customer support tickets daily as a top-tier service provider.</li>
                                <li>Conducted advanced troubleshooting and partnered with engineering to document and fix bugs.</li>
                                <li>Collaborated with internal teams to translate user pain points into improvements.</li>
                            </ul>
                        </div>
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full row-span-1 text-accent"}>
                    <p className="font-semibold w-full text-center text-2xl sm:text-5xl">
                        PROJECTS:
                    </p>
                </ItemLayout>
 
                {/* Projects Section */}
                <ItemLayout className={"col-span-full lg:col-span-6 flex-col items-start"}>
                    <div className="space-y-6">
                        {/* ChainLink */}
                        <div>
                            <h3 className="font-semibold text-lg">Social App for Cyclists</h3>
                            <p className="">React, JavaScript, Node.js, MongoDB, AWS | Sept 2024 - Dec 2024</p>
                            <ul className="list-disc ml-4 mt-2 space-y-1">
                                <li>Led security enhancements and new features (friend system, ride sharing, password reset flow).</li>
                                <li>Collaborated with a 3-person dev team for production readiness using AWS.</li>
                                <li><a href="https://chainlink.connexx-ai.com/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a> | <a href="https://github.com/LearnDialogue/connexx-chainlink" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full lg:col-span-6 flex-col items-start"}>
                    <div className="space-y-6">
                        {/* PantryPal */}
                        <div>
                            <h3 className="font-semibold text-lg">Food Donation Platform</h3>
                            <p className="">Vue.js, Node.js, PostgreSQL, Supabase Auth, Vercel | Aug 2023 - Dec 2023</p>
                            <ul className="list-disc ml-4 mt-2 space-y-1">
                                <li>Engineered a dynamic feed & notification system connecting restaurants&apos; surplus food with local charities.</li>
                                <li>Led a 3-person team, focusing on secure architecture, efficient data flow, and real-time concurrency.</li>
                                <li><a href="https://pantrypal-lac.vercel.app" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a> | <a href="https://github.com/AlecBytes/PantryPal" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full lg:col-span-6 flex-col items-start"}>
                    <div className="space-y-6">
                        {/* Baseball Data Trends */}
                        <div>
                            <h3 className="font-semibold text-lg">Data Trends & Visualizations Website</h3>
                            <p className="">SQL, Vue.js, Node.js, Oracle Cloud | Aug 2023 - Dec 2023</p>
                            <ul className="list-disc ml-4 mt-2 space-y-1">
                                <li>Authored optimized SQL queries to uncover key data trends in baseball statistics.</li>
                                <li>Developed a secure Node.js API and front-end visuals in Vue.js, achieving seamless cloud-hosted data access.</li>
                                <li><a href="https://baseballdatatrends.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a> | <a href="https://github.com/AlecBytes/dbProject" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full lg:col-span-6 flex-col items-start"}>
                    <div className="space-y-6">
                        {/* AI Prediction Project */}
                        <div>
                            <h3 className="font-semibold text-lg">AI Prediction of Song Genre and Popularity</h3>
                            <p className="">Python, Jupyter, PyTorch, scikit-learn | May 2023 - Jul 2023</p>
                            <ul className="list-disc ml-4 mt-2 space-y-1">
                                <li>Analyzed a Spotify dataset, exploring and visualizing correlations between audio features and song popularity.</li>
                                <li>Preprocessed data using Python and pandas with dimensionality reduction techniques for optimized model inputs.</li>
                                <li>Developed and evaluated Random Forest and Neural Network models for genre and popularity prediction.</li>
                                <li><a href="https://github.com/AlecBytes/DataScienceFinalProject" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full xl:col-span-6 flex-col items-start"}>
                    <div className="space-y-6">
                        {/* Portfolio */}
                        <div>
                            <h3 className="font-semibold text-lg">Personal Portfolio Website</h3>
                            <p className="">Next.js, Tailwind CSS, Three.js, Vercel | Feb 2025</p>
                            <ul className="list-disc ml-4 mt-2 space-y-1">
                                <li>Skill Icons: A section of my portfolio showcases the various programming languages and developer tools I&apos;ve used. Each skill is displayed as a visual icon.</li>
                                <li>Gen AI 3D Model: I used meshy.ai to generate a 3D model from my graduation photo and tapped into additional 3D assets from Sketchfab. The result? A fun, immersive experience that merges code with a bit of magic.</li>
                                <li>Engaging Animations & Effects: Thanks to framer-motion and Three.js integration, the site is packed with smooth transitions and interactive elements.</li>
                                <li>Email Contact Form: Implemented react-hook-form for a seamless email form, allowing anyone to send me an email.</li>
                                <li>GitHub Stats API: Integrated GitHub stats API with React components to highlight my contributions.</li>
                                <li><a href="https://www.alecbytes.com/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a> | <a href="https://github.com/LearnDialogue/portfolio" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full row-span-1 text-accent"}>
                    <p className="font-semibold w-full text-center text-2xl sm:text-5xl">
                        SKILLS:
                    </p>
                </ItemLayout>

                <ItemLayout className="col-span-full flex-col items-start row-span-1">
                    <div className="space-y-6">
                        <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                            <span className="font-semibold">Languages/Frameworks:</span><br />
                            Java (OOP), Python, JavaScript (React/Node), GraphQL, SQL (Oracle/PostgreSQL), C++, R, HTML/CSS, TypeScript
                            </div>
                            <div>
                            <span className="font-semibold">Cloud & DevOps:</span><br />
                            Linux, AWS (EC2), Oracle OCI, Supabase, MongoDB Atlas, Vercel, Docker
                            </div>
                            <div>
                            <span className="font-semibold">Developer Tools:</span><br />
                            Git, Jira, Visual Studio, VS Code, IntelliJ, Jupyter Notebook, Postman, Vite, Quasar
                            </div>
                        </div>
                        </div>
                    </div>
                </ItemLayout>


                <ItemLayout className={"col-span-full"}> 
                    <img className="w-full h-auto"
                        src="https://skillicons.dev/icons?i=git,github,java,js,ts,py,cpp,r,processing,html,css,sass,tailwind,regex,md,vue,react,nextjs,vite,nodejs,npm,cypress,postman,apollo,graphql,fastapi,supabase,postgres,mongodb,docker,aws,vercel,linux,ubuntu,windows,bash,powershell,vim,visualstudio,vscode,idea,cmake,pytorch,tensorflow,sklearn,anaconda,gmail,discord,raspberrypi,qt,latex,
"
                        alt="AlecBytes - Skills"
                        loading="lazy"
                    />
                </ItemLayout>

            </div>
        </section>
    )
}

export default Resume;