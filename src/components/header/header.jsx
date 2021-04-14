import React, { useRef } from 'react';
import { Route, Link } from 'react-router-dom';

const Header = ({onSearch}) => {
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
        inputRef.current.value="";
    }
    const onClick = () => {
        // console.log('click');
        handleSearch();
    };
    const onKeyPress = (event) => {
        // console.log('keypress');
        if(event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <header>
            <div>
                <img src="" alt="logo" />
                <h1><Link to="/">ohtube</Link></h1>
            </div>
            <input 
            ref={inputRef}
            type="search" placeholder="Search..." onKeyPress={onKeyPress} />
            <button type="submit" onClick={onClick}>
                {/* <img src="" alt="search" /> */}
                <Link to="/video_list">search</Link>
            </button>
        </header>
    );
};

export default Header;