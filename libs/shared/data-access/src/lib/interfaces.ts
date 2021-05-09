export interface Authenticate {
  username: string;
  password: string;
};

export interface Contact {
  firstName: string;
  lastName: string;
  companyName?: string;
};

export interface User {
  id?: number,
  username?: string;
  country?: string,
  password?: string,
}
