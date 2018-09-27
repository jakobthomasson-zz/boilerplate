import * as React from 'react';
import { Switch, Route } from 'react-router';
import { Main } from 'components/UI/Wrapper';

const App = () => {
  return (
    <>
      {/* header, modal, loader etc. here */}
      <Main>
        <Switch>
          <Route exact path="/" component={() => <div>yolo</div>} />
          <Route component={() => <div>404</div>} />
        </Switch>
      </Main>
    </>
  );
};

export default App;
