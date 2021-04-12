import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import Products from './components/Products';
import './styles.scss';

function Admin(){
    return (
        <div className="admin-container">
            <Navbar />
            <div className="admin-content">
                <Switch>
                    <Route path="/admin/products">
                        <Products />
                    </Route>
                    <Route path="/admin/categories">

                    </Route>
                    <Route path="/admin/users">

                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Admin;