import { useEffect, useState } from "react";
import api from "../../service/api"
import "./armas.css"
import { Link } from "react-router-dom";
function Armas(){

    const [armas, setArmas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function loadArmas() {
            const response = await api.get("/weapons", {
                params:{
                    language: "pt-BR"
                }
            });

            setArmas(response.data.data);
            setLoading(false)
        }

        loadArmas();
    }, [])

    if(loading){
        return(
            <div>
                <h1>Carregando...</h1>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="list-armas">
                {armas.map((arma) =>{
                   return(
                     <Link to={`/skins/${arma.uuid}`}>
                        <article key={arma.uuid} className="card-arma">
                        <img src={arma.displayIcon} alt={arma.diplayName} />
                        <h2>{arma.displayName}</h2>
                        </article>
                     </Link>
                   )
                })}
            </div>
        </div>
    )
}

export default Armas;