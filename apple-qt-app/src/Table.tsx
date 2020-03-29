
import React from 'react';
import { Button } from "@blueprintjs/core"; 

interface Props {
    id: number;
}

interface State {

}

export class Table extends React.PureComponent<Props, State> {
    public render() {
        return <>
            I'm a table!
        </>
    }
}