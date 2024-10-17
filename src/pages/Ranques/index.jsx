import { useState, useEffect } from "react";
import api from '../../service/api';
import './ranques.css';  

function Ranques() {
    const [ranques, setRanques] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadRanques() {
            const response = await api.get("/competitivetiers", {
                params: {
                    language: "pt-BR"
                }
            });
            
            const filteredRanques = response.data.data[4].tiers.filter(
                ranque => ranque.tier > 2
            );

            setRanques(filteredRanques);
            setLoading(false);
        }

        loadRanques();
    }, []);

    if (loading) {
        return (
            <div>
                <h1>Carregando...</h1>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="list-ranques">
                {ranques.map((ranque) => {
                    return (
                        <article key={ranque.tier} className="card-ranque">
                            <img src={ranque.largeIcon} alt={ranque.tierName} />
                            <h2>{ranque.tierName}</h2>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Ranques;
