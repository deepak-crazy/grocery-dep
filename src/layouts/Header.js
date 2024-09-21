

const Header = () => {
    return (
        <>
            <header className="header fixed-top py-4 bg-white">
                <nav>
                    <div className="container">
                        <div className="navigation-container d-flex  flex-wrap flex-lg-nowrap justify-content-between align-items-center">
                            <div className="navigation-logo mb-3 mb-lg-0">
                                <a href=""><img src="assets/images/logo/logo.png" width={170} height={52} className="img-fluid" /></a>
                            </div>
                            <div className="navigation-search-box order-3 order-md-2">
                                <form className="d-flex p-1 rounded-3">
                                    <input className="form-control border-0 bg-tranceparent" placeholder="Search for product brand or catergory" />
                                    <button className="btn d-flex align-items-center" type="submit"><img src="assets/images/icons/search.png" width={16} height={16} /><span className="d-none d-lg-block ms-2">Search</span></button>
                                </form>
                            </div>
                            <div className="navigation-right-area order-md-3">
                                <ul className="d-flex mb-0">
                                    <li className="me-md-4 me-2 me-lg-3">
                                        <a href="" className="position-relative">
                                            <img src="assets/images/icons/heart.png" width={24} height={24} className="me-3"></img>
                                            <span class="badge position-absolute">4</span>
                                            <span className="d-none d-lg-block">Wishlist</span>
                                        </a>
                                    </li>
                                    <li className="me-md-4 me-2 me-lg-3">
                                        <a href="" className="position-relative">
                                            <img src="assets/images/icons/shopping-cart.png" width={24} height={24} className="me-3"></img>
                                            <span class="badge position-absolute">4</span>
                                            <span className="d-none d-lg-block">Cart</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=""><img src="assets/images/icons/user.png" width={24} height={24} className="me-3"></img>
                                            <span className="d-none d-lg-block">Account</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;
