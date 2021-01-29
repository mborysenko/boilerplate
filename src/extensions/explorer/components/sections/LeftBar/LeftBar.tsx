import React, { FunctionComponent, useCallback } from 'react';
import { Row } from '@core/components';
import { useDispatch, useSelector } from 'react-redux';
import { progress } from '@extensions/explorer/store/application';
import { ExplorerState } from '@extensions/explorer/store/application/API';

export const LeftBar: FunctionComponent<any> = () => {
    const dispatch = useDispatch();

    const loading = useSelector<ExplorerState>((state) => { return state.ui.progress });

    const click = useCallback(() => {
        dispatch(progress(!loading));
    }, [loading, dispatch]);

    return <Row>
        <button onClick={click}>Toggle Progress</button>
    </Row>
}
