import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { NavbarBlog } from "../components/NavbarBlog.jsx";

export const Blog = () => {

    
    return (

        <div>
        <NavbarBlog />
        <div className="text-center mt-5 mb-5 pt-5">
            
            <p className="lead">
                <img src={rigoImageUrl} className="img-fluid mb-3" alt="Rigo Baby" />
                <h1>En construccion............</h1>
            </p>
            
        </div>
        </div>
    );
}; 