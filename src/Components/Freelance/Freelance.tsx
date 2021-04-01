import React from "react";
import FaqItem from "./FaqItem/FaqItem";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Freelance.scss";

const Freelance: React.FC<any> = () => {
    return (
        <div className="Freelance page">
            <Header />

            <div className="content"></div>

            <div className="wide-content content-wrap">
                <FaqItem
                    question="What technologies do you use?"
                    answer="I have experience in a lot of things ranging from React and TypeScript to Python and Java. However, I've learned through my experience that it doesn't really matter. What tech stack we choose is entirely dependent on your project and needs."
                />

                <FaqItem
                    question="How much do you charge?"
                    answer="I do not charge hourly; I charge by the project. I cannot give you an honest estimate to a solution without understanding your problem. The price is drastically effected by what your needs are. A business user looking to automate their data entry into Excel might be $100, while a complex, enterprise eCommerce mobile-ready website might be several thousand. Let's talk about what your specific needs are. Meetings are free!"
                    readMoreTitle="But what about IT support and 1099 indepent, enterprise contractors?"
                    readMoreBody="I do not offer IT support as a service. If you have problems or questions with a product I provided to you, that's free of charge. If you're a recruiter or other person who is looking for a temporary hourly developer for their product team, please reach out to me to talk about your project and negotiate a rate."
                />
            </div>

            <Footer />
        </div>
    );
};

export default Freelance;
