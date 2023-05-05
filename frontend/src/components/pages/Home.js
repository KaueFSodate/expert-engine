import api from "../../utils/api";
import {useState, useEffect } from "react";
import { Link } from "react-router-dom";

 
  
  function Home() {
    const [vagas, setVagas] = useState([])

    // Pegar os produtos da API
    useEffect(() => {
        api.get('/vagas/').then((response) => {
          setVagas(response.data)
          console.log(vagas)
        })
    }, [])
    return (
      <div>
        <h1>Vagas disponiveis</h1>
        <p>Veja os detalhes de cada uma</p>

        {vagas.length > 0 &&
                vagas.map((vaga) => (
                    <div key={vaga.id}>
                        <h3>{vaga.nome}</h3>
                        <p>
                            Descrição: {vaga.descricao}
                        </p>
                        <Link to={`/vagas/${vaga.id}`}>Mais detalhes</Link>
                    </div>         
        ))}
        {vagas.length === 0 && (
                <p>Não há vagas cadastradas ou disponíveis!</p>
        )}
      </div>


    )
  }
  
  export default Home