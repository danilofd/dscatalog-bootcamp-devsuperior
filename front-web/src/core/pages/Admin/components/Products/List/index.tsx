import { useHistory } from 'react-router';
import './styles.scss';

function List(){
    const history = useHistory();

    const handleCreate = () => {
        history.push('/admin/products/create');
    }

    return(
        <div className=" ">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </button>
        </div>
    );
}

export default List;