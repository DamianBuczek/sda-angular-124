export interface Round {
  seconds: number;
  decySeconds: number;
}

export interface Result {
  userName: string;
  seconds: number;
  decySeconds: number;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ReqResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: {
    url: string;
    text: string;
  };
}
