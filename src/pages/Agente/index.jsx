import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../service/api";
import './agente.css';

function Agente(){
    const {id} = useParams()
    const [agente, setAgente] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function loadAgente(){
            await api.get(`/agents/${id}`, {
                params:{
                    language: "pt-BR"
                }
            })
            .then((response) =>{
                setAgente(response.data.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("Agente não encontrado");
            })
        }

        loadAgente()
    }, [])

    if(loading){
        return(
            <div>
                <h1>Carregando detalhes do Agente...</h1>
            </div>
        )
    }

    return(
        <div className="container">
  <div className="info-agente-individual">
    <div className="agente-info">
      <h1>{agente.displayName}</h1>
      <div className="agente-role">
        <h2>Classe: {agente.role.displayName}</h2>
        <img src={agente.role.displayIcon} alt={agente.role.displayName} className="role-icon" />
      </div>
      <p>{agente.description}</p>
    </div>
    <div className="agente-image">
      <img src={agente.bustPortrait} alt={agente.displayName} className="agente-main-image" />
    </div>
  </div>
</div>

    )
}

export default Agente;