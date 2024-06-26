import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Error.css"

const ErrorBound = () => {

    return(
        <div>
        <Navbar></Navbar>
        <section className="error-page">
            <h2>Error!</h2>

            <Link to='/'>Back to Homepage</Link>

        </section>
        <Footer></Footer>
        </div>
    )
}
export default ErrorBound