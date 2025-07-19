import React from "react";
const Footer = (props) => {
    // destructuring
    const { month, year } = props
    return (
        <div style={{ fontSize: "17px", textAlign: "center", backgroundColor: "green", height: "45px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* &copy; new_learner {props.month} {props.year} */}
            {/* // destructuring */}
            &copy; new_learner {month} {year}
        </div>
    )

}

export default Footer