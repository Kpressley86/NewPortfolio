import React, { useState, useEffect } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ThreeDModels from "./pages/3DModels/3DModels";

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState("Home");

    const handlePageChange = (event, page) => {
        event.preventDefault();

        setCurrentPage(page);
    };

    useEffect(() => {
        document.title = currentPage
    });

    const renderPage = () => {
        if (currentPage === "Home") {
            return <Home />;
        } else if (currentPage === "About") {
            return <About />;
        } else if (currentPage === "3DModels") {
            return <ThreeDModels />;
        } else {
            return <Contact />;
        }
    };

    return (
        <div>
            <NavTabs
                handlePageChange={handlePageChange}
            />
            {renderPage()}
        </div>
    );
}

export default Portfolio;