import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './home/page';
import SignInPage from './signin/page';
import SignUpPage from './signup/page';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/auth/signin" component={SignInPage} />
      <Route exact path="/auth/signup" component={SignUpPage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routing;
