'use client';

import React, { useState } from 'react';

import "chart.js/auto";
import defaults, { Chart } from 'chart.js/auto';
import { Line } from "react-chartjs-2";

import './page.css';
import Image from 'next/image';
import magnifyingGlass from '../../public/magnifying-glass.svg';
import arrowBack from '../../public/dashboard/arrow_back.svg';
import plus from '../../public/dashboard/plus.svg';
import arrowShowDown from '../../public/dashboard/arrow_show_down.svg';
import deleteDashboard from '../../public/dashboard/delete.svg';
import arrowShowUp from '../../public/dashboard/arrow_show_up.svg';
import calendar from '../../public/dashboard/calendar.svg';
import emojiSick from '../../public/dashboard/emoji_sick.png';
import m from '../../public/dashboard/.svg';



export default function Dashboard() {

    const [flagGroupe, setFlagGroupe] = useState(false)
    const [flagBlock, setFlagBlock] = useState(false)

    function changeImage() {
        setFlagGroupe(!flagGroupe);
    }

    function changeImage2() {
        setFlagBlock(!flagBlock);
    }
    

    return (
    <>
    <body>
    <header className="header">
        <div className="header__container">
            <div className="header__back">
                <Image className="header__back_arrow" src={arrowBack} alt=""/>
                <button className="header__home_button">
                    Главная
                </button>
            </div>
            <div className="header__search">
                <input className="header__search_input"
                       type="search"
                       placeholder="Поиск по группам" />
                <Image className="header__search_img" src={magnifyingGlass} alt='лупа'/>
            </div>
        </div>
    </header>
    <main className=".main">
        <div className="main__container">
            <div className="main__block">
                <div className="main__sides">
                    <div className="main__block_left">
                        <span className="main__title">Группа 1</span>
                        <div className="main__search">
                            <input className="main__search_input"
                                   type="search"
                                   placeholder="Поиск по растениям" />
                            <Image className="main__search_img" src={magnifyingGlass} alt='лупа'/>
                        </div>
                        <div className="main__add">
                            <Image className="main__plus" src={plus} alt="добавить растение"/>
                        </div>
                            <Image className={"main__show"} src={ flagGroupe ? arrowShowUp : arrowShowDown } alt="развернуть группу" onClick={changeImage}/>
                        
                    </div>
                    <div className="main__block_right">
                        <Image className="main__delete" src={deleteDashboard} alt="удалить группу"/>
                    </div>
                </div>
                <section className={ flagGroupe ? "dashboard" : "dashboard--hidden"}>
                    <div className="dashboard__container">
                    <div className="dashboard__header">
                        <div className="dashboard__header_left">
                            <span className="dashboard__title">Любава</span>
                            <span className="dashboard__weigh">23кг</span>
                            <button className="dashboard__button">
                                Возникшие проблемы
                            </button>
                            <div className="dashboard__calendar">
                                <Image className="calendar" src={calendar} alt="календарь"/>
                            </div>
                            <Image className="dashboard__show" src={ flagBlock ? arrowShowUp : arrowShowDown} alt="свернуть дашборд" onClick={changeImage2}/>
                        </div>
                        <div className="dashboard__header_right">
                            <Image className="dashboard__delete" src={deleteDashboard} alt="удалить дашборд"/>
                        </div>
                    </div>
                    <div className={flagBlock ? "dashboard__blocks" : "dashboard__blocks--hidden"}>
                        <div className="block">
                            <div className="block__header">
                                <div className="block__title">
                                    Освещение
                                </div>
                                <div className="block__parameter">
                                    772Lux
                                </div>
                                <div className="block__emotion">
                                    <Image className="" src={emojiSick} alt=""/>
                                </div>
                                <div className="block__radio">
                                    <label>
                                        <input id='radio-1' className="day" name="radio" type="radio" />
                                        <div className="block__castom-radio radio-1">
                                            День
                                        </div> 
                                    </label>
                                    <label>
                                        <input id='radio-2' className="week" name="radio" type="radio"/>
                                        <div className="block__castom-radio radio-2">
                                            Неделя
                                        </div> 
                                    </label>
                                    <label>
                                        <input id='radio-3' className="month" name="radio" type="radio"/>
                                        <div className="block__castom-radio radio-3">
                                            Месяц
                                        </div> 
                                    </label>
                                </div>
                            </div>
                            <div className="block__graph" id='myChart'> 
                                <Line data={{
                                        labels: ['1 января', '2 января', '3 января', '4 января'],
                                        datasets: [{
                                            label: 'My First Dataset',
                                            data: [65, 59, 80, 81, 56, 55, 40],
                                            fill: false,
                                            borderColor: 'rgb(73, 133, 83)',
                                            tension: 0.4
                                        }],
                                            }}
                                        options={{
                                            responsive: true,
                                            maintainAspectRatio: true,
                                            plugins: {
                                                legend: {
                                                    display: false,
                                                    labels: {
                                                        //color: 'rgb(255, 99, 132)'
                                                    }
                                                }
                                            }
                                        }}>
                                </Line>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block__header">
                                <div className="block__title">
                                    Освещение
                                </div>
                                <div className="block__parameter">
                                    772Lux
                                </div>
                                <div className="block__emotion">
                                    <Image className="" src={emojiSick} alt=""/>
                                </div>
                                <div className="block__radio">
                                    <label>
                                        <input id='radio-1' className="day" name="radio1" type="radio" />
                                        <div className="block__castom-radio radio-1">
                                            День
                                        </div> 
                                    </label>
                                    <label>
                                        <input id='radio-2' className="week" name="radio1" type="radio"/>
                                        <div className="block__castom-radio radio-2">
                                            Неделя
                                        </div> 
                                    </label>
                                    <label>
                                        <input id='radio-3' className="month" name="radio1" type="radio"/>
                                        <div className="block__castom-radio radio-3">
                                            Месяц
                                        </div> 
                                    </label>
                                </div>
                            </div>
                            <div className="block__graph"></div>
                        </div>
                        <div className="block">
                            <div className="block__header">
                                <div className="block__title">
                                    Освещение
                                </div>
                                <div className="block__parameter">
                                    772Lux
                                </div>
                                <div className="block__emotion">
                                    <Image className="" src={emojiSick} alt=""/>
                                </div>
                                <div className="block__radio">
                                    <label>
                                        <input id='radio-1' className="day" name="radio2" type="radio" />
                                        <div className="block__castom-radio radio-1">
                                            День
                                        </div> 
                                    </label>
                                    <label>
                                        <input id='radio-2' className="week" name="radio2" type="radio"/>
                                        <div className="block__castom-radio radio-2">
                                            Неделя
                                        </div> 
                                    </label>
                                    <label>
                                        <input id='radio-3' className="month" name="radio2" type="radio"/>
                                        <div className="block__castom-radio radio-3">
                                            Месяц
                                        </div> 
                                    </label>
                                </div>
                            </div>
                            <div className="block__graph"></div>
                        </div>
                        <div className="block">
                            <div className="block__header">
                                <div className="block__title">
                                    Освещение
                                </div>
                                <div className="block__parameter">
                                    772Lux
                                </div>
                                <div className="block__emotion">
                                    <Image className="" src={emojiSick} alt=""/>
                                </div>
                                <div className="block__radio">
                                    <label>
                                        <input id='radio-1' className="day" name="radio3" type="radio"/>
                                        <div className="block__castom-radio radio-1">
                                            День
                                        </div> 
                                    </label>
                                    <label>
                                        <input id='radio-2' className="week" name="radio3" type="radio"/>
                                        <div className="block__castom-radio radio-2">
                                            Неделя
                                        </div> 
                                    </label>
                                    <label>
                                        <input id='radio-3' className="month" name="radio3" type="radio"/>
                                        <div className="block__castom-radio radio-3">
                                            Месяц
                                        </div> 
                                    </label>
                                </div>
                            </div>
                            <div className="block__graph"></div>
                        </div>
                    </div>
                </div></section>
            </div>
        </div>
    </main>
    <section className="section">
        <div className="section__container">
            <div className="section__block">
                <span className="section__title">
                    Новая группа
                </span>
            </div>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        
    </script>
</body>
    </>    
    ) }