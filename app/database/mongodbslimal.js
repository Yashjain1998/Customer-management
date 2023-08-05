import mongoose, { Schema } from "mongoose";

const data = new Schema(
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

const Topic = mongoose.model.Topic || mongoose.model("Topic", data);

export default Topic;
