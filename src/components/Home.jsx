import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { tickets } from "../data/tickets";
import * as TicketClient from "./client";

const Home = () => {
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

  const openTickets = alltickets.filter((t) => t.status === "Open").length;
  const resolvedTickets = alltickets.filter(
    (t) => t.status === "Resolved"
  ).length;
  const inProgressTickets = alltickets.filter(
    (t) => t.status === "In Progress"
  ).length;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: "10vw",
        paddingRight: "10vw",
        paddingTop: "3vh",
      }}
    >
      <div
        className="jumbotron mt-4"
        style={{
          backgroundColor: "rgb(25,25,25,0.05)",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          padding: "3rem",
        }}
      >
        <div
          className="display-4"
          style={{ fontSize: "3rem", paddingBottom: "1rem" }}
        >
          Welcome to SupportGen!
        </div>
        <p className="lead" style={{ fontSize: "1.5rem" }}>
          Your all-in-one platform for managing IT support tickets efficiently.
        </p>
        <p className="lead">Start managing tickets with ease:</p>
        <div>
          <Link
            className="btn btn-primary btn-lg"
            to="/tickets"
            style={{ marginRight: "1vw" }}
          >
            View Tickets
          </Link>
          <Link className="btn btn-success btn-lg" to="/create-ticket">
            Create New Ticket
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "5vh" }}>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Open Tickets</div>
              <div className="card-body">
                <h5 className="card-title">{openTickets}</h5>
                <p className="card-text">
                  Tickets currently awaiting resolution.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-success mb-3">
              <div className="card-header">Resolved Tickets</div>
              <div className="card-body">
                <h5 className="card-title">{resolvedTickets}</h5>
                <p className="card-text">Tickets successfully resolved.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-warning mb-3">
              <div className="card-header">In Progress</div>
              <div className="card-body">
                <h5 className="card-title">{inProgressTickets}</h5>
                <p className="card-text">Tickets currently being worked on.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Tickets  */}
      <div className="mt-4">
        <h2>Recent Tickets</h2>
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
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
