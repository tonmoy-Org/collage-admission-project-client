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
                        <h1 className="mb-5 text-4xl font-bold">Admission is going on</h1>
                    </div>
                </div>
            </div>
            <div className='mt-8 mb-20 grid lg:grid-cols-3 gap-10'>
                {searchResults.map(items => (
                    <SearchCard
                        key={items._id}
                        items={items}
                    ></SearchCard>
                ))}
            </div>
        </div>
    );
};

export default Search;