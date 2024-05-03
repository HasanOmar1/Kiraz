export type Clothes = {
  color?: string;
  greenImg?: string;
  blackImg?: string;
  blueImg?: string;
  name?: string;
  price?: number;
  size?: string;
  type?: string;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type BagItems = Omit<Clothes, "greenImg" | "blackImg" | "blueImg"> & {
  img?: string;
  id?: string;
};
