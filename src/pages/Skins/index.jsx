import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../service/api";
import './skins.css';  // Vamos adicionar o arquivo de estilos separado

function Skins() {
  const { id } = useParams();  // ID da arma que virá da URL
  const [arma, setArma] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArma() {
      try {
        const response = await api.get(`/weapons/${id}`, {
          params: {
            language: "pt-BR"
          }
        });
        setArma(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar arma:", error);
      }
    }

    loadArma();
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <h1>Carregando skins da arma...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{arma.displayName} - Skins</h1>
      <div className="list-skins">
        {arma.skins.map((skin) => (
          <div key={skin.uuid} className="card-skin">
            <img src={skin.displayIcon} alt={skin.displayName} />
            <h2>{skin.displayName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skins;
