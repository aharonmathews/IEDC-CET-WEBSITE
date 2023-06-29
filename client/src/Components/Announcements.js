import React from "react";
import Slider from "./Slider";

export default function UpcomingEvents() {
    const Announcements = [{
            eventName: "Quickfolio",
            date: "Sign up for Quickfolio now:  https://www.quickfolio.me/",
            image: "./buildclub.jpg",
            registrationLink: "",
            brochureLink: ""
        },
        {
            eventName: "INO POINTS",
            date: "Introducing 𝗜𝗡𝗢 𝗣𝗢𝗜𝗡𝗧𝗦 A revolution in how CET thinks.𝗧",
            image: "https://randomwordgenerator.com/img/picture-generator/52e4d641495ba414f1dc8460962e33791c3ad6e04e507441722978d69f4ac2_640.jpg",
            registrationLink: "",
            brochureLink: ""
        }

    ];

    return ( <
        div className = "w-3/4 text-center  space-y-5 self-center mt-4 mb-2 " >
        <h className = "mb-2 text-4xl font-bold text-white" > Announcements </h> <
        Slider data = { Announcements }/>
        </ div >
    );
}