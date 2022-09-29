import React, { ReactNode } from 'react';
import { StyledContentWrapper, Wrapper } from './ContentWrapper.styles';

export const FlexWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    );
};
