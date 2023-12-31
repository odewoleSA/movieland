import React from "react";
import "./App.css";
import MoviePage from "./components/MoviePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/movieland" exact element={<MoviePage />} />
        </Routes>
      </Router>
    </>
  );

};

export default App;
