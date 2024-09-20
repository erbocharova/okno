import './App.css';
import { NewsPage } from './components/NewsPage/NewsPage';
import { ContactInfoPage } from './components/ContactInfoPage/ContactInfoPage';
import { PromoPage } from './components/PromoPage/PromoPage';
import { OrganizationPage } from './components/OrganizationPage/OrganizationPage';
import { PricePage } from './components/PricePage/PricePage';
import { Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <div className='Header'>
          <h2>OkNo.ru</h2>
          <img src='/assets/logo.png' alt='logo' width={100} height={100}/>
         </div>

        <div className='MainPage'>

          <section className='Section'>
            <div className='Links'>
              <Link to={'/news'}>Новости</Link> &nbsp;
              <Link to={'/price'}>Продукты и услуги</Link> &nbsp;
              <Link to={'/promo'}>Акции</Link> &nbsp;
              <Link to={'/contacts'}>Контакты</Link>
            </div>

            <div className='Banners'>
                <img src='/assets/banner1.jpg' alt='Как правильно замерить окно?'/>
                <p><a href='https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D0%BA%D0%BB%D0%BE%D0%BF%D0%B0%D0%BA%D0%B5%D1%82?'>Что такое стеклопакет?</a></p>
           </div>
          </section>

          <article className='Content'>
            <Routes>
              <Route path='' element={<OrganizationPage />}></Route>;
              <Route path='/contacts' element={<ContactInfoPage />}></Route>;
              <Route path='/promo' element={<PromoPage />}></Route>;
              <Route path='/news' element={<NewsPage />}></Route>;
              <Route path='/price' element={<PricePage />}></Route>;
            </Routes>
          </article>
        </div>

        <div class="Footer">
          <p><b>OkNo.ru</b> — пластиковые окна в Ростове-на-Дону высочайшего качества. <a href="tel:12345678900">Бесплатная консультация по номеру: +1 234 567-89-00</a></p>
          <p>Разработка сайта — <a href="ebocharova@sfedu.ru">Бочарова Екатерина</a></p>
        </div>
      </div>
  );
}

export default App;
