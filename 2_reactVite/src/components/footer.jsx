import React from 'react'

const footer = (props) => {
    // destructuring .
    const { month, year } = props
    return (
        <footer style={{ height: "30px", backgroundColor: "green", display: "flex", justifyContent: "center", alignItems: "center" }}  >
            {/* <div> &copy; new_learner {props.month} {props.year} . </div> */}
            {/* // destructuring . */}

            <div> &copy; new_learner {month} {year} . </div>
        </footer>
    )
}

export default footer
