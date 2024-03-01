import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`https://ticket-app-steel.vercel.app/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketPage = async ({ params }) => {
  const EditMode = params.id === "new" ? false : true;
  let updateTicketData = {};

  if (EditMode) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  }else{
    updateTicketData = {
      _id: "new"
    }
  }

  return <TicketForm  ticket={updateTicketData} />;
};

export default TicketPage;
