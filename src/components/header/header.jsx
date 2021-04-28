import React, { useRef, useState } from 'react';
import styles from './header.module.css';
import {data} from '../../Data/data';

// const img = process.env.PUBLIC_URL + '/images/';

const Header = ({onSearch,selectVideo}) => {
    const inputRef = useRef();
    const shortCutIcon = useRef();
    const shortCutBtn = useRef();
    // shortCut 확인을 위한 상태
    const [sc, setSc] = useState(true);

    const [scMenu, setScMenu] = useState();

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
        // const buttonValue = e.target.value;
        let elem = e.target;

        // 이벤트 위임(delegation)
        while (!elem.classList.contains("shortCut")) {
            elem = elem.parentNode;
            if (elem.nodeName == "BODY") {
              elem = null;
              return;
            }
          }
          let elemText = elem.innerText;
        // 상태관리로 value 값 전달
        //   console.log(elem);
        //   console.log(elemText);
    
          onSearch(elemText);
          showShortCut();
    };

    const showShortCut =() => {
        const SCtn = shortCutBtn.current;
        const SBtn = shortCutIcon.current.style;
        // console.log(SBtn);

        SCtn.classList.toggle(`${styles.rotation}`);

        if(sc) {
            // console.log('ok');
            // SCtn.classList.add(`${styles.rotation}`);
            SBtn.display=`block`;
            setSc(false);
        } else {
            // console.log('no');
            // SCtn.classList.remove(`${styles.rotation}`);
            SBtn.display=`none`;
            setSc(true);
        }
    };

    return (
        <header className={styles.header}>
            <section className={styles.headerSection}>
                <div className={styles.logo} onClick={clear}>
                    <img className={styles.buttonImg} src="/images/ohtube.svg" alt="logo" />
                    {/* <img className={styles.buttonImg} src={`${img}/ohtube.svg`} alt="logo" /> */}
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
            <div className={styles.shortCut}>
                <button className={styles.shortCutBtn} onClick={showShortCut} ref={shortCutBtn}>+</button>
                <div className={styles.shortCutBox} ref={shortCutIcon} >
                    <ul className={styles.shortCutUl} >
                        
                        {data.map((data) => {
                            return <li onClick={myVideo} className={`${styles.shortCutLi} shortCut`} value={data.value} >
                                    <div className={styles.liImg}>
                                        {/* <img src="" alt="search" /> */}
                                    </div>
                                    {/* <p>{data["text"]}</p> */}
                                    <p>{data.text}</p>

                                </li>})}
                    </ul>
                </div>
                
            </div>
        </header>
    );
};

export default Header;