import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/molecules";
import { CovidNews, IndonesiaNews, ProgrammingNews, SavedNews, SearchNews } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndonesiaNews />} />
        <Route path="/covid" element={<CovidNews />} />
        <Route path="/programming" element={<ProgrammingNews />} />
        <Route path="/saved" element={<SavedNews />} />
        <Route path="/search/:searchValue" element={<SearchNews />} />
      </Routes>
      <Footer copyright="© 2023 Hacktiv8 . All Rights Reserved" text="MSIB Kampus Merdeka" />
    </BrowserRouter>
  );
};
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
