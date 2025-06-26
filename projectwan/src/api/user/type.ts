export interface loginFrom {
  phone: string;
  pass: string;
}

interface dataType {
  token: string;
}
export interface loginResponseData {
  code: number;
  data: dataType;
}

export interface loginResponseData2 {
  code: number;
  data: {};
}
