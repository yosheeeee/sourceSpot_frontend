export interface IUserAuthorizationResponce {
  AccessToken: string;
  RefreshToken: string;
  User: {
    ID: number;
    Mail: string;
    Name: string;
  };
}
