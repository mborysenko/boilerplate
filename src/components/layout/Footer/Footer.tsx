import { FunctionComponent } from 'react';
import {Routes, useLocation, Route} from 'react-router';
import {
    Area,
    Column,
    Decorator,
    isAreaVisible,
    RoutingArea,
    Row, Units,
    Spacer,
    areAreasVisible,
    BorderSide
} from '@dhampir/core';

export const Footer: FunctionComponent = () => {
    const location = useLocation();
    const {
        BOTTOM_RIGHT,
        BOTTOM_CENTER,
        BOTTOM_LEFT
    } = RoutingArea;
    return <Row>
            <Decorator fill={true} borderPosition={[BorderSide.TOP]} borderWidth={1}>
                <Spacer space={0.5} units={Units.EM}>
                    <Routes>
                        <Route path={'/one'} element={<div>One</div>} />
                        <Route path={'/two'} element={<div>Two</div>} />
                        <Route path={'/three'} element={<div>Three</div>} />
                        <Route path={'/four'} element={<div>Four</div>} />
                    </Routes>
                </Spacer>
            </Decorator>
        </Row>;
};
