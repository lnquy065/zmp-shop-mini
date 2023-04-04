export interface AuthenticateSchema {
  isSuccess: boolean;
  message: string;
  messages: string[];
  data: {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    token: string;
  };
}
