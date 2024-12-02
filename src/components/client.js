import axios from "axios";
import * as db from "../data/tickets";

export const fetchTargetTickets = async (ticketId) => {
  try {
    const ticketsData = db.tickets;
    if (Array.isArray(ticketsData)) {
      const targetTicket = ticketsData.find(
        (ticket) => ticket.id === parseInt(ticketId)
      );
      return targetTicket;
    } else if (ticketsData.id === ticketId) {
      return ticketsData;
    }
    return null;
  } catch (error) {
    console.error("Error fetching target ticket", error);
    return null;
  }
};

export const fetchAllTickets = async () => {
  try {
    const tickets = db.tickets;
    return tickets;
  } catch (error) {
    console.error("Error fetching tickets");
    return null;
  }
};
export const createTickets = async (ticket) => {
  try {
    const newTicket = await axios.post(
      "http://127.0.0.1:4523/m1/5549835-5226827-default/create-ticket",
      ticket
    );
    return newTicket.data;
  } catch (error) {
    console.error("Error fetching tickets");
    return null;
  }
};

export const updateTickets = async (ticketId, updatedTicket) => {
  try {
    const response = await axios.put(
      `http://127.0.0.1:4523/m1/5549835-5226827-default/edit-ticket/${ticketId}`,
      updatedTicket
    );
    return response.data;
  } catch (error) {
    console.error("Error updating ticket", error);
    return null;
  }
};
