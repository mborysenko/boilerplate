import { FunctionComponent } from 'react';
import {Route, Routes, useLocation} from 'react-router';
import {
    Decorator,
    Column,
    Area,
    RoutingArea,
    Row,
    isAreaVisible,
    areAreasVisible,
    BorderSide
} from '@dhampir/core';

export const Header: FunctionComponent = () => {
    const location = useLocation();
    const {
        TOP_LEFT,
        TOP_CENTER,
        TOP_RIGHT,
    } = RoutingArea;
    return /*areAreasVisible([TOP_LEFT, TOP_CENTER, TOP_RIGHT], location.pathname)*/ <Row>
        <Decorator borderPosition={[BorderSide.BOTTOM]} borderWidth={1} fill={true}>
            <Routes>
                <Route path={'/one'} element={<div>One</div>} />
                <Route path={'/two'} element={<div>Twee</div>} />
                <Route path={'/three'} element={<div>Three</div>} />
                <Route path={'/four'} element={<div>Four</div>} />
            </Routes>
        </Decorator>
    </Row>;
};
