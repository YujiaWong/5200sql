import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tickets } from "../data/tickets";
import axios from "axios";
import { createTickets, fetchAllTickets } from "./client";

const CreateTicket = () => {
  const [alltickets, setAllTickets] = useState([]);
  const getAllTickets = async () => {
    const ticketsData = await fetchAllTickets();
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

  const [formData, setFormData] = useState({
    title: "",
    status: "Open",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTicket = await createTickets(formData);
    if (newTicket) {
      alltickets.push({ id: tickets.length + 1, ...formData });
      navigate("/tickets");
    }
  };
  // const handleCreateTicket = async (formData) => {
  //   const newTicket = await axios.post(
  //     "http://127.0.0.1:4523/m1/5549835-5226827-default/create-ticket",
  //     formData
  //   );
  //   return newTicket;
  // };

  return (
    <div className="container mt-4">
      <h1>Create New Ticket</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group" style={{ marginTop: "1rem" }}>
          <label htmlFor="status">Status</label>
          <select
            className="form-control"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
        <div className="form-group" style={{ marginTop: "1rem" }}>
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "1rem" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTicket;
