import {ReactNode} from "react";

export const ADD_IN_STORE = 'ADD_IN_STORE';
export const OUT_FROM_STORE = 'OUT_FROM_STORE';
export const EDIT_IN_STORE = 'EDIT_IN_STORE';
export const ON_MY_WAY = 'ON_MY_WAY';
export const IN_ARCHIVE = 'IN_ARCHIVE';

export enum Routes {
  createCargo = 'createCargo',
  onMyWay = 'onMyWay',
  inArchive = 'inArchive',
}

export const initialValueFormik = {
  id: '',
  nameCargo: '',
  volume: '',
  weight: '',
  product: '',
  luxury: false,
  additionalDocuments: false,
  price: '',
  departure: '',
  arrival: '',
  typeTransportation: '',
  priority: '',
  transportation: false,
  isEdit: false,
  route: Routes.createCargo,
  isDone: true,
  comment: '',
  rating: 0,
};

export type formikTypes = {
  id: string;
  nameCargo: string;
  volume: number;
  weight: number;
  product: string;
  luxury: boolean;
  additionalDocuments: boolean;
  price: number;
  departure: string;
  arrival: string;
  typeTransportation: string;
  priority: string;
  transportation: boolean;
  isEdit: boolean;
  route: string;
  isDone: boolean;
  comment: string;
  rating: number;
};

export type FlexWrapperType = {
  width?:string;
  height?:string;
  flexWrap?:'wrap' | 'nowrap';
  justifyContent?:string;
  alignItems?:string;
  gap?:string;
  rowGap?:string;
  columnGap?:string;
}

export type data = any;
