import Hotel from "../model/hotel.js";

export const getRoom = async (request, response) => {
  try {
    const rooms = await Hotel.find({});
    response.status(200).json(rooms);
  } catch (e) {
    response.status(500).json(e.message);
  }
};

export const postRoom = async (request, response) => {
  try {
    const newRoom = new Hotel(request.body);
    await newRoom.save();
    return response.status(200).json("room saved successfully");
  } catch (e) {
    response.status(500).json(e.message);
  }
};

export const deleteRoom = async (request, response) => {
  const { id } = request.params;

  try {
    await Hotel.findOneAndDelete({ _id: id });
    response.status(200).json("room deleted successfully");
  } catch (e) {
    response.status(500).json(e.message);
  }
};

export const editRoom = async (request, response) => {
  const { id } = request.params;
  try {
    let data = await Hotel.findOneAndUpdate({ _id: id }, request.body, {
      new: true,
    });
    response.status(200).json("room updated successfully");
  } catch (e) {
    response.status(500).json(e.message);
  }
};
