// src/App.tsx
import "./App.css"
import Layout from "./components/layout"

import LoginPage from "./components/login/login"
import Dashboard from "./components/dashboard/dashboard"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      {/* login route has NO layout */}
      <Route path="/" element={<LoginPage />} />

      {/* all routes below are wrapped in Layout */}
      <Route element={<Layout children={undefined} />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* add more routes here, all with sidebar */}
      </Route>
    </Routes>
  )
}

export default App
