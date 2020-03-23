import Home from '../pages/Home/Home';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Search from '../pages/Search/Search';

const ROUTES = [
    {
        component: Home,
        path: '/'
    },
    {
        component: MovieDetails,
        path: '/movie/:id'
    },
    {
        component: Search,
        path: '/search/movie'
    }
]

export default ROUTES;