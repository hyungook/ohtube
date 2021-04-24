import React, { useRef } from 'react';
import styles from './header.module.css';

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
        <header className={styles.header}>
            <section className={styles.headerSection}>
                <div className={styles.logo} onClick={clear}>
                    <img src="" alt="logo" />
                </div>
                <div className={styles.inputSection}>
                    <input className={styles.searchInput} ref={inputRef}
                        type="search" placeholder="OHTube 검색" onKeyPress={onKeyPress} />
                    <button className={styles.searchBtn} type="submit" onClick={onClick}>
                        {/* <img src="" alt="search" /> */}
                        search
                    </button>
                </div>
            </section>
            <div>
                <button>shortCut</button>
                <ul className={styles.shortCutUl}>
                    <li>
                        <button onClick={myVideo} value={'에센셜'}>에센셜</button>
                    </li>
                    <li>
                        <button onClick={myVideo} value={'드림코딩'}>드림코딩</button>
                    </li>
                    <li>
                        <button onClick={myVideo} value={'노마드코드'}>노마드코드</button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;