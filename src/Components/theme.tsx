import { createTheme } from '@mui/material/styles';

export const palette = {
  azure: {
    main: '#5dfefe',
  },
};

export const theme = createTheme({
  components: {
    // MuiButton: {
    //     variants: [
    //         {
    //             props: { color: 'secondary', variant: 'contained' },
    //             style: {
    //                 backgroundColor: palette.info.main,
    //                 color: palette.textAction,
    //                 '&:hover': {
    //                     boxShadow: 'none',
    //                     backgroundColor: palette.info.dark,
    //                 },
    //                 '&:active': {
    //                     backgroundColor: palette.info.light,
    //                 },
    //                 '&:focus': {
    //                     boxShadow: 'none',
    //                 },
    //             },
    //         },
    //         {
    //             props: { color: 'secondary', variant: 'containedSecondaryAccount' },
    //             style: {
    //                 backgroundColor: palette.info.main,
    //                 color: palette.textAction,
    //                 height: '50px',
    //                 width: '100%',
    //                 minWidth: 0,
    //                 '&:hover': {
    //                     boxShadow: 'none',
    //                     backgroundColor: palette.info.dark,
    //                 },
    //                 '&:active': {
    //                     backgroundColor: palette.info.light,
    //                 },
    //                 '&:focus': {
    //                     boxShadow: 'none',
    //                 },
    //             },
    //         },]}
    MuiTextField: {
      variants: [
        {
          props: { color: 'primary', variant: 'outlined' },
          style: {
            '& label': {
              color: palette.azure.main,
            },
            '& label.Mui-focused': {
              color: palette.azure.main,
            },
            '& .MuiOutlinedInput-root': {
              color: palette.azure.main,
              '& fieldset': {
                borderColor: palette.azure.main,
              },
              '&:hover fieldset': {
                borderColor: palette.azure.main,
              },
              '&.Mui-focused fieldset': {
                borderColor: palette.azure.main,
              },
            },
          },
        },
      ],
    },
  },
});
