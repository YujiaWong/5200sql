import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
//import { tickets } from "../data/tickets";
import * as TicketClient from "./client";

const TicketDetails = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const getTargetTicket = async () => {
    const ticket = await TicketClient.fetchTargetTickets(id);
    setTicket(ticket);
  };
  useEffect(() => {
    getTargetTicket();
  }, [id]);
  //const ticket = tickets.find((t) => t.id === parseInt(id));

  if (!ticket) return <p>Ticket not found!</p>;

  return (
    <div className="container mt-4">
      <h1>Ticket Details</h1>
      <p>
        <strong>Title:</strong> {ticket.title}
      </p>
      <p>
        <strong>Status:</strong> {ticket.status}
      </p>
      <p>
        <strong>Description:</strong> {ticket.description}
      </p>
      <Link to="/tickets" className="btn btn-secondary">
        Back
      </Link>
    </div>
  );
};

export default TicketDetails;
