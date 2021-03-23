import React, { FunctionComponent } from 'react';
import { Column, Spacer, Units, Decorator } from '@dhampir/core';

export const LeftBar: FunctionComponent<any> = () => {


    return <Decorator>
        <Spacer space={0.5} units={Units.EM} size={24}>
            <Column>
                Left Bar
            </Column>
        </Spacer>
    </Decorator>;
}
