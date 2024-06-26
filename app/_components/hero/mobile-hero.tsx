"use client"

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const MobileHero = () => {
    const [index, setIndex] = useState(0);

    // Function to increment index every 5 seconds
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIndex(prevIndex => (prevIndex + 1) % header_images.data.length);
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, [header_images]);


    // scroll to section
    function scrollBottom() {
        // scroll to section with id as #contactForm
        document.getElementById("contactForm")?.scrollIntoView({ behavior: "smooth" });
    }


    return (
        <div
            className="bg-img valign"
            style={{
                position: "relative",
                backgroundImage: `url('')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 1s ease-in-out",
            }}
        >
            <div
                className="black-backdrop"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    zIndex: 1,
                }}
            ></div>
            <div
                className="container"
                style={{
                    position: "relative",
                    zIndex: "1",
                    height: "100vh",
                    margin: "auto",
                }}
            >
                <div className="row align-items-center h-100">
                    <div className="col-lg-8 col-md-10">
                        <div className="caption hmone my-auto">
                            <h5 className="thin text-white playfont">Latest</h5>
                            <TypeAnimation
                                sequence={[
                                    // typing_text?.content[0],
                                    'Movies',
                                    5000,
                                    'Shows',
                                    // typing_text?.content[1],
                                    5000,
                                    'Dub',
                                    // typing_text?.content[2],
                                    5000,
                                ]}
                                repeat={Infinity}
                            />
                            <p className="mt-10 text-white">All Under your palms</p>
                            <a
                                onClick={scrollBottom}
                                className="btn-curve btn-bord btn-lit mt-30"
                            >
                                <span>Enquire Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileHero;