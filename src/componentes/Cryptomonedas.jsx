import { faImages } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

const App = () => {
  const [allCoins, setAllCoins] = useState([]); // Almacena todas las criptomonedas
  const [filteredCoins, setFilteredCoins] = useState([]); // Almacena las criptomonedas filtradas
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Estado para controlar la carga de datos
  const [loaded, setLoaded] = useState(false); // Estado para verificar si los datos ya se han cargado
  const [error, setError] = useState(false); // Estado para controlar si hay un error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        const data = await response.json();
        const coinsData = data.map((coin) => ({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          currentPrice: coin.current_price,
          priceChange24h: coin.price_change_24h,
        }));
        setAllCoins(coinsData);
        setFilteredCoins(coinsData); // Inicialmente, todas las criptomonedas se muestran
        setLoading(false); // Marcamos que la carga fue exitosa
        setLoaded(true); // Marcamos que los datos se han cargado
      } catch (error) {
        console.error("Error fetching data from CoinGecko:", error);
        setLoading(false); // Marcamos que la carga falló
        setError(true); // Marcamos que ha ocurrido un error
      }
    };

    // Solo intenta cargar los datos si aún no se han cargado
    if (!loaded) {
      fetchData();
    }
  }, [loaded]);

  useEffect(() => {
    // Filtrar las criptomonedas cuando el término de búsqueda cambia
    const filtered = allCoins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCoins(filtered);
  }, [searchTerm, allCoins]);

  return (
    <div>

      {loading ? (
        <p>Cargando datos...</p>
      ) : error ? (
        <div className="loading-container">
          <img src={'images/feching.jpg'} alt="Error al cargar" style={{ width: '100%', maxWidth: '860px', height: 'auto' }} />
          <h3>LOADING...</h3>
          <img src={'images/cryptos.webp'} alt="Error al cargar" style={{ width: '100%', maxWidth: '260px', height: 'auto' }} />
          <p></p>
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="SEARCH..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "300px",
              height: "60px",
              fontSize: "16px",
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              outline: "none",
              margin: "20px"
            }}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {filteredCoins.slice(0, 80).map((coin) => (
              <div key={coin.id} style={{ margin: 10, textAlign: "center" }}>
                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{ width: "200px", height: "200px", margin: "10px" }}
                />
                <p>{coin.name}</p>
                <p>${coin.currentPrice}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
