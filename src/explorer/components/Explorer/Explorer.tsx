import * as React from 'react';

import { Column, LayoutList, LayoutListDirection, Row } from '../../../common/components';

import { RoutingArea } from '../../../common/routing';

import { Area } from '../../../common/components/Layout';

interface ExplorerProps {}

const Explorer: React.FunctionComponent<ExplorerProps> = () => {
    return (
        <LayoutList direction={LayoutListDirection.VERTICAL}>
            <Row id={'header'}>
                <Column>
                    <Area area={RoutingArea.HEADER} />
                </Column>
            </Row>
            <Row>
                <Column>
                    <Area area={RoutingArea.MENU} />
                </Column>
            </Row>
            <Row shouldFill={true}>
                <Column>
                    <Area area={RoutingArea.LEFT} />
                </Column>
                <Column shouldFill={true}>
                    <Area area={RoutingArea.MAIN} />
                </Column>
                <Column>
                    <Area area={RoutingArea.RIGHT} />
                </Column>
            </Row>
            <Row>
                <Area area={RoutingArea.FOOTER} />
            </Row>
        </LayoutList>
    );
};

export { Explorer };
