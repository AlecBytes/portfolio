import React from "react";
import ItemLayout from "./itemLayout";
import Image from "next/image";
import diplomaPic from "../../../public/diploma.png"
import gradPic1 from "../../../public/grad-photo-1.jpg"
import gradPic2 from "../../../public/grad-photo-2.jpg"
import { Bold } from "lucide-react";

const Resume = () => {
    return (
        <section className="py-20 w-full">
            <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
                {/* Education Section */}
                <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
                    <h2 className="text-xl md:text-2xl text-left w-full capitalize">
                        Education
                    </h2>
                    <div className="font-light text-base">
                        <h3 className="font-semibold text-accent">University of Florida</h3>
                        <p>Bachelor of Science in <span className="font-semibold">Computer Science</span>, <em>Cum Laude</em></p>
                        <p>College of Liberal Arts and Sciences</p>
                        <p className="">December 2024 | Gainesville, FL</p>
                        <p className="mt-2"><span className="font-semibold">Relevant Courses:</span> Software Engineering, Data Structures and Algorithms, Operating Systems, Computer Organization, Algorithm Abstraction and Design, Advanced Programming Fundamentals, Information and Database Management Systems, Enterprise Software Engineering Practices, Information Security, Data Science</p>
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full lg:col-span-4 lg:row-span-2 text-accent"}>
                    <p className="font-semibold w-full text-center text-2xl sm:text-5xl">
                        3.95<sub className="font-semibold text-base">GPA</sub>
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
                <ItemLayout className={"col-span-full flex-col items-start"}>
                    <h2 className="text-xl md:text-2xl text-left w-full capitalize mb-4">
                        Experience
                    </h2>
                    <div className="space-y-6">
                        {/* Current Role */}
                        <div>
                            <h3 className="font-semibold text-lg">Data Migration Specialist: Implementation Services</h3>
                            <p className="text-accent">Enumerate (formerly TOPS Software) | January 2020 - Present</p>
                            <p className="text-sm text-foreground/60">Clearwater, FL (Remote)</p>
                            <ul className="list-disc ml-4 mt-2 space-y-1">
                                <li>Developed & deployed a Python automation tool that cut manual data validation time by 50%.</li>
                                <li>Reduced file transfer size by up to 90% through a custom JavaScript filter, accelerating enterprise data migration.</li>
                                <li>Collaborated with engineers to refine the "New Community Setup Wizard," leveraging data migration expertise.</li>
                                <li>Accelerated data-migration workflows, reducing time-to-value from 90 days to 60 days.</li>
                            </ul>
                        </div>

                        {/* Previous Roles */}
                        <div>
                            <h3 className="font-semibold text-lg">Project Manager: Customer Onboarding</h3>
                            <p className="text-accent">TOPS Software | November 2017 - December 2019</p>
                            <p className="text-sm text-foreground/60">Clearwater, FL (On-Site)</p>
                            <ul className="list-disc ml-4 mt-2 space-y-1">
                                <li>Coordinated 3-10 customer onboarding projects/month, migrating clients to a new SaaS platform.</li>
                                <li>Streamlined communication between product, engineering, and client stakeholders.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">Customer Support Specialist</h3>
                            <p className="text-accent">TOPS Software | October 2013 - October 2017</p>
                            <p className="text-sm text-foreground/60">Clearwater, FL (On-Site)</p>
                            <ul className="list-disc ml-4 mt-2 space-y-1">
                                <li>Resolved 5-20 customer support tickets daily as a top-tier service provider.</li>
                                <li>Conducted advanced troubleshooting and partnered with engineering to document and fix bugs.</li>
                                <li>Collaborated with internal teams to translate user pain points into improvements.</li>
                            </ul>
                        </div>
                    </div>
                </ItemLayout>

                {/* Projects Section */}
                <ItemLayout className={"col-span-full flex-col items-start"}>
                    <h2 className="text-xl md:text-2xl text-left w-full capitalize mb-4">
                        Select Projects
                    </h2>
                    <div className="space-y-6">
                        {/* Project items */}
                        <div>
                            <h3 className="font-semibold text-lg">Social App for Cyclists</h3>
                            <p className="text-accent">React, JavaScript, Node.js, MongoDB, AWS | Sept 2024 - Dec 2024</p>
                            <ul className="list-disc ml-4 mt-2 space-y-1">
                                <li>Led security enhancements and new features (friend system, ride sharing, password reset flow).</li>
                                <li>Collaborated with a 3-person dev team for production readiness using AWS.</li>
                                <li><a href="https://chainlink.connexx-ai.com/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a> | <a href="https://github.com/LearnDialogue/connexx-chainlink" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">Food Donation Platform</h3>
                            <p className="text-accent">Vue.js, Node.js, PostgreSQL, Supabase Auth, Vercel | Aug 2023 - Dec 2023</p>
                            <ul className="list-disc ml-4 mt-2 space-y-1">
                                <li>Engineered a dynamic feed & notification system connecting restaurants' surplus food with local charities.</li>
                                <li>Led a 3-person team, focusing on secure architecture, efficient data flow, and real-time concurrency.</li>
                                <li><a href="https://pantrypal-lac.vercel.app" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a> | <a href="https://github.com/AlecBytes/PantryPal" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Repo</a></li>
                            </ul>
                        </div>

                        {/* Data Trends Website */}
                        <div>
                            <h3 className="font-semibold text-lg">Data Trends & Visualizations Website</h3>
                            <p className="text-accent">SQL, Vue.js, Node.js, Oracle Cloud | Aug 2023 - Dec 2023</p>
                            <ul className="list-disc ml-4 mt-2 space-y-1">
                                <li>Authored optimized SQL queries to uncover key data trends in baseball statistics.</li>
                                <li>Developed a secure Node.js API and front-end visuals in Vue.js, achieving seamless cloud-hosted data access.</li>
                                <li><a href="https://baseballdatatrends.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a> | <a href="https://github.com/AlecBytes/dbProject" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Repo</a></li>
                            </ul>
                        </div>

                        {/* AI Prediction Project */}
                        <div>
                            <h3 className="font-semibold text-lg">AI Prediction of Song Genre and Popularity</h3>
                            <p className="text-accent">Python, Jupyter, PyTorch, scikit-learn | May 2023 - Jul 2023</p>
                            <ul className="list-disc ml-4 mt-2 space-y-1">
                                <li>Analyzed a Spotify dataset, exploring and visualizing correlations between audio features and song popularity.</li>
                                <li>Preprocessed data using Python and pandas with dimensionality reduction techniques for optimized model inputs.</li>
                                <li>Developed and evaluated Random Forest and Neural Network models for genre and popularity prediction.</li>
                                <li><a href="https://github.com/AlecBytes/DataScienceFinalProject" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Repo</a></li>
                            </ul>
                        </div>
                    </div>
                </ItemLayout>
            </div>
        </section>
    )
}

export default Resume;