import './NewsPage.css';
import { Link } from 'react-router-dom';

export const NewsPage = () => {
    return (
        <div className="NewsPage">
            <h2>Новости</h2>

            <p><time datetime="2024-07-07">7 июля 2024</time> Elementum fringilla pellentesque porta non orci blandit eleifend egestas ac. Luctus bibendum euismod tempus tortor posuere erat. Conubia mi consequat fringilla a lectus felis dictum. Quam scelerisque eget libero ornare proin taciti; cras efficitur quisque. Blandit vulputate lacus varius velit, consectetur velit augue. Sed cursus iaculis metus congue, malesuada felis magna. Leo nascetur fermentum morbi himenaeos cras est morbi integer. Est maximus pulvinar imperdiet gravida posuere hendrerit himenaeos neque. Luctus condimentum integer habitant per egestas.</p> 

            <p><time datetime="2024-05-30">30 мая 2024</time> Porttitor quisque nunc posuere; eget phasellus porta viverra conubia inceptos. Sagittis massa aptent vehicula nostra aliquet dapibus eu. Mollis ridiculus odio eleifend conubia class neque. Eleifend consectetur sed erat sed; tincidunt aliquet aptent rutrum. Mauris vivamus metus dictumst; bibendum vivamus sapien eros leo. Enim phasellus pulvinar consequat vel leo pharetra dapibus. Massa praesent eu; ullamcorper nibh etiam rhoncus orci. Nibh praesent pellentesque dis aptent arcu volutpat porta tincidunt. Dui rutrum ultricies turpis; quam hendrerit cras. Convallis ut pretium ante proin placerat blandit.</p>

            <p><time datetime="2020-02-23">23 февраля 2020</time> Lectus venenatis eleifend gravida a, libero suscipit cursus primis. Lobortis metus diam feugiat elit fusce primis. Non id velit convallis nullam ipsum scelerisque malesuada ac faucibus. Non dui fringilla donec ornare, molestie lacinia nascetur dictumst elit. Consequat justo magnis ad et aenean class mattis? Bibendum commodo lobortis feugiat pretium feugiat. Non dis finibus cubilia nisi ad porttitor? Leo hendrerit ullamcorper gravida dui risus montes ipsum potenti quisque.</p>

            <p><time datetime="2017-08-10">10 августа 2017</time> Erat integer mollis fames torquent nascetur sagittis non himenaeos. Ad viverra auctor purus eros laoreet porta elit. Vulputate ante sapien nullam arcu; ex cursus. Vel pulvinar urna dolor ullamcorper sed aenean. Commodo in aliquet quam ullamcorper dapibus luctus primis finibus. Massa sit feugiat urna nam tortor sociosqu? Porttitor cras non vitae viverra sollicitudin ac dolor taciti.</p>

            <p><time datetime="2015-11-18">18 ноября 2015</time> Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient justo primis risus faucibus congue. Molestie magnis felis vestibulum sit, natoque iaculis amet facilisis. Consectetur malesuada sollicitudin commodo dis consequat tristique. Justo tristique risus ridiculus sed dignissim dignissim sollicitudin taciti. Ullamcorper lacus convallis vulputate penatibus congue nibh platea. Per vehicula ad velit id sollicitudin class turpis. Congue inceptos purus sem sed ut. Montes eget lacinia ridiculus himenaeos laoreet pretium porta interdum.</p>
        
            
            <div className='Link'>
                <Link to={'/'}>На главную</Link>
            </div>

        </div>
        

    );
}