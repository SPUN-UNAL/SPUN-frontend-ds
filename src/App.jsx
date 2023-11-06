import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Blank from "pages/Blank";
import AuthLayout from "./components/Layout/AuthLayout";
import Table from "./pages/Table";
import ExamList from "./pages/ExamList";
import SimulacrumList from "./pages/SimulacrumList";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";
import GuestLayout from "./components/Layout/GuestLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import ExamTake from "pages/exam/ExamTake";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/404" element={<NotFound />}></Route>

          <Route path="/auth" element={<GuestLayout />}>
            <Route path="/auth/login" element={<LoginPage />}></Route>
            <Route path="/auth/register" element={<RegisterPage />}></Route>
          </Route>

          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/exam" element={<GuestLayout />}>
              <Route path="/exam/take/:id" element={<ExamTake />}></Route>
            </Route>
            <Route path="/dashboard" element={<AuthLayout />}>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/dashboard/blank" element={<Blank />}></Route>
              <Route
                path="/dashboard/list-simulacrums"
                element={<SimulacrumList />}
              ></Route>
              <Route path="/dashboard/exams" element={<ExamList />}></Route>

              <Route path="/dashboard/table" element={<Table />}></Route>
              <Route path="/dashboard/form" element={<Form />}></Route>

              <Route path="/dashboard/profile" element={<Blank />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
