import { Container, HeaderContainer } from './components';

import { AppRouter } from './router';

function App() {
  return (
    <>
      <HeaderContainer />
      <Container>
        <AppRouter />
      </Container>
    </>
  );
}

export default App;
