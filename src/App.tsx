import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Gallery from './components/Main/Main';
import PageNotFound from './components/ErrorPage/ErrorPage';
import './styles.scss';

export const App: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Gallery} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default App;
