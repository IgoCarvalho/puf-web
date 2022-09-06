import { Container, InputBase, Label } from './styles';

type InputProps = {
  name: string;
  type: string;
  label: string;
};

function Input({ name, label, type = 'text' }: InputProps) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputBase type={type} name={name} id={name} />
    </Container>
  );
}

export default Input;
