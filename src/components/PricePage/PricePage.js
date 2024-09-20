import './PricePage.css';
import { Link } from 'react-router-dom';

export const PricePage = () => {
    return (
        <div className="PricePage">
            <h2>Стоимость услуг</h2>
            <table class="price">
	            <tbody>
		            <tr>
			            <td>Услуга</td>
			            <td>Стоимость</td>
		            </tr>
		            <tr>
			            <td>Изготовление окна (одностворчатое)</td>
			            <td>от 5 000 руб.</td>
		            </tr>
		            <tr>
			            <td>Изготовление окна (двухстворчатое)</td>
			            <td>от 8 000 руб.</td>
		            </tr>
		            <tr>
			            <td>Изготовление окна (трёхстворчатое)</td>
			            <td>от 13 000 руб.</td>
		            </tr>
		            <tr>
			            <td>Изготовление окна по индивидуальным размерам</td>
			            <td>от 2 000 руб.</td>
		            </tr>
		            <tr>
			            <td>Изготовление москитной сетки</td>
			            <td>от 1 500 руб.</td>
		            </tr>
                    <tr>
			            <td>Остекление балкона</td>
			            <td>от 7 000 руб. (кв.м)</td>
		            </tr>
	            </tbody>
            </table>
            
            <div className='Link'>
                <Link to={'/'}>На главную</Link>
            </div>
        </div>
    );
}