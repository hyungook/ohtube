import React, { useRef } from 'react';
import { Route, Link } from 'react-router-dom';

const Header = ({onSearch,selectVideo}) => {
    const inputRef = useRef();

    const clear = () => {
        selectVideo(null);
        onSearch(null);
    };
    
    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
        inputRef.current.value="";

        selectVideo(null);
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

    const myVideo = (e) => {
        selectVideo(null);
        
        const buttonValue = e.target.value;
        console.log(buttonValue);
        onSearch(buttonValue);
    };

    return (
        <header>
            <div>
                <img src="" alt="logo" />
                <h1 onClick={clear}><Link to="/">ohtube</Link></h1>
            </div>
            <input 
            ref={inputRef}
            type="search" placeholder="Search..." onKeyPress={onKeyPress} />
            <button type="submit" onClick={onClick}>
                {/* <img src="" alt="search" /> */}
                <Link to="/">search</Link>
            </button>
            <br />
            <button onClick={myVideo} value={'에센셜'}>에센셜</button>
            <button onClick={myVideo} value={'드림코딩'}>드림코딩</button>
            <button onClick={myVideo} value={'노마드코드'}>노마드코드</button>
        </header>
    );
};

export default Header;