import React from 'react';
import { Item } from '../../Grid/Item';

// @ts-ignore
export const CargoList = ({ cargo }) => {
  return <Item>{cargo?.values?.nameCargo}</Item>;
};
