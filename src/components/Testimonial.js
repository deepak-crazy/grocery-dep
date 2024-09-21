const Testimonials = () => {
    return (
        <>
            
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleAutoplaying " data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying " data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying " data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="testimonial-box bg-white rounded-3">
                            <h2 className="sec-title text-center mb-4">Testimonials</h2>
                            <div className="text-center">
                                <div className="testimonial-img p-3">
                                    <img src="assets/images/img/testi-img.jpg" className="rounded-circle" alt="testi-one-img" height={120} width={120} />

                                </div>
                                <div className="testimonial-text">

                                    <p className="position-relative"><em>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard book.</em></p>
                                    <div className="testi-client-name">
                                        <h3 className="font-16 mt-3 mb-0 fw-600 text-center">Yuan Wan soo</h3>
                                        <span className="font-14">Hajipur</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="testimonial-box bg-white rounded-3">
                            <h2 className="sec-title text-center mb-4">Testimonials</h2>
                            <div className="text-center">
                                <div className="testimonial-img p-3">
                                    <img src="assets/images/img/testi-img.jpg" className="rounded-circle" alt="testi-one-img" height={120} width={120} />

                                </div>
                                <div className="testimonial-text">

                                    <p className="position-relative"><em>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard book.</em></p>
                                    <div className="testi-client-name">
                                        <h3 className="font-16 mt-3 mb-0 fw-600 text-center">Yuan Wan soo</h3>
                                        <span className="font-14">Hajipur</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="testimonial-box bg-white rounded-3">
                            <h2 className="sec-title text-center mb-4">Testimonials</h2>
                            <div className="text-center">
                                <div className="testimonial-img p-3">
                                    <img src="assets/images/img/testi-img.jpg" className="rounded-circle" alt="testi-one-img" height={120} width={120} />

                                </div>
                                <div className="testimonial-text">

                                    <p className="position-relative"><em>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard book.</em></p>
                                    <div className="testi-client-name">
                                        <h3 className="font-16 mt-3 mb-0 fw-600 text-center">Yuan Wan soo</h3>
                                        <span className="font-14">Hajipur</span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                
                </div>
        </>
    )
}

export default Testimonials;