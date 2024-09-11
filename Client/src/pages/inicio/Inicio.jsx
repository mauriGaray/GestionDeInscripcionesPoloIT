import { Login } from '../../components/forms/login/Login';

import './inicio.css';

export const Inicio = () => {
    return (
        <div className="inicio">
            <div className="inicio-container">
                <Login/>
                <div className="inicio-ilust">
                    <img src="./public/inicio-il.png" alt="" />
                </div>    
            </div>
        </div>
    )
}