export interface User {
  id: number;
  name: string;
  email: string;
  mobile: string;
  mobile_country_code: string;
  email_verified_at: boolean;
  token: string;
}

export interface RegisterResponse {
  status: boolean;
  status_code: number;
  message: string;
  data: User;
}
export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  mobile: string;
  mobile_country_code: string;
}


export interface VerifyPayload {
  code: string;
}

export interface VerifyResponse {
  status: boolean;
  status_code: number;
  message: string;
}
