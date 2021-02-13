import React from 'react';
import { Link } from 'react-router-dom';

class Navigator extends React.Component{
    render(){
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/about">Sobre</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
} 

export default Navigator;