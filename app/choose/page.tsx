import './page.css';

export default function Choose() {
    return (
    <>
    <body>
    <div className="container">
        <aside className="aside">
            <header className="aside__header">
                <img className="aside__magnifying-glass" src="./media/magnifying-glass.svg"/>
                <input type="search" 
                className="search"
                placeholder="Тип растения"/>
            </header>
            <div className="aside__plant-carts">
                <div className="plant-cart">
                    <input id="radio-1" type="radio" name="radio" value="1"/>
                    <label htmlFor="radio-1">
                        <div className="top"></div>
                        <img src="./media/plant-small.png" alt="" className="plant-small"/>
                        <dl>
                            <dt>Dracena Fr.</dt>
                            <dd>Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль<span className="span-hide">, кроме того, способно развить у вас крапиноз</span>.</dd>
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
                        <img src="./media/plant-small.png" alt="" className="plant-small"/>
                        <dl>
                            <dt>Dracena Fr.</dt>
                            <dd>Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль<span className="span-hide">, кроме того, способно развить у вас крапиноз</span>.</dd>
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
                        <img src="./media/plant-small.png" alt="" className="plant-small"/>
                        <dl>
                            <dt>Dracena Fr.</dt>
                            <dd>Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль<span className="span-hide">, кроме того, способно развить у вас крапиноз</span>.</dd>
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
                        <img src="./media/plant-small.png" alt="" className="plant-small"/>
                        <dl>
                            <dt>Dracena Fr.</dt>
                            <dd>Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль<span className="span-hide">, кроме того, способно развить у вас крапиноз</span>.</dd>
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
                        <img src="./media/plant-small.png" alt="" className="plant-small"/>
                        <dl>
                            <dt>Выбрать свое растение</dt>
                            <dd>Вы можете выбрать своё растения для посадки в emp<span className="span-hide">, но для этого установите самостоятельно благоприятные параметры для растения</span>.</dd>
                        </dl>
                        <img src="./media/fire.svg" alt="fire" className="fire"/>
                        <img src="./media/sunrise.svg" alt="sunrise" className="sunrise"/>
                        <img src="./media/drops.svg" alt="drops" className="drops"/>
                    </label>
                </div>
            </div>
        </aside>
        <img className="plant-large" src="./media/plant-large.png" alt="plant" />
        <main className="main">
            <header className="main__header">
                <button className="button-back">
                    <img className="arrow-left" src="./media/arrow-left.svg" alt="arrow" />
                </button>
                <div className="top-green-block"></div>
                <dl>
                    <dt className="main__header--hide">Size</dt>
                    <dd className="main__header--hide">Small</dd>
                    <dt>Humidity</dt>
                    <dd>64%</dd>
                    <dt>Light</dt>
                    <dd>Diffuse</dd>
                    <dt>Temeprature</dt>
                    <dd>18-24 C</dd>
                </dl>
            </header>
            <footer className="main__footer">
                <div className="bottom-white-block">
                    <dl>
                        <dt>Выберите растение</dt>
                        <dd>Здесь будет описание растения...</dd>
                    </dl>
                    <div className="icons">
                       <a href="#">
                           <img src="./media/plus-box.svg" alt="plus" className="plus-box"/>
                       </a>
                       <a href="#">
                           <img src="./media/close.svg" alt="" className="close"/>
                       </a>
                       <a href="#">
                           <img src="./media/help.svg" alt="" className="help"/>
                       </a>
                    </div>
                    <div className="hide-icons">
                        <img src="./media/fire.svg" alt="fire" className="fire"/>
                        <img src="./media/sunrise.svg" alt="sunrise" className="sunrise"/>
                        <img src="./media/drops.svg" alt="drops" className="drops"/>
                    </div>
                    <button>
                        <p>Необходимо выбрать растение</p>
                    </button>
                </div>
            </footer>
        </main>
    </div>
</body>
    </>    
    ) }