import { FunctionComponent } from 'react';
import {Screen, Direction, Column, Row} from '@dhampir/core';
import {LeftBar, Page} from "../../sections";
import {Footer} from "@components/layout/Footer";
import {Header} from "@components/layout/Header";

export interface LayoutProps {
}

export const Layout: FunctionComponent<LayoutProps> = () => {
    return <Screen direction={Direction.VERTICAL} fullScreen={true}>
        <Row><Header /></Row>
        <Row greedy={true}>
            <Column>
                <LeftBar />
            </Column>
            <Column>
                <Page />
            </Column>
        </Row>
        <Row>
            <Footer />
        </Row>
    </Screen>
};
