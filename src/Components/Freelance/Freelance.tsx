import React, { useState } from "react";
import FaqItem from "./FaqItem/FaqItem";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ServiceItem from "./ServiceItem/ServiceItem";
import "./Freelance.scss";

const Freelance: React.FC<any> = () => {
    return (
        <div className="Freelance page">
            <Header />

            <div className="content">
                <p>
                    It's not my job to impress you with technical jargon; I
                    firmly believe that the most value is added when things make
                    the most sense to you.
                </p>
            </div>

            <div className="services content">
                <ServiceItem
                    title="Web Development"
                    body="Websites, web apps"
                    icon="fas fa-globe"
                />
                <ServiceItem
                    title="Automation"
                    body="Data entry, business workflows"
                    icon="fas fa-cogs"
                />
                <ServiceItem
                    title="Discord Bots"
                    body="Chat bots, levels, role management"
                    icon="fab fa-discord"
                />
        
            </div>

            <div className="faq-banner">
                {/* <i className="fas fa-comment-dots"></i> */}
                {/* <span>Common Questions</span> */}
            </div>

            <div className="wide-content content-wrap">
                <FaqItem
                    question="What technologies do you use?"
                    answer="I have experience in a lot of things ranging from React and TypeScript to Python and Java. However, I've learned through my experience that it doesn't really matter. What tech stack we choose is entirely dependent on your project and needs."
                />

                <FaqItem
                    question="How much do you charge?"
                    answer="I do not charge hourly; I charge by the project. I cannot give you an honest estimate to a solution without understanding your problem. The price is drastically effected by what your needs are. A business user looking to automate their data entry into Excel might be $100, while a complex, enterprise eCommerce mobile-ready website might be several thousand. Let's talk about what your specific needs are. Meetings are free!"
                    readMoreTitle="But what about IT support and independent contractors?"
                    readMoreBody="I do not offer IT support as a service. If you have problems or questions with a product I provided to you, that's free of charge. If you're a recruiter or other person who is looking for a temporary, form-1099 hourly developer for their product team, please reach out to me to talk about your project and negotiate a rate."
                />

                <FaqItem
                    question="Do you do app development?"
                    answer="No."
                    readMoreTitle="Why?"
                    readMoreBody="Mobile app owners are usually very passionate, which is not a bad thing, but I'm not going to be able to match that passion. That, and the rules and regulations for both Android and iPhone markets is not an overhead I'm willing to take on at this time. "
                />
            </div>

            <Footer />
        </div>
    );
};

export default Freelance;
