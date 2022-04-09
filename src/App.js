import Row from "./Components/Row";
import GlobalStyle from "./GlobalStyle";
import requests from "./requests";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Row
        title="Trending Movies"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row title="NETFLIX Original" fetchUrl={requests.fetchNetflixOriginal} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documanteries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
