import { render } from "react-dom";
import { App } from './components/App';

import { GlobalStyle } from './styles/global';

render(
  <>
    <GlobalStyle />
    <App title="Component Title"/>
  </>,
  document.getElementById('root')
);
