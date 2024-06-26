import banner from '../../../assets/banner/banner.png'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="lg:w-6/12" />
                    <div className='lg:w-6/12 '>
                        <h1 className="text-5xl font-bold">Classical
                            Education For
                            The Future</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary rounded-none">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;