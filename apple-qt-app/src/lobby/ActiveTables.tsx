import { range } from "lodash-es";
import React from 'react';
import { Button } from "@blueprintjs/core"; 

interface Props {

}

interface State {

}

const renderTable = (count: number) => {
    // return <div></div>
    return (
        <div>
            <div>Look I'm an active table</div>
            <div>There are {count} people at this table.</div>
        </div>
    );
}

export class ActiveTables extends React.PureComponent<Props, State> {
    public render() {
        return <>
            {range(6).map(d => {
                renderTable(d);
            })}
        </>
    }
}