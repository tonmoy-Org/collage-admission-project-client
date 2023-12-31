import { useLocation } from 'react-router-dom';
import SearchCard from './SearchCard';


const Search = () => {
    const location = useLocation();
    const searchResults = JSON.parse(decodeURIComponent(new URLSearchParams(location.search).get('results')));
    return (
        <div>
            <div className="hero h-40 bg-fixed" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Our Collage</h1>
                    </div>
                </div>
            </div>
            {searchResults?.length === 0 ? <p className="w-16 mx-auto"><span className="loading loading-spinner text-primary w-16"></span></p> :
                <div className='grid lg:grid-cols-3 lg:w-9/12 mt-8 mb-20 mx-auto gap-8'>
                    {searchResults.map(items => (
                        <SearchCard
                            key={items._id}
                            items={items}
                        ></SearchCard>
                    ))}
                </div>}
        </div>
    );
};

export default Search;