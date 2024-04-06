import './page.css';

export default function ChooseNorms() {
    return (
    <>
    <body>
    <div className="container">
        <aside className="aside">
            <header className="aside__header">
                <img src="./media/magnifying-glass.svg"/>
                <input type="search" 
                className="search"
                placeholder="Тип растения"/>
            </header>
            <div className="aside__plant-carts">
                <div className="plant-cart">
                    <input id="radio-1" type="radio" name="radio" value="1"/>
                    <label htmlFor="radio-1">
                        <div className="top"></div>
                        <img src="./media/plant-small.png" alt=""/>
                        <dl>
                            <dt>Dracena Fr.</dt>
                            <dd>Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз.</dd>
                        </dl>
                        <img src="./media/fire.svg" alt="fire" className="fire"/>
                        <img src="./media/sunrise.svg" alt="sunrise" className="sunrise"/>
                        <img src="./media/drops.svg" alt="drops" className="drops"/>
                    </label>
                </div>
                <div className="plant-cart">
                    <input id="radio-2" type="radio" name="radio" value="2"/>
                    <label htmlFor="radio-2">
                        <div className="top"></div>
                        <img src="./media/plant-small.png" alt=""/>
                        <dl>
                            <dt>Dracena Fr.</dt>
                            <dd>Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз.</dd>
                        </dl>
                        <img src="./media/fire.svg" alt="fire" className="fire"/>
                        <img src="./media/sunrise.svg" alt="sunrise" className="sunrise"/>
                        <img src="./media/drops.svg" alt="drops" className="drops"/>
                    </label>
                    
                </div>
                <div className="plant-cart">
                    <input id="radio-3" type="radio" name="radio" value="2"/>
                    <label htmlFor="radio-3">
                        <div className="top"></div>
                        <img src="./media/plant-small.png" alt=""/>
                        <dl>
                            <dt>Dracena Fr.</dt>
                            <dd>Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз.</dd>
                        </dl>
                        <img src="./media/fire.svg" alt="fire" className="fire"/>
                        <img src="./media/sunrise.svg" alt="sunrise" className="sunrise"/>
                        <img src="./media/drops.svg" alt="drops" className="drops"/>
                    </label>
                </div>
                <div className="plant-cart">
                    <input id="radio-4" type="radio" name="radio" value="2"/>
                    <label htmlFor="radio-4">
                        <div className="top"></div>
                        <img src="./media/plant-small.png" alt=""/>
                        <dl>
                            <dt>Dracena Fr.</dt>
                            <dd>Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз.</dd>
                        </dl>
                        <img src="./media/fire.svg" alt="fire" className="fire"/>
                        <img src="./media/sunrise.svg" alt="sunrise" className="sunrise"/>
                        <img src="./media/drops.svg" alt="drops" className="drops"/>
                    </label>
                </div>
                <div className="plant-cart">
                    <input id="radio-5" type="radio" name="radio" value="2"/>
                    <label htmlFor="radio-5">
                        <div className="top"></div>
                        <img src="./media/plant-small.png" alt=""/>
                        <dl>
                            <dt>Выбрать свое растение</dt>
                            <dd>Вы можете выбрать своё растения для посадки в emp, но для этого установите самостоятельно благоприятные параметры для растения.</dd>
                        </dl>
                        <img src="./media/fire.svg" alt="fire" className="fire"/>
                        <img src="./media/sunrise.svg" alt="sunrise" className="sunrise"/>
                        <img src="./media/drops.svg" alt="drops" className="drops"/>
                    </label>
                </div>
            </div>
        </aside>
        <main className="main">
            <header className="header">
                <button className="button-back">
                    <img className="arrow-left" src="./media/arrow-left.svg" alt="arrow" />
                </button>
                <div className="top-elem">
                    <h1 className="top-elem--title">Комфортный диапазон</h1>
                </div>
                <div className="images">
                    <img className="images--logo logo" src="./media/logo.svg" alt="logo" />
                    <div className="images--green"></div>
                    <div className="images--yellow"></div>
                    <div className="images--red"></div>
                </div>
                <p className="header--text">Вам необходимо выбрать диапазон, в котором, как вам кажется,
                    будет комфортно находиться растению.  </p>
            </header>
            <footer className="footer">
                <div className="title">
                    <h2 className="title__h2">Свое растение</h2>
                    <form action="" className="title__form">
                        <label className="switch" htmlFor="checkbox">
                            <input type="checkbox" id="checkbox" />
                            <div className="slider round"></div>
                          </label>
                    </form>
                </div>
                <div className="parameters-block">
                    <div className="parameters-lines">
                        <div className="parameters-lines__title">Температура воздуха</div>
                        <div className="parameters-lines__from">от</div>
                        <form action="" className="form">
                            <input type="text" className="input" value="21"/>
                        </form>
                        <div className="parameters-lines__to">до</div>
                        <form action="" className="form">
                            <input type="text" className="input" value="32"/>
                        </form>
                        <div className="parameters-lines__title">Температура почвы</div>
                        <div className="parameters-lines__from">от</div>
                        <form action="" className="form">
                            <input type="text" className="input" value="21"/>
                        </form>
                        <div className="parameters-lines__to">до</div>
                        <form action="" className="form">
                            <input type="text" className="input" value="32"/>
                        </form>
                        <div className="parameters-lines__title">Влажность воздуха</div>
                        <div className="parameters-lines__from">от</div>
                        <form action="" className="form">
                            <input type="text" className="input" value="21"/>
                        </form>
                        <div className="parameters-lines__to">до</div>
                        <form action="" className="form">
                            <input type="text" className="input" value="32"/>
                        </form>
                        <div className="parameters-lines__title">Влажность почвы</div>
                        <div className="parameters-lines__from">от</div>
                        <form action="" className="form">
                            <input type="text" className="input" value="21"/>
                        </form>
                        <div className="parameters-lines__to">до</div>
                        <form action="" className="form">
                            <input type="text" className="input" value="32"/>
                        </form>
                        <div className="parameters-lines__title">Освещенность</div>
                        <div className="parameters-lines__from">от</div>
                        <form action="" className="form">
                            <input type="text" className="input" value="21"/>
                        </form>
                        <div className="parameters-lines__to">до</div>
                        <form action="" className="form">
                            <input type="text" className="input" value="32"/>
                        </form>
                    </div>
                </div>
                <div className="footer__button">
                    <button className="button">Подтвердить выбор</button>
                </div>
            </footer>
        </main>
    </div>
</body>
    </>    
    ) }