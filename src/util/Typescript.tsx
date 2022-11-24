// Hotel TS

export interface RoomSelected {
  amountPerNight: number;
  amountWithTax: number;
  amountTotal: number;
  roomName: string;
}

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

export interface CompanyType {
  companyName: string;
  logo: string;
  aircraft: string;
}

export type InfoType = {
  companyName: string;
  logo: string;
  aircraft: string;
  // flightNumber: string;
  // class: string;
  // duration: string;
  // departureCity: string;
  // departureAirport: string;
  // departureTime: string;
  // departureDate: string;
  // arrivalAirport: string;
  // arrivalTime: string;
  // arrivalDate: string;
  // arrivalCity: string;
  // baggage: string;
  // cabin: string;
  // meal: string;
};

export type flightInfoType = {
  name: string;
  // company: CompanyType;
  info: InfoType;
};

export interface FlightState {
  value: {
    flightSearch: {
      checkIn: string;
      checkOut: string;
      whereIata: string;
      toIata: string;
    };
    flightInfoDeparture: InfoType;
  };
}
