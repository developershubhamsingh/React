import React from "react";
import Header from "./header";
import Footer from "./footer";

const App = () => {
    return (
        <div>
            <Header />
            <h3>content section !</h3>
            <Footer month="july" year = "2025"/>
        </div>
    );
};
export default App