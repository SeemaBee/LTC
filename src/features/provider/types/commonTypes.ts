export interface Requests {
  amount: number;
  location: string;
  distance: number;
  slotTime: string;
  slotDate: string;
}

export interface RegisterUser {
  name: string;
  gender?: string;
  dob?: null | Date;
  email: string;
  phone: string;
  password: string;
}

export type Step = 1 | 2 | 3 | 4;