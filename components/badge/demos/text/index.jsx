import React from 'react';
import Badge from 'kpc-react/components/badge';
import Button from 'kpc-react/components/button';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Badge text="new">Message</Badge>
                <Badge text={6}>
                    <Button>Message</Button>
                </Badge>
                <Badge text={19}>
                    <Button>Message</Button>
                </Badge>
                <Badge text={100} max={99}>
                    <Button>Message</Button>
                </Badge>
            </div>
        )
    }
}