import React, { ReactNode } from 'react';
import { StyledContentWrapper, Wrapper } from './ContentWrapper.styles';

export const BlockWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div style={{display:'flex'}}>
            {children}
        </div>
    );
};
