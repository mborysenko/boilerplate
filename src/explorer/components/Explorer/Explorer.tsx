import * as React from 'react';
import { Column, LayoutList, LayoutListDirection, Row } from '@common/components';
import { RoutingArea, Area } from '@common/routing';

interface ExplorerProps {
}

const Explorer: React.FunctionComponent<ExplorerProps> = () => {
    return (
        <LayoutList fullScreen={true} direction={LayoutListDirection.VERTICAL}>
            <Row>
                <Area area={RoutingArea.HEADER}/>
            </Row>
            <Row>
                <Area area={RoutingArea.MENU}/>
            </Row>
            <Row fill={true}>
                <Column>
                    <Area area={RoutingArea.LEFT}/>
                </Column>
                <Column fill={true}>
                    <Area area={RoutingArea.MAIN}/>
                </Column>
                <Column>
                    <Area area={RoutingArea.RIGHT}/>
                </Column>
            </Row>
            <Row>
                <Area area={RoutingArea.FOOTER}/>
            </Row>
        </LayoutList>
    );
};

export { Explorer };
