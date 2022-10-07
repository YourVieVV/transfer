import React from 'react';
import {BackgroundWorldMap, BackgroundWorldMapWrapper} from "../StyledComponents/Wrappers";
import Map from "../../images/RussianMap.jpeg";
import {ContentWrapper} from "../V2/MainPage/ContentWrappers";
import {FlexItem, FlexWrapper} from "../StyledComponents/Wrappers/FlexWrappers";
import {LoginForm} from "./LoginForm";

export const LoginPage = () => {
    return (
        <div>
            <BackgroundWorldMapWrapper>
                <BackgroundWorldMap src={Map} scale='scale(1)' />
                <ContentWrapper>
                    <FlexWrapper gap='30px' justifyContent='center' height='100vh'>
                    <FlexItem alignItems='center' >
                        <LoginForm />
                    </FlexItem>
                    </FlexWrapper>
                </ContentWrapper>
            </BackgroundWorldMapWrapper>
        </div>
    )
}