import * as React from 'react';
import { Column, LayoutList, LayoutListDirection, Row } from '@common/components';
import { RoutingArea, Area, isAreaVisible } from '@common/routing';
import { RouteComponentProps } from 'react-router';

interface ExplorerProps extends RouteComponentProps {
}

const Explorer: React.FunctionComponent<ExplorerProps> = (props) => {
    const {
        location,
        match,
    } = props;
    return (
        <LayoutList fullScreen={true} direction={LayoutListDirection.VERTICAL}>
            <Row>Explorer</Row>
            {isAreaVisible(RoutingArea.HEADING, location.pathname) && <Row>
                <Area area={RoutingArea.HEADING}/>
            </Row>}
            {isAreaVisible(RoutingArea.SUBHEADING, location.pathname) && <Row>
                <Area area={RoutingArea.SUBHEADING}/>
            </Row>}
            <Row greedy={true}>
                {isAreaVisible(RoutingArea.LEFT, location.pathname) &&
                <Column>
                    <Area area={RoutingArea.LEFT}/>
                </Column>}
                <Column greedy={true}>
                    <Area area={RoutingArea.MAIN}/>
                </Column>
                {isAreaVisible(RoutingArea.RIGHT, location.pathname) && <Column>
                    <Area area={RoutingArea.RIGHT}/>
                </Column>}
            </Row>
            {isAreaVisible(RoutingArea.FOOTER, location.pathname) && <Row>
                <Area area={RoutingArea.FOOTER}/>
            </Row>}
        </LayoutList>
    );
};

export { Explorer };
