import { User } from "../_types/auth"

/* TOKEN */
export const saveToken = (token: string): void => {
  localStorage.setItem("token", token);
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

/* USER */
export const saveUser = (user: User): void => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? (JSON.parse(user) as User) : null;
};

/* AUTH (TOKEN + USER) */
export const saveAuth = (token: string, user: User): void => {
  saveToken(token);
  saveUser(user);
};
