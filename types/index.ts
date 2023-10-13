export type ISeferler = {
    fromWhere: string;
    toWhere: string;
    date: string;
    departureTime: string;
    totalTime: string;
    emptySeats: string;
    price: string;
    company: string;
    companyImage: string;
  };

  export type IValues = {
    fromWhere: string;
    toWhere: string;
    date: string;
  };

  export type ISelect = {
    value: string;
    label: string;
  } | null;

  export type IAutoCompleteProps = {
    direction?: string;
    setData: (value: IValues) => void;
    data: IValues;
  };

  export type INewUser = {
    name: string;
    surname: string;
    mail: string;
    gender: string;
    birthDate: string;
    password: string;
    password2: string;
  };
