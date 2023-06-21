import dbConnect from "../../../../db/connect.js";
import Place from "../../../../db/models/Places.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(place);
  }

  if (request.method === "PATCH") {
    const updatedPlace = request.body;
    await Place.findByIdAndUpdate(id, updatedPlace);
    response.status(20).json({ status: "Place successfully updated" });
  }
}
