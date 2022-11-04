import axios from "axios";

export const fetchHotelList = async (
  checkIn: string,
  checkOut: string,
  destId: number,
  destType: string,
  numOfGuests: number
): Promise<any> => {
  const response = await axios
    .get(
      `https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date=${checkOut}&units=metric&dest_id=${destId}&dest_type=${destType}&locale=fr&adults_number=${numOfGuests}&order_by=class_descending&filter_by_currency=EUR&checkin_date=${checkIn}&room_number=1&page_number=0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&include_adjacency=true`,
      {
        headers: {
          "X-RapidAPI-Key":
            "aec368893amsh7b6d0c9bd38cc53p182f12jsn1ac8d7d9a368",
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
      }
    )
    .then((res) => res.data);
  console.log(response);

  return response;
};

export const fetchHotelPhotos = async (hotelId: string): Promise<any> => {
  const response = await axios
    .get(
      `https://booking-com.p.rapidapi.com/v1/hotels/photos?locale=fr&hotel_id=${hotelId}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "aec368893amsh7b6d0c9bd38cc53p182f12jsn1ac8d7d9a368",
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
      }
    )
    .then((res) => res.data);

  return response;
};

export const fetchHotelHighlight = async (hotelId: string): Promise<any> => {
  const response = await axios
    .get(
      `https://booking-com.p.rapidapi.com/v1/hotels/description?hotel_id=${hotelId}&locale=fr`,
      {
        headers: {
          "X-RapidAPI-Key":
            "aec368893amsh7b6d0c9bd38cc53p182f12jsn1ac8d7d9a368",
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
      }
    )
    .then((res) => res.data);

  return response;
};

export const fetchHotelFacilities = async (hotelId: string): Promise<any> => {
  const response = await axios
    .get(
      `https://booking-com.p.rapidapi.com/v1/hotels/facilities?locale=fr&hotel_id=${hotelId}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "aec368893amsh7b6d0c9bd38cc53p182f12jsn1ac8d7d9a368",
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
      }
    )
    .then((res) => res.data);

  return response;
};

export const fetchHotelRoomsAvailable = async (
  checkIn: string,
  checkOut: string,
  numOfGuests: number,
  hotelId: string
): Promise<any> => {
  const response = await axios
    .get(
      `https://booking-com.p.rapidapi.com/v1/hotels/room-list?checkin_date=${checkIn}&units=metric&checkout_date=${checkOut}&currency=EUR&locale=fr&adults_number_by_rooms=${numOfGuests}&hotel_id=${hotelId}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "aec368893amsh7b6d0c9bd38cc53p182f12jsn1ac8d7d9a368",
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
      }
    )
    .then((res) => res.data);

  return response;
};
