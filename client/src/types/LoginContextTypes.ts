export type CreatedUser = {
  name: string;
  email: string;
  password: string;
};

export type LoginUser = Omit<CreatedUser, "name">;

export type CurrentLoggedUser = Omit<CreatedUser, "password"> & {
  token: string;
  _id: string;
};
