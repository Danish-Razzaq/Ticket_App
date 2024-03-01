import mongoose, { Schema } from "mongoose";

// Connect to MongoDB using the environment variable (assuming it's set)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Remove unnecessary assignment to global.Promise
// mongoose.Promise = global.Promise; // Not needed anymore

const ticketSchema = new Schema({
  title: String,
  description: String,
  category: String,
  progress: String,
  priority: Number,
  // You have two fields named "progress", remove one.
  status: String,
 
}, {
  timestamps: true,
});

// Use mongoose.model to create the model, avoiding potential errors
const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
