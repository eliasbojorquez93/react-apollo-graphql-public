import React, { useState } from 'react';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    const [query, setQuery] = useState('');
    const history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        history.push(`/search/movie?query=${query}`);
    }

    return (
        <header>
            <Link to="/"><span className="logo">Super Movies</span></Link>
            <form onSubmit={onSubmit}>
                <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
                <button type="submit"></button>
            </form>
        </header>
    )
}

export default Header;