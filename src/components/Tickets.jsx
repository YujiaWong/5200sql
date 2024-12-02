import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as TicketClient from "./client";

//import { tickets } from "../data/tickets";

const Tickets = () => {
  const [alltickets, setAllTickets] = useState([]);
  const getAllTickets = async () => {
    const ticketsData = await TicketClient.fetchAllTickets();
    if (Array.isArray(ticketsData)) {
      setAllTickets(ticketsData);
    } else {
      const arr = [];
      arr.push(ticketsData);
      setAllTickets(arr);
    }
  };

  useEffect(() => {
    getAllTickets();
  }, []);
  return (
    <div className="container mt-4">
      <h1>Tickets</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {alltickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.title}</td>
              <td>{ticket.status}</td>
              <td>
                <Link
                  to={`/ticket/${ticket.id}`}
                  className="btn btn-primary btn-sm"
                  style={{ marginRight: "1rem" }}
                >
                  View
                </Link>
                <Link
                  to={`/edit-ticket/${ticket.id}`}
                  className="btn btn-warning btn-sm"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tickets;
