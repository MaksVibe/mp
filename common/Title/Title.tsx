import { Heading } from './Title.styles';

type TitleProps = {
  text: string;
};
function Title({ text }: TitleProps) {
  return <Heading>{text}</Heading>;
}

export default Title;
