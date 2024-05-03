import { BagItemsUpdated } from "./ClothesTypes";

export type CreatedUser = {
  name: string;
  email: string;
  bag: BagItemsUpdated[];
  password: string;
};

export type LoginUser = Omit<CreatedUser, "name" | "bag">;

export type CurrentLoggedUser = Omit<CreatedUser, "password"> & {
  token: string;
  _id: string;
};
