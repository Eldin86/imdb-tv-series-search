import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
//import CardItem from './components/CardListItem'
import MoviesList from './pages/MoviesList'
import Movie from './pages/Movie'

const App = () => {
  return (
    <Router>
      <main>
        <Route exact path="/" component={MoviesList}/>
        <Route path="/movie/:id" component={Movie}/>
      </main>
    </Router>
  );
}

export default App;
