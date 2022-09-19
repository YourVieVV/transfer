import { createTheme } from '@mui/material/styles';

export const palette = {
  white: '#ffffff',
  azure: {
    main: '#5dfefe',
    slider: '#5de6fe',
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
    MuiSlider: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
            color: palette.azure.slider,
            height: '5px',
            width: '120px',
            marginRight:'15px',
            padding:'4px',
            '& .MuiSlider-track': {
              border: 'none',
            },
            '& .MuiSlider-thumb': {
              height: 21,
              width: 21,
              backgroundColor: palette.white,
              border: '2px solid currentColor',
              '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
              },
              '&:before': {
                display: 'none',
              },
            },
            '& .MuiSlider-valueLabel': {
              lineHeight: 1.2,
              fontSize: 14,
              background: 'unset',
              padding: 0,
              width: 31,
              height: 31,
              borderRadius: '50% 50% 50% 50%',
              backgroundColor: palette.azure.slider,
              transformOrigin: 'bottom left',
              transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
              '&:before': { display: 'none' },
              '&.MuiSlider-valueLabelOpen': {
                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
              },
              '& > *': {
                transform: 'rotate(45deg)',
              },
            },
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { id: 'input-slider' },
          style: {
            color: palette.azure.main,
          },
        },
      ],
    },
  },
});
