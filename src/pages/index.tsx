import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './home/page';
import SignInPage from './signin/page';

export const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/auth/signin" component={SignInPage} />
      <Redirect to="/" />
    </Switch>
  );
};
