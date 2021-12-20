import Header from "./components/header"
import Films from "./pages/Films"
import Session from "./pages/Session"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/reset.css'
import './css/style.css'

function App(){
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    
                    <Route path="/" element={<Films/>}></Route>
                    <Route path="/filme/:idFilm" element={<Session />}></Route>
                    
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;