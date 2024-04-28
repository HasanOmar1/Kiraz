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
};

export type BagItemsUpdated = Omit<
  Clothes,
  "greenImg" | "blackImg" | "blueImg"
> & { img?: string };

export type BagItems = {
  clothes: Clothes;
  user: string;
  _id: string;
};
