import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
//import CardItem from './components/CardListItem'
import MoviesList from './pages/MoviesList'
import Movie from './pages/Movie'

const App = () => {
  return (
    <Router>
      <>
        <Route exact path="/" component={MoviesList}/>
        <Route path="/movie/:id" component={Movie}/>
      </>
    </Router>
  );
}

export default App;
