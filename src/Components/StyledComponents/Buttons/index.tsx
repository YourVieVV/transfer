import Button from '@mui/material/Button';
import {styled, TextField} from "@mui/material";

export const StyledButtonDrawer = styled(Button)({
    color: '#befdff',
    textShadow: '0px 0px 10px #6ff4ff, 0 0 25px #0fc0ff, 0 0 5px #048cff',
    fontSize: '20px',
    fontWeight: 'bold',
    '&:hover': {
        textShadow: '0px 0px 20px #6ff4ff, 0px 0px 30px #19aef4,0px 0px 15px #0145ca',
    }
});

export const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'red',
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});
// export const StyledTextField = styled(TextField)`
// & input:valid + fieldset {
//   border-color: green;
// },
// & input:invalid + fieldset: {
//   border-color: red;
// },
// & input:valid:focus + fieldset: {
//   border-left-width: 6px;
// },
// `;