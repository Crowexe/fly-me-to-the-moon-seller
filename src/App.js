import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import Boletos from "./pages/Shop";
import { About } from "./pages/About-us";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} /> 

                  <Route path="/" element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }
                  />
                  
                  <Route path="/boletos" element={
                      <ProtectedRoute>
                        <Boletos />
                      </ProtectedRoute>
                    }
                  />

                  <Route path="/about" element={
                      <ProtectedRoute>
                        <About />
                      </ProtectedRoute>
                    }
                  />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;