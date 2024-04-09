import './page.css';
import Image from 'next/image'
import sadFace from '../public/sad-face.svg';
import smileFace from '../public/smile-face.svg';
import magnifyingGlass from '../public/magnifying-glass.svg'
import plus from '../public/plus.svg';
import branch from '../public/branch.svg';
import arrowRightCircle from '../public/arrow-right-circle.svg';
import notifyPlant from '../public/notify-plant.svg';
import plantFaceSick from '../public/plant-face-sick.svg';
import snow from '../public/snow.svg';
import battery from '../public/battery.svg';
import fire from '../public/fire.svg';
import sunrise from '../public/sunrise.svg';
import drops from '../public/drops.svg';
import potsPlant from '../public/pots-plant.svg';
import potsSmileFace from '../public/pots-smile-face.svg';
import potsPlant1 from '../public/pots-plant-1.svg';
import a from '../public/.svg';
import b from '../public/.svg';
import styles from './page.module.css';

export default function Home() {
  return (
     <>
     <body>
     <header className="header">
          <div className="search-header">
               <Image className="magnifying-glass"
                    src={magnifyingGlass} 
                    alt="лупа"/>
               <input type="search" 
                      className="search"
                      value="Найти"/>
          </div>
          <div className="slider-main">
               <Image  className="sad-face"
                    src={sadFace}
                    alt="sad face"/>
               <div className="slider-background"
                    ></div>
               <Image className="smile-face"
                    src={smileFace}
                    alt="smile face"/>
          </div>
          <button className="header__button">
               <Image className="plus"
                    src={plus} 
                    alt="plus"/>
               <Image className="branch"
                    src={branch}
                    alt="branch"/>
          </button>
     </header>
     <main className="main">
          <div className="arrows">
               <div className="arrow-left">
                    <Image src={arrowRightCircle} alt="arrow"/>
               </div>
               <div className="arrow-right">
                    <Image src={arrowRightCircle} alt="arrow"/>
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
                    <Image className="notify__plant"
                         src={notifyPlant} 
                         alt="plant" />
                    <Image className="plant-face-sick" 
                         src={plantFaceSick} 
                         alt="plant face sick" />
                    <Image className="snow"
                         alt="snow" 
                         src={snow}/>
                    <div className="icons">
                         <Image className="battery"
                              src={battery} 
                              alt="battery"/>
                         <Image className="fire"
                              src={fire} 
                              alt="fire"/>
                         <Image className="sunrise"
                              src={sunrise} 
                              alt="sunrise"/>
                         <Image className="drops"
                              src={drops} 
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
                    <Image className="notify__plant"
                         src={notifyPlant} 
                         alt="plant" />
                    <Image className="plant-face-sick" 
                         src={plantFaceSick} 
                         alt="plant face sick" />
                    <Image className="snow"
                         alt="snow" 
                         src={snow}/>
                    <div className="icons">
                         <Image className="battery"
                              src={battery} 
                              alt="battery"/>
                         <Image className="fire"
                              src={fire} 
                              alt="fire"/>
                         <Image className="sunrise"
                              src={sunrise} 
                              alt="sunrise"/>
                         <Image className="drops"
                              src={drops} 
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
                         <Image className="pots__plant"
                              src={potsPlant} 
                              alt="plant" />
                         <Image className="pots__plant-face" 
                              src={potsSmileFace} 
                              alt="plant face" />
                         <dl className="pots__dl">
                              <dt className="pots__dt">Нина</dt>
                              <dd className="pots__dd-1">Dracena Fr.</dd>
                              <dd className="pots__dd-2">Полейте через 2 часа</dd>
                         </dl>
                         <div className="icons">
                              <Image className="battery"
                                   src={battery} 
                                   alt="battery"/>
                              <Image className="fire"
                                   src={fire} 
                                   alt="fire"/>
                              <Image className="sunrise"
                                   src={sunrise} 
                                   alt="sunrise"/>
                              <Image className="drops"
                                   src={drops} 
                                   alt="drops"/>
                         </div>
                         <div className="graf"></div>
                    </div>
                    <div className="point-2">
                         <div className="top"></div>
                         <Image className="pots__plant"
                              src={potsPlant1} 
                              alt="plant" />
                         <Image className="pots__plant-face" 
                              src={potsSmileFace} 
                              alt="plant face" />
                         <dl className="pots__dl">
                              <dt className="pots__dt">Таня</dt>
                              <dd className="pots__dd-1">Dracena Fr.</dd>
                              <dd className="pots__dd-2">Завтра поставьте в менее жаркое место</dd>
                         </dl>
                         <div className="icons">
                              <Image className="battery"
                                   src={battery} 
                                   alt="battery"/>
                              <Image className="fire"
                                   src={fire} 
                                   alt="fire"/>
                              <Image className="sunrise"
                                   src={sunrise} 
                                   alt="sunrise"/>
                              <Image className="drops"
                                   src={drops} 
                                   alt="drops"/>
                         </div>
                         <div className="graf"></div>
                    </div>
                    <div className="point-3">
                         <div className="top"></div>
                         <Image className="pots__plant"
                              src={potsPlant} 
                              alt="plant" />
                         <Image className="pots__plant-face" 
                              src={potsSmileFace} 
                              alt="plant face" />
                         <dl className="pots__dl">
                              <dt className="pots__dt">Нина</dt>
                              <dd className="pots__dd-1">Dracena Fr.</dd>
                              <dd className="pots__dd-2">Полейте через 2 часа</dd>
                         </dl>
                         <div className="icons">
                              <Image className="battery"
                                   src={battery} 
                                   alt="battery"/>
                              <Image className="fire"
                                   src={fire} 
                                   alt="fire"/>
                              <Image className="sunrise"
                                   src={sunrise} 
                                   alt="sunrise"/>
                              <Image className="drops"
                                   src={drops} 
                                   alt="drops"/>
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
