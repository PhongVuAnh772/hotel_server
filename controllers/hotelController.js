const db = require("../models/index");

const addHotel = (req, res) => {
  try {
    db.hotel
      .max("id")
      .then((maxIdHotel) => {
        const newIdHotel = maxIdHotel ? maxIdHotel + 1 : 1;
        db.locations
          .max("id")
          .then((maxIdLocationsHotel) => {
            const newIdLocation = maxIdLocationsHotel
              ? maxIdLocationsHotel + 1
              : 1;
            db.locations
              .create({
                id: newIdLocation,
                name: req.body.name,
                longitude: req.body.longitude,
                latitude: req.body.latitude,
              })
              .then((createdLocations) => {
                db.hotel
                  .create({
                    id: newIdHotel,
                    hotel_type: req.body.hotelType,
                    total_guest_rested: req.body.totalGuestRested,
                    total_bedrooms: req.body.totalBedRooms,
                    total_bed: req.body.totalBed,
                    bedroom_door_lock: req.body.bedroomDoorLock,
                    bathroom_type: req.body.bathroomType,
                    other_person_in_hotel: req.body.otherPerson,
                    hotel_has: [],
                    hotel_title: req.body.hotelTitle,
                    hotel_description_icon,
                    hotel_description: req.body.hotelDescription,
                    hotel_value_money: req.body.hotelValueMoney,
                    hotel_coupon: req.body.hotelCoupon,
                    hotel_is_booking: false,
                    location_id: maxIdLocationsHotel,
                  })
                  .then((createdHotel) => {
                    return res.status(200).json({
                      success: true,
                      message:
                        "Tạo dữ liệu bảng hotel và bảng liên quan khác thành công",
                      locationTable: createdLocations,
                      hotelTable: createdHotel,
                    });
                  })
                  .catch((err) => {
                    Promise.all([
                      db.locations.destroy({
                        where: {
                          id: maxIdLocationsHotel,
                        },
                      }),
                      db.hotel.destroy({
                        where: {
                          id: maxIdHotel,
                        },
                      }),
                    ])
                      .then(() => {
                        return res.status(500).json({
                          message:
                            "Lỗi khi tạo dữ liệu bảng hotel và bảng liên quan khác",
                          error: err.message,
                        });
                      })
                      .catch((deleteError) => {
                        return res.status(500).json({
                          message: "Lỗi khi xóa dữ liệu không hợp lệ",
                          error: deleteError.message,
                          otherError: err.message,
                        });
                      });
                  });
              })
              .catch((err) => {
                return res.status(200).json({
                  success: false,
                  err: err.message,
                  message: "Lỗi khi tạo bảng locations",
                });
              });
          })
          .catch((err) => {
            return res.status(200).json({
              success: false,
              err: err.message,
              message: "Lỗi khi lấy max id của bảng locations",
            });
          });
      })
      .catch((err) => {
        return res.status(200).json({
          success: false,
          err: err.message,
          message: "Lỗi khi lấy max id của bảng hotel",
        });
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      err: error.message,
      message: "Có lỗi server",
    });
  }
};

const getHotelByType = (req, res) => {
    
}

module.exports = {
  addHotel,
  getHotelByType
};
