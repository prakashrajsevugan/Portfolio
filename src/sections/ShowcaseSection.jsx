import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(()=>{
        gsap.fromTo(sectionRef.current, 
            {opacity:0},
            {
            opacity:1,duration:1.5
        })

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(card,
                {y: 50, opacity: 0},
                {
                    y: 0, opacity: 1, duration: 1, delay: (index+1) * 0.3,
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100px",
                        toggleActions: "play none none none"
                    }
                }
            )
        })
    },[])

    return(
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* Left */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Chirper" />
                        </div>
                        <div className="text-content">
                            <h2>
                                Bringing People Together Anywhere, Anytime with an Intelligent Messaging App called Chirper.
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                An app built with Php Laravel, Expo, & TailwindCSS for a fast,
                                user-friendly experience.
                            </p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Library management" />
                            </div>
                            <h2>Book Store Management</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="YC Directory" />
                            </div>
                            <h2>3D Island Rendered Site</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection;