import moon from './images/icon-moon.svg';
import sun from './images/icon-sun.svg';
import {useState} from 'react';

export function Header() {
    const [theme, setTheme] = useState(0)
    const handleTheme = () => theme === 0 ? setTheme(1) : setTheme(0)
    
    return (
        <div className='header'>
            <h1 className="title">T O D O</h1>
            <label className="form-control">
            <img src={(theme === 1) ? sun : moon} alt="moon or sun"/>
                <input type="checkbox" onClick={handleTheme} name="theme-switch" id="theme-switch"/>
                </label>
            
        </div>
    )
}