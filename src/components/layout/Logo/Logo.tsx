import { FunctionComponent } from 'react';
import { Column, Units, Spacer } from '@dhampir/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBacterium } from '@fortawesome/free-solid-svg-icons'


export const Logo = () => {
    return <Column greedy={true}>
        <Spacer space={0.5} units={Units.EM}><FontAwesomeIcon size={'2x'} icon={faBacterium} title={'Bacteria Company!'}/></Spacer>
    </Column>
};
