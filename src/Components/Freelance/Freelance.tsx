import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Freelance.scss";

const Freelance: React.FC<any> = () => {
    return (
        <div className="Freelance">
            <Header />

            <div className="content">
            </div>

            <div className="services-row">
                <div className="service-card">
                    <div className="left">
                        <i className="fas fa-globe fa-3x"></i>
                    </div>

                    <div className="right">
                        <div className="upper">
                            <p>Web Development</p>
                        </div>

                        <div className="lower">
                            <p>Websites, web applications.</p>
                        </div>
                    </div>
                </div>

                <div className="service-card">
                    <div className="left">
                        <i className="fas fa-cogs fa-3x"></i>
                    </div>

                    <div className="right">
                        <div className="upper">
                            <p>Automation</p>
                        </div>

                        <div className="lower">
                            <p>
                                Automating Excel workflows, database migrations,
                                and more.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="service-card">
                    <div className="left">
                        <i className="fas fa-id-badge fa-3x"></i>
                    </div>

                    <div className="right">
                        <div className="upper">
                            <p>Enterprise Applications</p>
                        </div>

                        <div className="lower">
                            <p>
                                Large, enterprise projects and 1099 individual
                                contracting.
                            </p>
                        </div>
                    </div>

                    {/* <i class="fas fa-globe"></i> */}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Freelance;
