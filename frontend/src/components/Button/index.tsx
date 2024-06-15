import { ComponentButton } from './style';

type ButtonProps = {
  text: string;
  onClick: () =>void;
};

function Button ({text, onClick}:ButtonProps) {
  return (
    <ComponentButton onClick={onClick}>
      {text}
    </ComponentButton>
  );
}

export default Button;
