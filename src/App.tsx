import * as React from 'react';
import { Switch, Route } from 'react-router';
import { Main } from 'components/UI/Wrapper';
import ButtonCounter from 'components/common/ButtonCounter';

const App = () => {
  return (
    <>
      {/* header, modal, loader etc. here */}
      <Main>
        <Switch>
          <Route exact path="/" component={ButtonCounter} />
          <Route component={() => <div>404</div>} />
        </Switch>
      </Main>
    </>
  );
};

export default App;
