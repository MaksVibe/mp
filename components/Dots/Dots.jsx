'use client';
import { DotsList, ListItem } from './Dots.styles';

const Dots = ({ amount }) => {
    return (
        <DotsList amount={amount}>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </DotsList>
    );
};

export default Dots;
