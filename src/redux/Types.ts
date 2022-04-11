export const ADD_IN_STORE = 'ADD_IN_STORE';
export const OUT_FROM_STORE = 'OUT_FROM_STORE';

export const initialValueFormik = {
  nameCargo: '',
  volume: '',
  weight: '',
  product: '',
  luxury: '',
  price: '',
  departure: '',
  arrival: '',
  typeTransportation: '',
  priority: '',
};

export type formikTypes = {
  nameCargo: string;
  volume: number;
  weight: number;
  product: string;
  luxury: boolean;
  price: number;
  departure: string;
  arrival: string;
  typeTransportation: string;
  priority: string;
};
