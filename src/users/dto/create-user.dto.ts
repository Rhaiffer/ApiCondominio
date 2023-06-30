export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  password: string;
  readonly passwordConfirm: string;
  readonly door: number;
  readonly tower: string;
  readonly activebit: boolean;
}
