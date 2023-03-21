import './App.css';
import {useEffect, useState} from "react";

function App() {
  // state (etat, données)
  const [backendData, setBackendData] = useState ([])

  // comportements
  useEffect(() => {
    fetch("/bd_Boss/movies").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setBackendData(backendData);
      return;
    }
    const filteredValues = backendData.filter(
      (movie) =>
        movie.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setBackendData(filteredValues);
    
  }

  // affichage (render)
  return (
    <div>
      <h1>Listes des films</h1>
      <div>
        Recherhe: <input name="query" type="text" onChange={handleSearch}/>
      </div>
      <ul>
        {backendData.map((movie) => (
          <div key={movie._id}> {movie.title} </div>
        ))}
      </ul>
      <div><button>Ajout de films</button> <button>Suppression de films</button> <button>Gestion des commandes</button> <button>Gestion des paiements</button></div>
    </div> 
  );
}

export default App;
