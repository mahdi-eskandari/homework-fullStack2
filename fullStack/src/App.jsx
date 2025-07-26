import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import AllTasks from "./pages/AllTasks"
import CompletedTasks from "./pages/CompletedTasks"
import ImportantTasks from "./pages/ImportantTasks"
import UnCompletedTasks from "./pages/UnCompletedTasks"
import "./App.css"
import Auth from './pages/auth';
import { useSelector, useDispatch } from "react-redux"
import DirectoryPage from './pages/DirectoryPage';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Navigate to="/auth/all-tasks" />}></Route>

          <Route path="/auth/" element={<Auth />}>
            <Route path='all-tasks' element={<AllTasks />}></Route>
            <Route path='important-tasks' element={<ImportantTasks />}></Route>
            <Route path='completed-tasks' element={<CompletedTasks />}></Route>
            <Route path='uncompleted-tasks' element={<UnCompletedTasks />}></Route>
            <Route path="directory/:dirName" element={<DirectoryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;