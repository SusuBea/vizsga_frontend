import useAdatContext from "../contexts/AdatContext";
import Kerdesek from "./Kerdesek";

export default function Kerdes(){

    const {tesztLista} = useAdatContext();

    return (

        <>
        <div>

        {tesztLista.map( (element, index) => {
            return <Kerdesek adat={element} key={index}/>
        })}

            
        
        </div>
        </>
    );

}