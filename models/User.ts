export interface ApiUser {
  _id: string;
  username?: string;
  email?: string;
  createdAt?: Date;
  friends?: ApiUser[];
}
