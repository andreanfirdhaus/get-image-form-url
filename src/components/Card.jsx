import React, { useEffect, useState } from "react";
import {
    LazyLoadImage,
    trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Hero from "./Hero";

function Card({ pathURL }) {
    const [getLocalStorageClassmates, setGetLocalStorageClassmates] = useState(
        []
    );
    const [getLocalStorageGraduated, setGetLocalStorageGraduated] = useState(
        []
    );
    const [currentPath, setCurrentPath] = useState("");

    const setPathURL = () => {
        const currentPath = window.location.pathname;
        setCurrentPath(currentPath);
    };

    useEffect(() => {
        setPathURL();

        // Retrieves data from "dataClassmates" in sessionStorage
        const classmatesData = JSON.parse(
            sessionStorage.getItem("dataClassmates")
        );
        if (classmatesData && classmatesData.length > 0) {
            setGetLocalStorageClassmates(classmatesData);
        } else {
            setGetLocalStorageClassmates(null);
        }

        // Retrieves data from "dataGraduated" in sessionStorage
        const graduatedData = JSON.parse(
            sessionStorage.getItem("dataGraduated")
        );
        if (graduatedData && graduatedData.length > 0) {
            setGetLocalStorageGraduated(graduatedData);
        } else {
            setGetLocalStorageGraduated(null);
        }
    }, [pathURL]);

    return (
        <section>
            {currentPath === "/" ? (
                getLocalStorageClassmates ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 content-center">
                        {getLocalStorageClassmates.map((url, index) => {
                            return (
                                <div
                                    className="card w-full bg-base-100 shadow-md"
                                    key={index}
                                >
                                    <figure>
                                        <LazyLoadImage
                                            src={url}
                                            effect="blur"
                                            draggable="false"
                                            className="w-52 h-52 sm:w-56 sm:h-56 object-cover object-top rounded-md"
                                        />
                                    </figure>
                                    <div className="py-7 items-center text-center">
                                        <div className="text-sm font-medium">
                                            {url
                                                .split("/")
                                                .pop()
                                                .split(".")[0]
                                                .replace(/_/g, ".")}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    // If the data from "dataClassmates" is null/does not exist, then display the following elements
                    <Hero desc="Your classmates photo" />
                )
            ) : currentPath === "/graduated" ? (
                getLocalStorageGraduated ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 pb-3.5 content-center">
                        {getLocalStorageGraduated.map((urlGraduated, index) => {
                            return (
                                <div
                                    className="card w-full bg-base-100 shadow-xl"
                                    key={index}
                                >
                                    <figure>
                                        <LazyLoadImage
                                            src={urlGraduated}
                                            effect="blur"
                                            draggable="false"
                                            className="w-52 h-52 sm:w-56 sm:h-56 object-cover object-top rounded-md pointer-events-none"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p className="text-sm font-medium">
                                            {urlGraduated
                                                .split("/")
                                                .pop()
                                                .split(".")[0]
                                                .replace(/_/g, ".")}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    // If the data from "dataGraduated" is null/does not exist, then display the following elements
                    <Hero desc="your classmates photo who have graduated" />
                )
            ) : null}
        </section>
    );
}

export default trackWindowScroll(Card);
