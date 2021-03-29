import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import InfoCard from "../InfoCard/InfoCard";
import MeJPEG from "../../res/me.jpeg";
import "./About.scss";

const About: React.FC<any> = () => {
    return (
        <div className="About">
            <Header />

            <div className="content bio">
                <img src={MeJPEG} className="me-jpeg" alt="" />
            </div>

            <div className="content skills">
                {/* <InfoCard
                    title="Full-Time Professional"
                    body="I'm a full-time, professional web developer working on large, enterprise applications."
                    icon="fas fa-briefcase"
                /> */}

                <InfoCard
                    title="Microsoft Certified Azure Developer"
                    body="Certified knowledge and technical ability in software development on Microsoft Azure. Certification number H542-9229."
                    icon="fas fa-check"
                    downloadDestination="./msazuredevassociate.pdf"
                />

                <InfoCard
                    title="ITIL Foundation in IT Service Manangement"
                    body=""
                    icon="fa fa-check"
                    downloadDestination="./itil4foundation.pdf"
                />
                <InfoCard
                    title="Navy Achievement Medal"
                    body="For dedicated service with outstanding product and initiative."
                    icon="fas fa-medal"
                />

                <InfoCard
                    title="Certificate, Software Engineering"
                    body="A trade/professional certificate in Software Engineering for successfully graduating General Assembly, Washington, D.C."
                    icon="fas fa-graduation-cap"
                />
            </div>

            <Footer />
        </div>
    );
};

export default About;
