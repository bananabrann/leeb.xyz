import React from "react";
import FaqItem from "./FaqItem/FaqItem";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Freelance.scss";

const Freelance: React.FC<any> = () => {
    return (
        <div className="Freelance">
            <Header />

            <div className="content"></div>

            <div className="wide-content">
                <FaqItem
                    question="What technologies do you use?"
                    answer="I have experience in everything from React and TypeScript to C# and Java. However, it doesn't matter. I've learned through my experience is that it doesn't really matter what I already know --what tech stack we choose to use entirely depends on your project and needs."
                />

                <FaqItem
                    question="How much do you charge?"
                    answer="I do not charge hourly; I charge by the project. I cannot give you an honest estimate to a solution without understanding your problem. The price is drastically effected by what your needs are. A business user looking to automate their Excel worksheets might be $100, while a complex, enterprise eCommerce website might be several thousand. Let's talk about what your specific needs are."
                    readMoreTitle="But what about IT support and 1099 indepent, enterprise contractors?"
                    readMoreBody="I do not offer IT support as a service. If you have problems or questions with a product I provided to you, that's free of charge. If you're a recruiter or other person who is looking for a temporary hourly developer for their product team, please reach out for me for rate negotiation."
                />
            </div>

            <Footer />
        </div>
    );
};

export default Freelance;
