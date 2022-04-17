import * as Yup from 'yup';

export const MainSchema = Yup.object().shape({
  nameCargo: Yup.string()
    .min(1, 'Коротко!')
    .max(50, 'Длинно!')
    .required('Обязательно'),
  volume: Yup.string()
    .min(1, 'Коротко!')
    .max(50, 'Длинно!')
    .required('Обязательно'),
  weight: Yup.string()
    .min(1, 'Коротко!')
    .max(50, 'Длинно!')
    .required('Обязательно'),
  product: Yup.string()
    .min(1, 'Коротко!')
    .max(255, 'Длинно!')
    .required('Обязательно'),
  luxury: Yup.string().required('Обязательно'),
  price: Yup.string()
    .min(1, 'Коротко!')
    .max(50, 'Длинно!')
    .required('Обязательно'),
  departure: Yup.string()
    .min(1, 'Коротко!')
    .max(50, 'Длинно!')
    .required('Обязательно'),
  arrival: Yup.string()
    .min(1, 'Коротко!')
    .max(50, 'Длинно!')
    .required('Обязательно'),
  typeTransportation: Yup.string().required('Обязательно'),
  priority: Yup.string().required('Обязательно'),
});
