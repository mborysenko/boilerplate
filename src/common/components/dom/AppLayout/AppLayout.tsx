import * as React from 'react';
import {
    AppLayoutProps,
    Column,
    ColumnDecorator,
    DecoratorPosition,
    LayoutList,
    LayoutListDirection,
    Row
} from '@common/components';
import { RoutingArea, Area, isAreaVisible } from '@common/routing';

const AppLayout: React.FunctionComponent<AppLayoutProps> = ({ ...rest }) => {

    const {
        location,
    } = rest;
    return (
        <LayoutList fullScreen={true} direction={LayoutListDirection.VERTICAL}>
            {isAreaVisible(RoutingArea.HEADING, location.pathname) && <Row>
                <Area area={RoutingArea.HEADING} {...rest}/>
            </Row>}
            {isAreaVisible(RoutingArea.SUBHEADING, location.pathname) && <Row>
                <Area area={RoutingArea.SUBHEADING} {...rest}/>
            </Row>}
            <Row greedy={true} asGrid={true}>
                {isAreaVisible(RoutingArea.LEFT, location.pathname) &&
                <Column>
                    <ColumnDecorator position={DecoratorPosition.LEFT}><Area area={RoutingArea.LEFT} {...rest}/></ColumnDecorator>
                </Column>}
                <Column greedy={true}>
                    <ColumnDecorator><Area area={RoutingArea.MAIN}/></ColumnDecorator>
                </Column>
                {isAreaVisible(RoutingArea.RIGHT, location.pathname) && <Column>
                    <ColumnDecorator position={DecoratorPosition.RIGHT}><Area area={RoutingArea.RIGHT} {...rest}/></ColumnDecorator>
                </Column>}
            </Row>
            {isAreaVisible(RoutingArea.FOOTER, location.pathname) && <Row>
                <Area area={RoutingArea.FOOTER} {...rest}/>
            </Row>}
        </LayoutList>
    );
};

export { AppLayout };
