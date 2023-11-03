import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";
import ExamList from "./pages/ExamList";
import SimulacrumList from "./pages/SimulacrumList";
import AuthLayout from "./components/Layout/AuthLayout";
import GuestLayout from "./components/Layout/GuestLayout";
import Login from "./pages/auth/Login";
import Blank from "./pages/Blank";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";
import RegisterIndex from "./pages/auth/Register";
import ExamTake from "pages/exam/ExamTake";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/blank" element={<Blank />}></Route>


        <Route path="/list-simulacrums" element={< SimulacrumList />}></Route>
        <Route path="/take-exam" element={< ExamTake />}></Route>
        <Route path="/exams" element={<ExamList />}></Route>

        <Route path="/table" element={<Table />}></Route>
        <Route path="/form" element={<Form />}></Route>

        <Route path="/profile" element={<Blank />}></Route>

        <Route path="/404" element={<NotFound />}></Route>
      </Route>

      <Route path="/auth" element={<GuestLayout />}>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/register" element={<RegisterIndex />}></Route>
      </Route>

      <Route path="/exam" element={< GuestLayout />}>
        <Route path="/exam/take" element={< ExamTake />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
