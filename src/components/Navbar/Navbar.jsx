import './Navbar.css';

const Nav = () => {

    return (
        <div className='nav'>
            <img alt='logo' className='logo' src={`${import.meta.env.BASE_URL}logo.png`} />
            <ul className='nav-ul nav-right'>
                <li>
                    <a href="https://medicaps.acm.org/index/">MUACM</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav;