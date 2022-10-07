import React, {FC} from 'react';
import Typography from "@mui/material/Typography";

import {LoginFields} from "./LoginFields";
import { FlexWrapper } from '../../StyledComponents/Wrappers/FlexWrappers';

export const LoginForm: FC = () => {
    return (
        <FlexWrapper width='100%' flexWrap='wrap' rowGap='20px' justifyContent='center' height='200px'>
            <Typography id="defaultText" variant="h5">Пройдите авторизацию</Typography>
            <LoginFields/>
        </FlexWrapper>
    );
};
