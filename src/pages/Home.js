import Testimonials from "../components/Testimonial";
 
const Home = () => {

    const featureData = [
        { name: 'Burger', item_counts: 11, img_url: 'assets/images/icons/food-icons/burger.png' },
        { name: 'Vegetables', item_counts: 11, img_url: 'assets/images/icons/food-icons/vegetable.png' },
        { name: 'Olive-oil', item_counts: 11, img_url: 'assets/images/icons/food-icons/olive-oil.png' },
        { name: 'Snack', item_counts: 11, img_url: 'assets/images/icons/food-icons/Snack.png' },
        { name: 'Coffee & Tea', item_counts: 11, img_url: 'assets/images/icons/food-icons/coffee-cup.png' },
        { name: 'Fruits', item_counts: 11, img_url: 'assets/images/icons/food-icons/fruits.png' },
    ]
    
    return (
        <>
            {/* Start Home Hero */}
            <div className="home-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="welcome-intro rounded-3 p-xxl-5 p-xl-4 p-2 h-100">
                                <h1>We Deliver Fresh Grocery At Your Door Step</h1>
                                <p className="mt-lg-3 mb-lg-4 mt-2 mb-0 text-uppercase">Get Fresh Grocery</p>
                                <button className="btn btn-primary btn-lg d-none d-lg-block">Shop Now</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="herobanner">
                                <div id="carouselExampleIndicators" className="carousel slide">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="assets/images/img/herobanner.jpg" className="d-block w-100 rounded-3" alt="banner-1" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/img/herobanner.jpg" className="d-block w-100 rounded-3" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/img/herobanner.jpg" className="d-block w-100 rounded-3" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Home Hero */}

            {/* Start Featured Category */}
            <section className="sec-pd" style={{ backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div>
                        <h2 className="sec-title">Featured Categories</h2>
                    </div>
                    <div className="row gy-sm-4 gy-3 gx-3">
                        {featureData.map((data, index) => {
                            return (
                                <div className="col-lg-2 col-md-3 col-sm-3 col-6" key={index}>
                                    <div className="featured-cat-box overflow-hidden bg-white">
                                        <a href="" className=" text-decoration-none">
                                            <div className="mb-3">
                                                <img src={data.img_url} height={60} width={60} className="mx-auto d-block" alt="burger" />
                                            </div>
                                            <div className="featured-text text-center">
                                                <h3 className="">{data.name}</h3>
                                                <p className="mb-0">{data.item_counts} Items</p>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            {/* Start Featured Category */}


            {/* Start Popular Products */}
            <section className="sec-pd">
                <div className="container">
                    <div>
                        <h2 className="sec-title">Popular Products</h2>
                    </div>

                    <div className="row gy-sm-4 gx-3 gy-3">

                        <div className="col-md-4 col-lg-3 col-xl-2 col-6">
                            <div className="product-item-box border overflow-hidden rounded-3 position-relative bg-white">
                                <div className="offer fw-500 font-14 position-absolute top-0 start-0">10%</div>
                                <div className="d-flex align-items-center justify-content-center product-img-box w-100">
                                    <img src="assets/images/products-image/img-1.jpg" height={160} width={200} className="img-fluid mx-auto" alt="product-image" />
                                </div>

                                <div className="product-content mt-3">
                                    <h3 className="">Harvest Gold 100% Whole Wheat Bread</h3>
                                    <ul className="nav star-rating align-items-center mb-0">
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/start-half-fill.png" height={14} width={14} /></li>
                                        <li className="fw-500 font-14 ps-1 rating-count">2,162</li>
                                    </ul>

                                    <div className="price-box mt-2"><span className="price-main fw-600">₹ 250</span><del className="ms-1 font-16 fw-500">300</del></div>
                                    <button className="btn btn-sm btn-light-green mt-3 w-100 fw-600">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-2 col-6">
                            <div className="product-item-box border overflow-hidden rounded-3 position-relative">
                                <div className="offer fw-500 font-14 position-absolute top-0 start-0">10%</div>
                                <div className="d-flex align-items-center justify-content-center product-img-box">
                                    <img src="assets/images/products-image/img-1.jpg" height={160} width={200} className="img-fluid mx-auto" alt="product-image" />
                                </div>

                                <div className="product-content mt-3">
                                    <h3 className="">Harvest Gold 100% Whole Wheat Bread</h3>
                                    <ul className="nav star-rating align-items-center mb-0">
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/start-half-fill.png" height={14} width={14} /></li>
                                        <li className="fw-500 font-14 ps-1 rating-count">2,162</li>
                                    </ul>

                                    <div className="price-box mt-2"><span className="price-main fw-600">₹ 250</span><del className="ms-1 font-16 fw-500">300</del></div>
                                    <button className="btn btn-sm btn-light-green mt-3 w-100 fw-600">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-2 col-6">
                            <div className="product-item-box overflow-hidden rounded-3 position-relative">
                                <div className="offer fw-500 font-14 position-absolute top-0 start-0">10%</div>
                                <div className="d-flex align-items-center justify-content-center product-img-box">
                                    <img src="assets/images/products-image/img-1.jpg" height={160} width={200} className="img-fluid mx-auto" alt="product-image" />
                                </div>

                                <div className="product-content mt-3">
                                    <h3 className="">Harvest Gold 100% Whole Wheat Bread</h3>
                                    <ul className="nav star-rating align-items-center mb-0">
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/start-half-fill.png" height={14} width={14} /></li>
                                        <li className="fw-500 font-14 ps-1 rating-count">2,162</li>
                                    </ul>

                                    <div className="price-box mt-2"><span className="price-main fw-600">₹ 250</span><del className="ms-1 font-16 fw-500">300</del></div>
                                    <button className="btn btn-sm btn-light-green mt-3 w-100 fw-600">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-2 col-6">
                            <div className="product-item-box overflow-hidden rounded-3 position-relative">
                                <div className="offer  fw-500 font-14 position-absolute top-0 start-0">10%</div>
                                <div className="d-flex align-items-center justify-content-center product-img-box">
                                    <img src="assets/images/products-image/img-1.jpg" height={200} width={200} className="img-fluid mx-auto" alt="product-image" />
                                </div>

                                <div className="product-content mt-3">
                                    <h3 className="">Harvest Gold 100% Whole Wheat Bread</h3>
                                    <ul className="nav star-rating align-items-center mb-0">
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/start-half-fill.png" height={14} width={14} /></li>
                                        <li className="fw-500 font-14 ps-1 rating-count">2,162</li>
                                    </ul>

                                    <div className="price-box mt-2"><span className="price-main fw-600">₹ 250</span><del className="ms-1 font-16 fw-500">300</del></div>
                                    <button className="btn btn-sm btn-light-green mt-3 w-100 fw-600">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-2 col-6">
                            <div className="product-item-box overflow-hidden rounded-3 position-relative">
                                <div className="offer  fw-500 font-14 position-absolute top-0 start-0">10%</div>
                                <div className="d-flex align-items-center justify-content-center product-img-box">
                                    <img src="assets/images/products-image/light-item.png" height={200} width={200} className="img-fluid mx-auto" alt="product-image" />
                                </div>

                                <div className="product-content mt-3">
                                    <h3 className="">Harvest Gold 100% Whole Wheat Bread</h3>
                                    <ul className="nav star-rating align-items-center mb-0">
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/start-half-fill.png" height={14} width={14} /></li>
                                        <li className="fw-500 font-14 ps-1 rating-count">2,162</li>
                                    </ul>

                                    <div className="price-box mt-2"><span className="price-main fw-600">₹ 250</span><del className="ms-1 font-16 fw-500">300</del></div>
                                    <button className="btn btn-sm btn-light-green mt-3 w-100 fw-600">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-2 col-6">
                            <div className="product-item-box overflow-hidden rounded-3 position-relative">
                                <div className="offer  fw-500 font-14 position-absolute top-0 start-0">10%</div>
                                <div className="d-flex align-items-center justify-content-center product-img-box">
                                    <img src="assets/images/products-image/light-item.png" height={160} width={200} className="img-fluid mx-auto" alt="product-image" />
                                </div>

                                <div className="product-content mt-3">
                                    <h3 className="">Harvest Gold 100% Whole Wheat Bread</h3>
                                    <ul className="nav star-rating align-items-center mb-0">
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/start-half-fill.png" height={14} width={14} /></li>
                                        <li className="fw-500 font-14 ps-1 rating-count">2,162</li>
                                    </ul>

                                    <div className="price-box mt-2"><span className="price-main fw-600">₹ 250</span><del className="ms-1 font-16 fw-500">300</del></div>
                                    <button className="btn btn-sm btn-light-green mt-3 w-100 fw-600">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* End Popular Products */}

            {/* Start Trending Products */}
            <section className="sec-pd bg-light">
                <div className="container">
                    <div>
                        <h2 className="sec-title">Trending Products</h2>
                    </div>

                    <div className="row row gy-sm-4 gx-3 gy-3">

                        <div className="col-md-4 col-lg-3 col-xl-2 col-6">
                            <div className="product-item-box border overflow-hidden rounded-3 position-relative bg-white">
                                <div className="offer fw-500 font-14 position-absolute top-0 start-0">10%</div>
                                <div className="d-flex align-items-center justify-content-center product-img-box w-100">
                                    <img src="assets/images/products-image/img-1.jpg" height={160} width={200} className="img-fluid mx-auto" alt="product-image" />
                                </div>

                                <div className="product-content mt-3">
                                    <h3 className="">Harvest Gold 100% Whole Wheat Bread</h3>
                                    <ul className="nav star-rating align-items-center mb-0">
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/start-half-fill.png" height={14} width={14} /></li>
                                        <li className="fw-500 font-14 ps-1 rating-count">2,162</li>
                                    </ul>

                                    <div className="price-box mt-2"><span className="price-main fw-600">₹ 250</span><del className="ms-1 font-16 fw-500">300</del></div>
                                    <button className="btn btn-sm btn-light-green mt-3 w-100 fw-600">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-2 col-6">
                            <div className="product-item-box border overflow-hidden rounded-3 position-relative bg-white">
                                <div className="offer  fw-500 font-14 position-absolute top-0 start-0">10%</div>
                                <div className="d-flex align-items-center justify-content-center product-img-box">
                                    <img src="assets/images/products-image/img-1.jpg" height={160} width={200} className="img-fluid mx-auto" alt="product-image" />
                                </div>

                                <div className="product-content mt-3">
                                    <h3 className="">Harvest Gold 100% Whole Wheat Bread</h3>
                                    <ul className="nav star-rating align-items-center mb-0">
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/start-half-fill.png" height={14} width={14} /></li>
                                        <li className="fw-500 font-14 ps-1 rating-count">2,162</li>
                                    </ul>

                                    <div className="price-box mt-2"><span className="price-main fw-600">₹ 250</span><del className="ms-1 font-16 fw-500">300</del></div>
                                    <button className="btn btn-sm btn-light-green mt-3 w-100 fw-600">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-2 col-6">
                            <div className="product-item-box overflow-hidden rounded-3 position-relative bg-white">
                                <div className="offer fw-500 font-14 position-absolute top-0 start-0">10%</div>
                                <div className="d-flex align-items-center justify-content-center product-img-box">
                                    <img src="assets/images/products-image/img-1.jpg" height={160} width={200} className="img-fluid mx-auto" alt="product-image" />
                                </div>

                                <div className="product-content mt-3">
                                    <h3 className="">Harvest Gold 100% Whole Wheat Bread</h3>
                                    <ul className="nav star-rating align-items-center mb-0">
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/start-half-fill.png" height={14} width={14} /></li>
                                        <li className="fw-500 font-14 ps-1 rating-count">2,162</li>
                                    </ul>

                                    <div className="price-box mt-2"><span className="price-main fw-600">₹ 250</span><del className="ms-1 font-16 fw-500">300</del></div>
                                    <button className="btn btn-sm btn-light-green mt-3 w-100 fw-600">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-2 col-6">
                            <div className="product-item-box overflow-hidden rounded-3 position-relative bg-white">
                                <div className="offer  fw-500 font-14 position-absolute top-0 start-0">10%</div>
                                <div className="d-flex align-items-center justify-content-center product-img-box">
                                    <img src="assets/images/products-image/img-1.jpg" height={200} width={200} className="img-fluid mx-auto" alt="product-image" />
                                </div>

                                <div className="product-content mt-3">
                                    <h3 className="">Harvest Gold 100% Whole Wheat Bread</h3>
                                    <ul className="nav star-rating align-items-center mb-0">
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/start-half-fill.png" height={14} width={14} /></li>
                                        <li className="fw-500 font-14 ps-1 rating-count">2,162</li>
                                    </ul>

                                    <div className="price-box mt-2"><span className="price-main fw-600">₹ 250</span><del className="ms-1 font-16 fw-500">300</del></div>
                                    <button className="btn btn-sm btn-light-green mt-3 w-100 fw-600">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-2 col-6">
                            <div className="product-item-box overflow-hidden rounded-3 position-relative bg-white">
                                <div className="offer  fw-500 font-14 position-absolute top-0 start-0">10%</div>
                                <div className="d-flex align-items-center justify-content-center product-img-box">
                                    <img src="assets/images/products-image/light-item.png" height={200} width={200} className="img-fluid mx-auto" alt="product-image" />
                                </div>

                                <div className="product-content mt-3">
                                    <h3 className="">Harvest Gold 100% Whole Wheat Bread</h3>
                                    <ul className="nav star-rating align-items-center mb-0">
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/start-half-fill.png" height={14} width={14} /></li>
                                        <li className="fw-500 font-14 ps-1 rating-count">2,162</li>
                                    </ul>

                                    <div className="price-box mt-2"><span className="price-main fw-600">₹ 250</span><del className="ms-1 font-16 fw-500">300</del></div>
                                    <button className="btn btn-sm btn-light-green mt-3 w-100 fw-600">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-2 col-6">
                            <div className="product-item-box overflow-hidden rounded-3 position-relative bg-white">
                                <div className="offer  fw-500 font-14 position-absolute top-0 start-0">10%</div>
                                <div className="d-flex align-items-center justify-content-center product-img-box">
                                    <img src="assets/images/products-image/light-item.png" height={160} width={200} className="img-fluid mx-auto" alt="product-image" />
                                </div>

                                <div className="product-content mt-3">
                                    <h3 className="">Harvest Gold 100% Whole Wheat Bread</h3>
                                    <ul className="nav star-rating align-items-center mb-0">
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/star-full-fill.png" height={14} width={14} /></li>
                                        <li><img src="assets/images/icons/start-half-fill.png" height={14} width={14} /></li>
                                        <li className="fw-500 font-14 ps-1 rating-count">2,162</li>
                                    </ul>

                                    <div className="price-box mt-2"><span className="price-main fw-600">₹ 250</span><del className="ms-1 font-16 fw-500">300</del></div>
                                    <button className="btn btn-sm btn-light-green mt-3 w-100 fw-600">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* End Trending Products */}

            {/* Start Top Category */}
            <section className="sec-pd" >
                <div className="container">
                    <div className="row gx-3 top-category-row hide-default-scrollbar">
                        <div className="col-xl-4 col-lg-5 col-md-7 col-sm-8 col-11">
                            <div className="top-category position-relative">
                                <img src="assets/images/img/banner-1.png" className="img-fluid rounded" alt="banner-4" />
                                <div className="banner-text position-absolute bottom-50 start-0 px-sm-5 px-4">
                                    <h4 className="fw-700">Every day fresh <br /> & clean with our <br /> products</h4>
                                    <button className="btn btn-green mt-3">Shop Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-5 col-md-7 col-sm-8 col-11">
                            <div className="top-category position-relative">
                                <img src="assets/images/img/banner-2.png" className="img-fluid rounded" alt="banner-2" />
                                <div className="banner-text position-absolute bottom-50 start-0 px-sm-5 px-4">
                                    <h4 className="fw-700">Every day fresh <br /> & clean with our <br /> products</h4>
                                    <button className="btn btn-green mt-3">Shop Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-5 col-md-7 col-sm-8 col-11">
                            <div className="top-category position-relative">
                                <img src="assets/images/img/banner-3.png" className="img-fluid rounded" alt="banner-3" />
                                <div className="banner-text position-absolute bottom-50 start-0 px-sm-5 px-4">
                                    <h4 className="fw-700">Every day fresh <br /> & clean with our <br /> products</h4>
                                    <button className="btn btn-green mt-3">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Top Category */}

            {/* Start Testimonials */}
            <section className="sec-pd bg-light" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <Testimonials />
                        </div>
                    </div>
                </div>
            </section>
            {/* End Testimonials */}

            {/* Start service features */}
            <section className="sec-pd" >
                <div className="container">
                    <div className="row gy-4 gx-3">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="featured-service-box d-flex align-items-center  py-3 px-3 overflow-hidden ">
                                <div className="">
                                    <img src="assets/images/icons/price-tag.png" height={60} width={60} className="mx-auto d-block" alt="burger" />
                                </div>
                                <div className="ms-3">
                                    <h3 className="font-16 mb-1">Best price and offer</h3>
                                    <p className="mb-0 font-14"> Order ₹ 50 or more</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="featured-service-box d-flex align-items-center  py-3 px-3 overflow-hidden ">
                                <div className="">
                                    <img src="assets/images/icons/delivery.png" height={60} width={60} className="mx-auto d-block" alt="burger" />
                                </div>
                                <div className="ms-3">
                                    <h3 className="font-16 mb-1">Free delivery</h3>
                                    <p className="mb-0 font-14"> 24/7 Amazing service</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="featured-service-box d-flex align-items-center  py-3 px-3 overflow-hidden ">
                                <div className="">
                                    <img src="assets/images/icons/best-deal.png" height={60} width={60} className="mx-auto d-block" alt="burger" />
                                </div>
                                <div className="ms-3">
                                    <h3 className="font-16 mb-1">Best Deal</h3>
                                    <p className="mb-0 font-14"> When youb sigh up</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="featured-service-box d-flex align-items-center  py-3 px-3 overflow-hidden ">
                                <div className="">
                                    <img src="assets/images/icons/easy-returns.png" height={60} width={60} className="mx-auto d-block" alt="burger" />
                                </div>
                                <div className="ms-3">
                                    <h3 className="font-16 mb-1">Easy returns</h3>
                                    <p className="mb-0 font-14">With in 10 days</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* End service features */}


        </>
    )
}

export default Home;