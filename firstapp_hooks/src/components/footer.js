import React, { Component } from "react";

class Footer extends Component {
 
    render(props) {
         const  {month,year} = this.props //by destructuring .//
        return (
            <footer style={{ marginTop: "7px", textAlign: "center", fontSize: "17px", backgroundColor: "green" }}>
                {/* &copy;new_learner {this.props.month} {this.props.year}  */}
               
                {/* //by destructuring .// */}
                &copy; new_learner {month} {year} 

            </footer>

        )
    }
}
export default Footer
