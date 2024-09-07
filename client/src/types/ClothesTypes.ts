export type Clothes = {
  _id?: string;
  name?: string;
  color?: string;
  size?: string;
  price?: number;
  greenImg?: string;
  blackImg?: string;
  blueImg?: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type BagItems = Omit<Clothes, "greenImg" | "blackImg" | "blueImg"> & {
  img?: string;
  id?: string;
};
