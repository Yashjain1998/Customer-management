import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema(
  {
    Name: {
      type: String,
      default: "Unknown",
    },
    Email: {
      type: String,
      default: "example@example.com",
    },
    Mobile: {
      type: Number,
      default: 0,
    },
    City: {
      type: String,
      default: "Unknown City",
    },
    Bill: {
      type: Number,
      default: 0,
    },
    Date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timeseries: true,
  }
);
mongoose.models = {}
const Data = mongoose.model.Customer || mongoose.model("Customer", dataSchema);


export default Data;
