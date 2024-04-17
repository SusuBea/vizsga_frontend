import useAdatContext from "../contexts/AdatContext";
import React, {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Kerdesek from "./Kerdesek";

export default function Kategoria(){
    const {kategoriaLista} = useAdatContext();
    const {tesztLista} = useAdatContext();
    const kategoriak = ["Természetvédelem", "Informatika", "Biológia"];

    return (

       <> 
       <select>

       {kategoriaLista.map( (element, index) => {   
        return (

                <option value={element.kategoriak} key={index}>{element.kategoriak}</option>
        );
    })}
       
     </select>
       </>



    
    );

}