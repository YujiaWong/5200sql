import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Tickets from "./components/Tickets";
import TicketDetails from "./components/TicketDetails";
import CreateTicket from "./components/CreateTicket";
import EditTicket from "./components/EditTicket";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/ticket/:id" element={<TicketDetails />} />
      <Route path="/create-ticket" element={<CreateTicket />} />
      <Route path="/edit-ticket/:id" element={<EditTicket />} />
    </Routes>
  </Router>
);

export default App;
