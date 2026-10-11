export type Pet = {
  name: string;
  species: string;
  weight: number | null;
  specialNote: string;
};

export type Owner = {
  name: string;
  contact: string;
};

export const PAYMENT_METHODS = {
  cash: "현금결제",
  card: "신용카드",
  kakaoPay: "카카오페이",
  naverPay: "네이버페이",
} as const;

export type PaymentMethod = keyof typeof PAYMENT_METHODS;

export type BookingData = {
  agreedToTerms: boolean;
  owner: Owner;
  pet: Pet;
  checkInDate: string;
  checkOutDate: string;
  hasAdditionalPets: boolean | null;
  additionalPets: Pet[];
  needsPickup: boolean | null;
  pickupAddress: string;
  pickupTime: string;
  paymentMethod: PaymentMethod | null;
  specialRequests: string;
};

export const INITIAL_BOOKING_DATA: BookingData = {
  agreedToTerms: false,
  owner: {
    name: "",
    contact: "",
  },
  pet: {
    name: "",
    species: "",
    weight: null,
    specialNote: "",
  },
  checkInDate: "",
  checkOutDate: "",
  hasAdditionalPets: null,
  additionalPets: [],
  needsPickup: null,
  pickupAddress: "",
  pickupTime: "",
  paymentMethod: null,
  specialRequests: "",
};
