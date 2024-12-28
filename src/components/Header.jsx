import bagIcon from '../../public/images/bag-icon.svg'


const Header = () => {
  return (
    <header id='header'>
      <div className="container">
        <nav className='navbar'>
          <h4>Redux Shopping Cart</h4>
          <div title="Cart" className="cart_icon">
            <img src={bagIcon} alt="bag-icon" />
            <span className="badge">0</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header