"use client";
import { useRouter } from "next/navigation";
import react, { useState } from "react";

const TicketForm = ({ ticket }) => {
  const EditMode = ticket._id === "new" ? false : true;

  const router = useRouter();
  const startingTicketData = {
    title: "",
    description: "",
    priority: "0",
    progress: "0",
    status: "Not started",
    category: "Hardware Problem",
  };

  if (EditMode) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EditMode) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
      router.refresh();
      router.push("/");
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form
        className=" flex flex-col gap-2 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EditMode ? "Edit Ticket" : "Create Your Ticket"}</h3>
        <label htmlFor="">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label htmlFor="">Description</label>
        <textarea
          rows={5}
          className="w-full"
          placeholder="Enter Description"
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
        />
        <label> Category</label>
        <select
          name="category"
          onChange={handleChange}
          value={formData.category}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Network Problem">Network Problem</option>
        </select>

        <label> Priority</label>
        <div>
          <input
            type="radio"
            name="priority"
            id="priority-1"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label> 1</label>
          <input
            type="radio"
            name="priority"
            id="priority-2"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label> 2</label>
          <input
            type="radio"
            name="priority"
            id="priority-3"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label> 3</label>

          <input
            type="radio"
            name="priority"
            id="priority-4"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label> 4</label>

          <input
            type="radio"
            name="priority"
            id="priority-5"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label> 5</label>
        </div>
        <label> Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value=" started"> Started</option>
          <option value="done">Done</option>
        </select>
        <input
          type="submit"
          value={EditMode ? "Update Ticket" : "Create Ticket"}
          className="btn"
        />
      </form>
    </div>
  );
};

export default TicketForm;
