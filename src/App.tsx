import "./App.scss";

import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Part1 from "./part1/Part1";
import Part2 from "./part2/Part2";
import Part3 from "./part3/Part3";
import NotFound from "./NotFound";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/part1" element={<Part1 />} />
                <Route path="/part2" element={<Part2 />} />
                <Route path="/part3" element={<Part3 />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
