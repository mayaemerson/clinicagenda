// src/types/auth.ts
export type AuthResponse =
  | {
      data: {
        token: string | null;
        user: {
          id: string;
          email: string;
          name: string;
          image?: string | null;
          emailVerified: boolean;
          createdAt: Date;
          updatedAt: Date;
        };
      };
      error: null;
    }
  | {
      data: null;
      error: {
        message: string;
        code?: string;
        status: number;
        statusText: string;
      };
    };

export type SignInResponse = {
  redirect: boolean;
  token: string;
  url?: string;
  user: {
    id: string;
    email: string;
    name: string;
    image?: string | null;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
};

export type SignUpResult =
  | { data: SignInResponse }
  | {
      error: {
        message: string;
        code?: string;
        status: number;
        statusText: string;
      };
    };
