import { BagItems } from "./ClothesTypes";

export type CreatedUser = {
  name: string;
  email: string;
  bag: BagItems[];
  password: string;
  isAdmin: boolean;
};

export type LoginUser = Omit<CreatedUser, "name" | "bag" | "isAdmin">;

export type CurrentLoggedUser = Omit<CreatedUser, "password"> & {
  token: string;
  _id: string;
  isAdmin: boolean;
};
