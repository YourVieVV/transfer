import React, { ReactNode } from 'react';

export const BlockWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div style={{display:'flex'}}>
            {children}
        </div>
    );
};
