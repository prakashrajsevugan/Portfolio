import GlowCard from "../components/GlowCard"
import TitleHeader from "../components/TitleHeader"
import { expCards } from "../constants"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  
  useGSAP(()=>{
    gsap.utils.toArray(".timeline-card").forEach((card,index)=>{
    gsap.from(card,{
        xPercent:-100,
        opacity:0,
        transformOrigin:'left left',
        duration:1,
        ease:"power2.inOut",
        scrollTrigger:{
            trigger:card,
            start:"top 80%",
     
        }
      })
    })

    gsap.to(".timeline",{
        transformOrigin:'bottom bottom',
        ease:'power1.inOut',
        scrollTrigger:{
            trigger:".timeline",
            start:"top center",
            end:"70% center",
            onUpdate:(self)=>{
                gsap.to(".timeline",{
                    scaleY:1-self.progress,
                });
            },
        },
    })

    gsap.utils.toArray(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<");

  },[])
  
  return (
    <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
        <div className="w-full h-full md:px-20 px-5">
            <TitleHeader Title="Professional Work Experience" sub="💼 My Career Overview"/>

            <div className="mt-32 relative">
                <div className="relative z-50 xl:space-y-32 space-y-10">
                    {expCards.map((card,index)=>(
                        <div key={card.title} className="exp-card-wrapper">
                            <div className="xl:w-2/6">
                                <GlowCard card={card} index={index}>
                                    <div>
                                        <img src={card.imgPath} alt={card.title} />
                                    </div>
                                </GlowCard>
                            </div>
                            
                            <div className="xl:w-4/6">
                                <div className="flex items-start">
                                    <div className="timeline-wrapper">
                                        <div className="timeline " />
                                        <div className="gradient-line w-1 h-full"/>
                                    </div>

                                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                        <div className="timeline-logo">
                                            <img src={card.logoPath} alt='logo'/>
                                        </div>
                                        <div >
                                            <h3  className="font-semibold text-3xl">{card.title}</h3>
                                            <p className="my-5 text-white-50">🗓️ {card.date}</p>
                                            <p className="text-[#839cb5] italic">Responsibilities</p>
                                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                {card.responsibilities.map((responsibilities)=>(
                                                    <li key={responsibilities} className="text-lg">{responsibilities}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ExperienceSection
