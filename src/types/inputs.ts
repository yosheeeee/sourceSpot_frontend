export interface IInputField {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  helperText?: string;
  options?: IOption[];
}

export interface IOption {
  title: string;
  value: string;
}
