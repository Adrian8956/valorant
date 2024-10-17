import { useEffect, useState } from "react";
import api from "../../service/api";
import "./mapa.css"

function Mapas(){
    const [mapas, setMapas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadMapas(){
            const response = await api.get("/maps", {
                params:{
                    language: "pt-BR"
                }
            });

            setMapas(response.data.data);
            setLoading(false);
        }

        loadMapas()
    }, []);

    if(loading){
       return(
        <div>
            <h1>Carregando...</h1>
        </div>
       )
    }

    return (
        <div className="container">
            <div className="list-mapa">
                {mapas.map((mapa) => {
                    return ( 
                        <article key={mapa.uuid} className="card-mapa">
                            <img src={mapa.splash} alt={mapa.displayName} className="mapa-img"/> 
                            <h2>{mapa.displayName}</h2> 
                            <h3>{mapa.coordinates}</h3>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Mapas;