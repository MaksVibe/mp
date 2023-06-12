'use client';
import { DotsList, ListItem, Dot } from './Dots.styles';

const Dots = ({ amount }) => {
    return (
        <DotsList amount={amount}>
            <ListItem>
                <Dot />
            </ListItem>
            <ListItem>
                <Dot />
            </ListItem>
            <ListItem>
                <Dot />
            </ListItem>
            <ListItem>
                <Dot />
            </ListItem>
            <ListItem>
                <Dot />
            </ListItem>
        </DotsList>
    );
};

export default Dots;
