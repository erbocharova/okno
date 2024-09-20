import './PromoPage.css';
import { Link } from 'react-router-dom';

export const PromoPage = () => {
    return (
        <div className="PromoPage">
            <h2>Акции</h2>
            <p>Уже готовим интересные предложения для Вас!</p>
            
            <div className='Link'>
                <Link to={'/'}>На главную</Link>
            </div>
        </div>
    );
}