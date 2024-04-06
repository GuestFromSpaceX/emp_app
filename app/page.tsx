import './page.css';
import styles from './page.module.css';

export default function Home() {
  return (
     <>
     <body>
     <header className="header">
          <div className="search-header">
               <img className="magnifying-glass"
                    src="./media/magnifying-glass.svg" 
                    alt="лупа"/>
               <input type="search" 
                      className="search"
                      value="Найти"/>
          </div>
          <div className="slider-main">
               <img className="sad-face"
                    src="./media/sad-face.svg"
                    alt="sad face"/>
               <div className="slider-background"
                    ></div>
               <img className="smile-face"
                    src="./media/smile-face.svg"
                    alt="smile face"/>
          </div>
          <button className="header__button">
               <img className="plus"
                    src="./media/plus.svg" 
                    alt="plus"/>
               <img className="branch"
                    src="./media/branch.svg" 
                    alt="branch"/>
          </button>
     </header>
     <main className="main">
          <div className="arrows">
               <div className="arrow-left">
                    <img src="./media/arrow-right-circle.svg" alt="arrow"/>
               </div>
               <div className="arrow-right">
                    <img src="./media/arrow-right-circle.svg" alt="arrow"/>
               </div>
          </div>
          <section className="notify">
               <div className="point-1">
                    <div className="dot"></div>
                    <div className="top-rectangl"></div>
                    <dl className="point__dl">
                        <dt className="point__dt">Владик</dt>
                        <dd className="point__dd">Срочно поставьте в теплое место</dd>
                    </dl>
                    <img className="notify__plant"
                         src="./media/notify-plant.svg" 
                         alt="plant" />
                    <img className="plant-face-sick" 
                         src="./media/plant-face-sick.svg" 
                         alt="plant face sick" />
                    <img className="snow"
                         alt="snow" 
                         src="./media/snow.svg"/>
                    <div className="icons">
                         <img className="battery"
                              src="./media/battery.svg" 
                              alt="battery"/>
                         <img className="fire"
                              src="./media/fire.svg" 
                              alt="fire"/>
                         <img className="sunrise"
                              src="./media/sunrise.svg" 
                              alt="sunrise"/>
                         <img className="drops"
                              src="./media/drops.svg" 
                              alt="drops"/>
                    </div>
               </div>
               <div className="point-2">
                    <div className="dot"></div>
                    <div className="top-rectangl"></div>
                    <dl className="point__dl">
                         <dt className="point__dt">Коля</dt>
                         <dd className="point__dd">Срочно поставьте в теплое место</dd>
                    </dl>
                    <img className="notify__plant"
                         src="./media/notify-plant.svg" 
                         alt="plant" />
                    <img className="plant-face-sick" 
                         src="./media/plant-face-sick.svg" 
                         alt="plant face sick" />
                    <img className="snow"
                         alt="snow" 
                         src="./media/snow.svg"/>
                    <div className="icons">
                         <img className="battery"
                              src="./media/battery.svg" 
                              alt="battery"/>
                         <img className="fire"
                              src="./media/fire.svg" 
                              alt="fire"/>
                         <img className="sunrise"
                              src="./media/sunrise.svg" 
                              alt="sunrise"/>
                         <img className="drops"
                              src="./media/drops.svg" 
                              alt="drops"/>
                    </div>
               </div>
          </section>
          <section className="pots">
               <div className="title">
                    <h2>Мои растения</h2>
               </div>
               <div className="points">
                    <div className="point-1">
                         <div className="top"></div>
                         <img className="pots__plant"
                              src="./media/pots-plant.svg" 
                              alt="plant" />
                         <img className="pots__plant-face" 
                              src="./media/pots-smile-face.svg" 
                              alt="plant face" />
                         <dl className="pots__dl">
                              <dt className="pots__dt">Нина</dt>
                              <dd className="pots__dd-1">Dracena Fr.</dd>
                              <dd className="pots__dd-2">Полейте через 2 часа</dd>
                         </dl>
                         <div className="icons">
                              <img className="fire"
                                   src="./media/fire.svg"
                                   alt="fire"></img>
                              <img className="sunrise"
                                   src="./media/sunrise.svg"
                                   alt="sunrise"></img>
                              <img className="drops"
                                   src="./media/drops.svg"
                                   alt="drops"></img>
                              <img className="battery"
                                   src="./media/battery.svg"
                                   alt="battery"></img>
                         </div>
                         <div className="graf"></div>
                    </div>
                    <div className="point-2">
                         <div className="top"></div>
                         <img className="pots__plant"
                              src="./media/pots-plant-1.svg" 
                              alt="plant" />
                         <img className="pots__plant-face" 
                              src="./media/pots-smile-face.svg" 
                              alt="plant face" />
                         <dl className="pots__dl">
                              <dt className="pots__dt">Таня</dt>
                              <dd className="pots__dd-1">Dracena Fr.</dd>
                              <dd className="pots__dd-2">Завтра поставьте в менее жаркое место</dd>
                         </dl>
                         <div className="icons">
                              <img className="fire"
                                   src="./media/fire.svg"
                                   alt="fire"></img>
                              <img className="sunrise"
                                   src="./media/sunrise.svg"
                                   alt="sunrise"></img>
                              <img className="drops"
                                   src="./media/drops.svg"
                                   alt="drops"></img>
                              <img className="battery"
                                   src="./media/battery.svg"
                                   alt="battery"></img>
                         </div>
                         <div className="graf"></div>
                    </div>
                    <div className="point-3">
                         <div className="top"></div>
                         <img className="pots__plant"
                              src="./media/pots-plant.svg" 
                              alt="plant" />
                         <img className="pots__plant-face" 
                              src="./media/pots-smile-face.svg" 
                              alt="plant face" />
                         <dl className="pots__dl">
                              <dt className="pots__dt">Нина</dt>
                              <dd className="pots__dd-1">Dracena Fr.</dd>
                              <dd className="pots__dd-2">Полейте через 2 часа</dd>
                         </dl>
                         <div className="icons">
                              <img className="fire"
                                   src="./media/fire.svg"
                                   alt="fire"></img>
                              <img className="sunrise"
                                   src="./media/sunrise.svg"
                                   alt="sunrise"></img>
                              <img className="drops"
                                   src="./media/drops.svg"
                                   alt="drops"></img>
                              <img className="battery"
                                   src="./media/battery.svg"
                                   alt="battery"></img>
                         </div>
                         <div className="graf"></div>
                    </div>
               </div>
          </section>
     </main>
     <script src="./main.js"></script>
</body>
     </>
  );
}
