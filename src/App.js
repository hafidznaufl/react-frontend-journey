import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/movies/Create";
import Popular from "./pages/movies/Popular";
import NowPlaying from "./pages/movies/NowPlaying";
import TopRated from "./pages/movies/TopRated";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
// import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/create" element={<Create />}></Route>
            <Route path="/movie/popular" element={<Popular />}></Route>
            <Route path="/movie/now" element={<NowPlaying />}></Route>
            <Route path="/movie/top" element={<TopRated />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>

      {/* <Hello /> */}
      {/* <Navbar />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
