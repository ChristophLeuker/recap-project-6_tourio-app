import dbConnect from "../../../db/connect.js";
import Place from "../../../db/models/Places.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const place = await Place.find();

    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(place);
  }
}
