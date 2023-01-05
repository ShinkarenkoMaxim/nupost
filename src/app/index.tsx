import CssBaseline from '@mui/material/CssBaseline';
import { withProviders } from './providers';
import Routing from '@/pages/routing';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Routing />
    </div>
  );
}

export default withProviders(App);
