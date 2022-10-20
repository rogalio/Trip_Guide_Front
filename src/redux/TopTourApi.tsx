import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IHotelsByCityQuery {
  checkIn: string;
  checkOut: string;
  destId: number;
  destType: string;
  numOfGuests: number;
}

type HotelId = {
  hotelId: string;
};

interface IHotelRooms {
  hotelId: string;
  checkIn: string;
  checkOut: string;
  numOfGuests: number;
}

// Define a service using a base URL and expected endpoints
export const destinationApi = createApi({
  reducerPath: "destinationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://booking-com.p.rapidapi.com/v1/",
  }),
  endpoints: (builder) => ({
    getHotelByCity: builder.query<any, IHotelsByCityQuery>({
      query: ({ checkIn, checkOut, destId, destType, numOfGuests }) => ({
        url: `hotels/search?checkout_date=${checkOut}&units=metric&dest_id=${destId}&dest_type=${destType}&locale=fr&adults_number=${numOfGuests}&order_by=class_descending&filter_by_currency=EUR&checkin_date=${checkIn}&room_number=1&page_number=0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&include_adjacency=true`,
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fab384f000mshbf3bf66224e58e8p1e170djsn81db59e88085",
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
      }),
    }),
    getHotelPhotos: builder.query<any, HotelId>({
      query: ({ hotelId }) => ({
        url: `hotels/photos?locale=fr&hotel_id=${hotelId}`,
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fab384f000mshbf3bf66224e58e8p1e170djsn81db59e88085",
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
      }),
    }),
    getHotelFacilities: builder.query<any, HotelId>({
      query: ({ hotelId }) => ({
        url: `hotels/facilities?locale=fr&hotel_id=${hotelId}`,
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fab384f000mshbf3bf66224e58e8p1e170djsn81db59e88085",
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
      }),
    }),
    getHotelRooms: builder.query<any, IHotelRooms>({
      query: ({ hotelId, checkIn, checkOut, numOfGuests }) => ({
        url: `hotels/room-list?checkin_date=${checkIn}&units=metric&checkout_date=${checkOut}&currency=EUR&locale=fr&adults_number_by_rooms=${numOfGuests}&hotel_id=${hotelId}`,
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fab384f000mshbf3bf66224e58e8p1e170djsn81db59e88085",
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetHotelByCityQuery,
  useGetHotelPhotosQuery,
  useGetHotelFacilitiesQuery,
  useGetHotelRoomsQuery,
} = destinationApi;
