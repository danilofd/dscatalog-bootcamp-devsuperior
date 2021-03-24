import { ReactComponent as MainImage } from '../../../core/assets/images/main-image.svg';
import ButtonIcon from '../../components/ButtonIcon';
import { Link } from 'react-router-dom'
import './styles.scss';

function Home() {
    return (
        <div className="home-container">
            <div className="row home-content">
                <div className="col-6 home-text">
                    <h1 className="text-title">Conheça o melhor <br /> catálogo de produtos</h1>
                    <p className="text-subtitle">
                        Ajudaremos você a encontrar os melhores <br /> produtos disponíveis no mercado.
                    </p>
                    <Link to="/catalog">
                        <ButtonIcon text="Inicie agora a sua busca" />
                    </Link>
                </div>
                <div className="col-6">
                    <MainImage className="main-image" />
                </div>
            </div>
        </div>
    );
}

export default Home;