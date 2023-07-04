import React, {useRef} from "react";
import Navbar from "../Components/mainfiles/Navbar";
import NameLogo from "../Components/ignites/IgnitesNameLogo";
import ContactPanel from "../Components/ignites/ContactPanel";
import IgnitesAbout from "../Components/ignites/IgnitesAbout";
function Ignites()
{

      const aboutSectionRef = useRef(null);
      const announcementsSectionRef = useRef(null); 
      const highlightsSectionRef = useRef(null);
      const faqsSectionRef = useRef(null);
      const contactSectionRef = useRef(null);
      const navbarItems = [
        { text: "IGNITES", href: "/ignites" },
        { text: "ABOUT", href: "/ignites/#About", sectionRef: aboutSectionRef },
        { text: "EVENTS", href: "/ignites/#Events", sectionRef: announcementsSectionRef },
        { text: "GALLERY", href: "/ignites/#Gallery", sectionRef: highlightsSectionRef },
        
        { text: "CONTACT", href: "/innovation/#Contact", sectionRef: contactSectionRef },
      ];
      
    return ( 
    <div className = "bg-black min-h-screen w-full flex flex-col" >
        <Navbar navbarItems={navbarItems} />
        <NameLogo />
        <IgnitesAbout  />
        <ContactPanel/>
    
        
    </div>
     );
}
 
export default Ignites;