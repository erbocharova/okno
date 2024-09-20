import './ContactInfoPage.css';
import { Link } from 'react-router-dom';

export const ContactInfoPage = () => {
    return (
        <div className="ContactInfoPage">
            <h2>Как с нами связаться</h2>
            <address>
                <p>Бесплатную консультацию и расчёт стоимости работ Вы можете получить, позвонив по номеру <a href="tel:12345678900">+1 234 567-89-00</a> или отправив письмо
                 на <a href="okno@window.ru">okno@window.ru</a>.</p>

                <p>Телефон мастерской: <a href="tel:12345678901">+1 234 567-89-01</a>.</p>

                <p>Адрес мастерской: г. Ростов-на-Дону, ул. Мильчакова, д.8а.</p>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15331.782445708526!2d39.62787364486351!3d47.210676137463466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9a8f82b0a17%3A0xd9233ce383e6c05e!2z0JjQvdGB0YLQuNGC0YPRgiDQvNCw0YLQtdC80LDRgtC40LrQuCwg0LzQtdGF0LDQvdC40LrQuCDQuCDQutC-0LzQv9GM0Y7RgtC10YDQvdGL0YUg0L3QsNGD0Log0LjQvC4g0Jgu0JguINCS0L7RgNC-0LLQuNGH0LA!5e0!3m2!1sru!2sru!4v1726558981254!5m2!1sru!2sru" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </address>
            
            <div className='Link'>
                <Link to={'/'}>На главную</Link>
            </div>
        </div>

    );
}