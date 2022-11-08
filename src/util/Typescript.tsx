// define the type of RoomSelected
export interface RoomSelected {
  amountPerNight: number;
  amountWithTax: number;
  amountTotal: number;
  roomName: string;
}

// Define a type for the hotelInfo state
export interface HotelInfo {
  hotelName: string;
  hotelReviewScore: number;
  hotelReviewScoreWord: string;
  hotelReviewNr: number;
  hotelCity: string;
  hotelCountry: string;
  hotelAccommodationType: string;
  hotelUnitConfiguration: string;
  hotelCancellation: number;
  hotelImg: string;
}

export interface HotelState {
  value: {
    hotelSearch: {
      location: string;
      destId: number;
      destType: string;
      checkIn: string;
      checkOut: string;
      numOfGuests: number;
      hotelId: string;
      hotelInfo: HotelInfo;
      roomSelected: RoomSelected;
      payment: number;
      paymentId: string;
    };
  };
}

export type destinationFromType = {
  iata: string;
  airport: string;
};
