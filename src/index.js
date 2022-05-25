import React from 'react'
import { createRoot } from 'react-dom/client';
import "./style.css"
import Header from "./componente/Header"
import MainContent from "./componente/MainContent"
import Footer from "./componente/Footer"

function App(){
    return (
        <>
        
       <Header></Header>   
        <MainContent />
        <Footer />
        </>
    )
}
const root = createRoot(document.getElementById('root')); 
root.render(<App  />);
