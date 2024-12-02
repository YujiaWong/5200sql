import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//import { tickets } from "../data/tickets";
import { fetchAllTickets, fetchTargetTickets, updateTickets } from "./client";

const EditTicket = () => {
  const [alltickets, setAllTickets] = useState([]);
  const getAllTickets = async () => {
    const alltickets = await fetchAllTickets();
    setAllTickets(alltickets);
    return alltickets;
  };
  useEffect(() => {
    getAllTickets();
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    status: "",
    description: "",
  });
  useEffect(() => {
    const getTicket = async () => {
      const fetchedTicket = await fetchTargetTickets(id);
      if (fetchedTicket) {
        setTicket(fetchedTicket);
        setFormData(fetchedTicket);
      } else {
        navigate("/tickets");
      }
    };
    getTicket();
  }, [id, navigate]);

  if (!ticket) return <p>Ticket not found!</p>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTicket = await updateTickets(id, formData);
    if (updatedTicket) {
      navigate("/tickets");
    } else {
      alert("Failed to update the ticket!");
    }
    const index = alltickets.findIndex((t) => t.id === ticket.id);
    alltickets[index] = formData;
  };

  return (
    <div className="container mt-4">
      <h1>Edit Ticket</h1>
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
        <div className="form-group">
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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTicket;
