import Image from 'next/image';
import plantSmall from '@/public/choose/plant-small.png'
import { Title } from '@/app/lib/definitions';

export default function PlantCard (props: Title): JSX.Element {

    return (
    <div className="plant-cart">
        <div className="top"></div>
        <Image
            src={plantSmall}
            className="plant-small"
            alt={`plant-small`}
            />
            <img src="./media/plant-small.png" alt="" className="plant-small"/>
        <dl>
            <dt>{props.type}</dt>
            <dd>{props.title}</dd>
        </dl>
        {/* <img src="./media/fire.svg" alt="fire" className="fire"/>
        <img src="./media/sunrise.svg" alt="sunrise" className="sunrise"/>
        <img src="./media/drops.svg" alt="drops" className="drops"/> */}
    </div>
    ) 
    }