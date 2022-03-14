// to run the project - npm start (1st cmd)
//npx json-server --watch data/db.json --port 8000 (2nd cmd)
//npm install all react-router-dom@5
//github link - https://github.com/iamshaunjp/Complete-React-Tutorial/tree/lesson-2/dojo-blog
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/create">
             <Create />
          </Route>
          <Route path="/blogs/:id">
             <BlogDetails />
          </Route>
          <Route path="*">
             <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
