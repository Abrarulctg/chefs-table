import './Banner.css';
// import bannerImg from '../../assets/banner.png';
// import img from '../../assets/banner.png';
const Banner = () => {
    return (
        <div>
            <div className="text-white  text-center p-4 lg:p-[110px] bg-contain bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/Tgvy2Vf/banner.png' }}>
                <h1 className="mb-6 font-bold text-[26px] lg:text-[52px]">Discover an exceptional cooking class tailored for you!</h1>
                <p className="text-base mb-10">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className="flex justify-center gap-5">
                    <button className="btn btn-chef-primary rounded-full ">Explore Now</button>
                    <button className="btn rounded-full bg-transparent text-white hover:text-black border-2 hover:bg-white">Our Feedback</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;