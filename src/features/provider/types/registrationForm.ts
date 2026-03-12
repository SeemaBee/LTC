import { Asset } from "react-native-image-picker";

export type BankAccountType = "chequing" | "savings";

export interface RegistrationFormData {
  serviceCategory: string;
  experience: string;
  languages: string[];
  price: number;
  identity_type_id: number;
  id_front: Asset | null;
  id_back: Asset | null;
  certificate: Asset | null;
  profilePhoto: Asset | null;
  accountHolderName: string;
  bankName: string;
  institutionNumber: string;
  transitNumber: string;
  accountNumber: string;
  accountType: BankAccountType;
}
