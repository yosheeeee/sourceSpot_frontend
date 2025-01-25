export interface IUserAuthorizationResponce {
  NeedPassword: boolean;
  AccessToken: string;
  RefreshToken: string;
  User: {
    ID: number;
    Mail: string;
    Name: string;
  };
}
