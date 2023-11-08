import { DotsList, ListItem } from './Dots.styles';

const Dots = ({ amount }: { amount: number }) => {
  const items = [];
  for (let i = 0; i <= 6; i++) {
    items.push(<ListItem key={i} />);
  }
  return <DotsList amount={amount}>{items}</DotsList>;
};

export default Dots;
