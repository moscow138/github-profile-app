import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Viewrepo.css"



const Viewrepo = () => {

    const {repoId} = useParams();
   
    return(
       
        <div>
         <Navbar></Navbar>
        <section className="viewrepo">
            <h2> i am id {repoId}</h2>
            <Link to='/'>Back to all repository</Link>
            </section>
            <Footer></Footer>
        </div>
       
    )
}

export default Viewrepo