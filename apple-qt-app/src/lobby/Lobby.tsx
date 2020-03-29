import React from 'react';
import { Button } from "@blueprintjs/core"; 
import { ActiveTables } from "./ActiveTables";

interface Props {

}

interface State {

}

export class Lobby extends React.PureComponent<Props, State> {
    public render() {
        return <>
            <Button text="Click here to join an active room" />
            <Button text="Click here to create a room" />
            <ActiveTables />
        </>
    }
}