import './Header.css';
import { useHistory } from 'react-router-dom';



export default function Header() {
    
    const history = useHistory();
    
    function moveHome() {
        console.log('moved');
        history.push('/home');
    }
    return (
    <div id="header">
        <h1 id="movie-saga"><span id='click-move'
        onClick={moveHome}
        >watch saga</span></h1>
    </div>
    )
}