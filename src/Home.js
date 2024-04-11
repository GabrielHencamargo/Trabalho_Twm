import React,{useEffect, useState} from "react";
import './App.css';




function home() {
    
    return(
        <div className = "Homediv">

            <h1 className="HomepageHeader">Gabriel Seguros, Confia na gente, vou mentir para que?</h1>
            <nav className="navhome" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item custom-bread"><a href="Home">Inicio</a></li>
                    <li class="breadcrumb-item custom-bread"><a href="acionar_seguro">Acionar Seguro</a></li>
                </ol>
            </nav>
            <nav className="loginhome"><a href="Login">Login</a></nav>
            <div className = "main_frame">
 
            </div>  
        </div>
    )
}
export default home;