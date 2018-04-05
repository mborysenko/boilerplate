import * as React from "react";

export interface IGridPageProps {
}

export class GridPage extends React.Component<IGridPageProps, void> {
    constructor(prop: IGridPageProps) {
        super(prop)
    }

    public componentWillMount() {
    }

    public render(): JSX.Element {
        return <div></div>;
    }
}

