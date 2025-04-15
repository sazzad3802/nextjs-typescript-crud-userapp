// types/user.ts
export interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
  }
  
  export interface UserFormValues {
    name: string;
    email: string;
    age?: number;
  }