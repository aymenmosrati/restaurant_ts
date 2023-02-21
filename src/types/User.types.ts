// type in object
export type userEmailTypes = {
  email: string;
};
export type userPassaType = {
  password: string;
};

export type userTypes = userEmailTypes & userPassaType;
