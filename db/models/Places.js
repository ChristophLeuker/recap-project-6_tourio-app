import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
});

const Place = mongoose.models.Place || model("Place", productSchema);

export default Place;
