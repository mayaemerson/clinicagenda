// src/types/auth.ts
export type AuthResponse = {
  token: string | null;
  user: {
    id: string;
    email: string;
    name: string;
    image?: string | null;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    token?: string;
    error?: string;
    [key: string]: any;
  };
};
