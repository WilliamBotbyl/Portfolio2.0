import React, { useState, useEffect, createContext } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Home, NavBar, Footer, Loading, About } from "./utils/exports";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import appStyles from "./styles/app.module.scss";
import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
export const AppContext = createContext();

function App() {
  // const
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <div className="App">
      <ChakraProvider>
        {!loading ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <Loading />
        )}
      </ChakraProvider>
    </div>
  );
}

export default App;
