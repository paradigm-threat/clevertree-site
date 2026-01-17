import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, GraduationCap, Briefcase, Award, Music, Video, Star } from 'lucide-react'
import { Section, Card } from './ui'

export const Resume = () => (
    <Section title="Resume">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="md:col-span-2 space-y-12">
                {/* Experience Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-primary" /> Experience
                    </h3>
                    <div className="space-y-8">
                        <ExperienceItem
                            title="Software Contractor (Engineer II)"
                            company="University of Phoenix"
                            location="Phoenix, AZ"
                            duration="June 2021 - Present"
                            description="Developed applications and web pages for UofPhx. Designing and implementing ReactJS components in AEM & NextJS. Upgrading and maintaining hardware infrastructure via AWS. Creating unit/e2e tests for all components and managing tech debt. Monitoring user experience via FullStory/SpeechMiner/ContentSquare."
                        />
                        <ExperienceItem
                            title="Software Contractor"
                            company="Harkins Theatres"
                            location="Scottsdale, AZ"
                            duration="June 2017 - June 2021"
                            description="Developed Harkins.com website and store apps. Delved heavily into NodeJS, Android, and iOS ecosystems. Implemented features using PHP, MySQL, jQuery, and REST. Managed migrations from Windows to LAMP. Maintained uptime during high-traffic events and attacks. Deployed React Native apps to Play and Apple stores."
                        />
                        <ExperienceItem
                            title="Software Contractor"
                            company="Simon Payments"
                            location="Florida (Remote)"
                            duration="Aug 2016 – Dec 2018"
                            description="Redesigned entire payment processor in PHP including a front-end UI generating forms on the fly. Integrated APIs for processing bank transactions. Developed modules for payment, payout, and financial systems. Maintained encrypted storage, scheduling, and automation."
                        />
                        <ExperienceItem
                            title="Originator and Software Engineer"
                            company="Originate and NewAer"
                            location="San Francisco, CA"
                            duration="Aug 2013 – Dec 2014"
                            description="Built apps for Android, iOS, WinRT, and Windows 8 desktop. Investigated proximity-based social networking technologies."
                        />
                        <ExperienceItem
                            title="Head of Information Technology"
                            company="Etelegate"
                            location="Scottsdale, AZ"
                            duration="May 2005 – Oct 2012"
                            description="Lead Developer and IT Head for a payment processor. Developed and maintained websites over a 6-year period. Built financial systems, account management, and real-time data integrations with global banking."
                        />
                    </div>
                </div>

                {/* Education Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <GraduationCap className="w-6 h-6 text-primary" /> Education
                    </h3>
                    <div className="space-y-6">
                        <EducationItem
                            school="Arizona State University"
                            location="Tempe, Arizona"
                            degree="B.S. in Computer Science"
                            duration="2002 - 2008"
                        />
                        <EducationItem
                            school="University of Arizona"
                            location="Tucson, Arizona"
                            degree="Computer Science (Transferred to ASU)"
                            duration="2001 - 2002"
                        />
                    </div>
                </div>

                {/* References Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Star className="w-6 h-6 text-primary" /> Professional Reference
                    </h3>
                    <Card className="bg-primary/5 border-primary/20">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Star className="w-6 h-6 text-primary fill-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Mike McDonald</h4>
                                <p className="text-muted-foreground text-xs uppercase font-semibold">Software Architect @ Harkins Theatres</p>
                                <div className="flex gap-4 mt-1 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> mikemcdonald@harkins.com</span>
                                    <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> 615-995-0639</span>
                                </div>
                            </div>
                        </div>
                        <blockquote className="italic border-l-4 border-primary/30 pl-4 py-1 text-muted-foreground leading-relaxed">
                            &quot;Ari is the real deal and I can&apos;t imagine a company hiring him as a developer and being dissatisfied with his work. He turned a non-functional site into a functional one. In a high-stress environment he kept his cool and was able to meet all requirements asked of him.&quot;
                        </blockquote>
                    </Card>
                </div>
            </div>

            <div className="space-y-8">
                {/* Skills Section */}
                <Card className="sticky top-8">
                    <h3 className="text-xl font-bold mb-6 border-b pb-2 text-primary flex items-center gap-2">
                        <Award className="w-5 h-5" /> Technical Arsenal
                    </h3>

                    <div className="space-y-6">
                        <SkillGroup title="Programming" skills={[
                            'JavaScript/TypeScript', 'ReactJS', 'React Native', 'NodeJS', 'HTML5 & CSS3',
                            'PHP', '.NET & C#', 'SQL', 'Android/iOS Dev', 'CI/CD', 'API Design (REST/GraphQL)'
                        ]} />

                        <SkillGroup title="Administration" skills={[
                            'Linux SysAdmin', 'Nginx / Apache', 'SSL Certs', 'AEM', 'AWS Lambda & EC2'
                        ]} />

                        <SkillGroup title="Tools" skills={[
                            'Git', 'SSH', 'Bash', 'JetBrains IDEs', 'VS Code', 'Gimp', 'Kdenlive', 'OBS Studio', 'NVDA'
                        ]} />

                        <SkillGroup title="Media" skills={[
                            'Video Editing', 'Image Creation', 'Music Composition', 'Production'
                        ]} />

                        <div>
                            <p className="font-bold mb-2 text-xs uppercase tracking-widest text-primary/70">Certifications</p>
                            <ul className="space-y-1">
                                <li className="flex items-center gap-2 text-xs font-medium">
                                    <Award className="w-3 h-3 text-yellow-500" /> AWS Certified Cloud Practitioner
                                </li>
                                <li className="flex items-center gap-2 text-xs font-medium">
                                    <Award className="w-3 h-3 text-yellow-500" /> AWS Certified Developer
                                </li>
                            </ul>
                        </div>
                    </div>
                </Card>

                {/* Mission Section */}
                <Card className="bg-secondary/30">
                    <h3 className="font-bold mb-3 text-primary uppercase text-xs tracking-widest">Personal Project Mission</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed italic">
                        Focusing on open-source creative tools and interactive media that empower artists and musicians.
                    </p>
                </Card>
            </div>
        </div>
    </Section>
)

const SkillGroup = ({ title, skills }: { title: string, skills: string[] }) => (
    <div>
        <p className="font-bold mb-2 text-xs uppercase tracking-widest text-primary/70">{title}</p>
        <div className="flex flex-wrap gap-1.5">
            {skills.map(skill => (
                <span key={skill} className="bg-background border px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-medium hover:border-primary transition-colors">
                    {skill}
                </span>
            ))}
        </div>
    </div>
)

const ExperienceItem = ({ title, company, location, duration, description }: any) => (
    <div className="experience-item border-l-2 border-primary/20 pl-4 py-1 relative hover:border-primary transition-colors group">
        <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-2 shadow-[0_0_8px_rgba(var(--primary),0.5)] group-hover:scale-125 transition-transform" />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
            <h4 className="font-bold text-lg leading-tight">{title}</h4>
            <span className="text-[10px] font-mono bg-secondary px-2 py-0.5 rounded border whitespace-nowrap">{duration}</span>
        </div>
        <div className="flex flex-wrap gap-x-4 text-muted-foreground mb-3 text-xs">
            <span className="flex items-center font-bold text-foreground/80 tracking-tight uppercase"><Briefcase className="w-3 h-3 mr-1" /> {company}</span>
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {location}</span>
        </div>
        <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
    </div>
)

const EducationItem = ({ school, location, degree, duration }: any) => (
    <div className="education-item group border-b pb-4 last:border-0">
        <div className="flex justify-between items-start gap-4">
            <h4 className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">{school}</h4>
            <span className="text-[10px] sm:text-xs font-mono bg-secondary px-2 py-1 rounded border overflow-hidden">{duration}</span>
        </div>
        <p className="font-semibold text-primary/80 text-sm tracking-wide mb-1">{degree}</p>
        <p className="text-muted-foreground text-xs flex items-center gap-1"><MapPin className="w-3 h-3" /> {location}</p>
    </div>
)