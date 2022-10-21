import { IAppProps } from "./interfaces";
import { Title } from "./styles";

export function App({ title }: IAppProps) {
  return <Title>{title}</Title>
}
