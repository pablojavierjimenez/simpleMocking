// Getting data from mocks
const hotelListData = require('../db.mocks/hotelListData.mock');

exports.getHotelsList = (req, res) => {
  try {
    res.json(hotelListData.hotels);
  } catch (error) {
    res.send(err);
  }
};

exports.getHotelById = (req, res) => {
  try {
    let singleHotel = {};
    for(let i=0; i < hotelListData.hotels.length; i++){
      if(hotelListData.hotels[i].id == req.params.id){
        singleHotel = hotelListData.hotels[i];
      }
    }
    res.json(singleHotel);
  } catch (err) {
    res.send(err);
  }
}
