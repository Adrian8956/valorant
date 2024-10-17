import { useEffect, useState } from "react"
import api from "../../service/api"
import { Link } from "react-router-dom";
import './home.css'
function Home(){

    const [agentes, setAgentes] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() =>{

        async function loadAgentes(){
            const response = await api.get("/agents", {
                params:{
                    language: "pt-BR",
                    isPlayableCharacter: true
                }
            })

            setAgentes(response.data.data);
            setLoading(false)

        }

        loadAgentes();
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
            <div className="lista-agentes">
                {agentes.map((agente) =>{

                    const backgroundImage = agente.backgroundImage 
                    return(
                        <Link to={`/agente/${agente.uuid}`}>
                         <article key={agente.uuid} className="card-agente" style={{ backgroundImage: `url(${backgroundImage})` }}>
                           <img src={agente.displayIcon} alt={agente.displayName} />
                           <h2>{agente.displayName}</h2>
                           <ul className="habilidade">
                             <li className="icon">
                                <img src={agente.abilities[0].displayIcon} alt={agente.abilities[0].displayName} />
                             </li>
                             <li className="icon">
                                <img src={agente.abilities[1].displayIcon} alt={agente.abilities[1].displayName} />
                             </li>
                             <li className="icon">
                                <img src={agente.abilities[2].displayIcon} alt={agente.abilities[2].displayName} />
                             </li>
                             <li className="icon">
                                <img src={agente.abilities[3].displayIcon} alt={agente.abilities[3].displayName} />
                             </li>
                          </ul>
                         </article>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Home