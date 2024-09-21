const Footer = () => {
return (
    <>
    <footer className="footer">
        <div className="container ">
            <div className="row justify-content-between">
                <div className="col-xl-3 col-lg-6 col-md-6 col-12 mb-sm-0 mb-3">
                    <div className="footer-brand-img">
                    <a href=""><img src="assets/images/logo/logo.png" width={170} height={52} className="img-fluid" /></a>
                    </div>
                    <div className="footer-about-name light-text mt-3">
                        <p className="font-14 light-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard book. </p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                     <div className="footer-title-heading">
                        <h3 className="font-18 fw-500 mb-3 text-white">Company</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="" className="light-text text-decoration-none font-14">Home</a></li>
                            <li className="mb-2"><a href="" className="light-text text-decoration-none font-14">About</a></li>
                            <li className="mb-2"><a href="" className="light-text text-decoration-none font-14">Terms & Conditions</a></li>
                            <li className="mb-2"><a href="" className="light-text text-decoration-none font-14">Privacy & Policy</a></li>
                            <li className="mb-2"><a href="" className="light-text text-decoration-none font-14">Contact Us</a></li>
                            <li><a href="" className="light-text text-decoration-none font-14">Careers</a></li>

                        </ul>
                     </div>
                </div>

                <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                     <div className="footer-title-heading">
                        <h3 className="font-18 fw-600 mb-3 text-white">Populer Products</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="" className="light-text text-decoration-none font-14">Sandwich Bread</a></li>
                            <li className="mb-2"><a href="" className="light-text text-decoration-none font-14">Milk & Flavoured Milk</a></li>
                            <li className="mb-2"><a href="" className="light-text text-decoration-none font-14">Butter and Margarine</a></li>
                            <li className="mb-2"><a href="" className="light-text text-decoration-none font-14">Eggs Substitutes</a></li>
                            <li className="mb-2"><a href="" className="light-text text-decoration-none font-14">Marmalades</a></li>
                            <li><a href="" className="light-text text-decoration-none font-14">Cheese</a></li>

                        </ul>
                     </div>
                </div> 

                <div className="col-xl-3 col-lg-8 col-md-12 mt-xl-0 mt-lg-4">
                     <div className="footer-title-heading pt-sm-0 pt-4">
                        <h3 className="font-18 fw-500 mb-4 text-white">Get the latest information</h3>
                        <form className="d-flex rounded-3 overflow-hidden">
                            <input className="form-control border-0 bg-transparent" placeholder="Enter Email Address" />
                            <button className="btn btn-green" type="submit"><img src="assets/images/icons/navigation.png" width={20} height={20} /></button>
                        </form>
                     </div>
                </div> 

                
            </div>
            {/* <hr className="border border-light mb-4"></hr> */}
            <div className="row justify-content-between footer-bottom-row">
                <div className="col-12 col-lg-7 col-md-6 mb-2 mb-sm-0">
                    <p className="light-text mb-0 text-sm-start text-center">All Copyrights Reserved 2024 By Local Shop </p>
                </div>
                <div className="col-12 col-lg-5 col-md-6">
                  <ul className="nav justify-content-sm-end justify-content-center mb-0">
                    <li className="border-end border-light pe-2"><a href="" className="light-text text-decoration-none">Terms & Conditions</a></li>
                    <li><a href="" className="light-text text-decoration-none ps-2">Privacy & Policy</a></li>
                  </ul>
                </div>
            </div>
        </div>

    </footer>
    </>
)
}
export default Footer;