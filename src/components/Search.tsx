import {type SyntheticEvent, useEffect, useState} from "react";
import {searchVisualNovel} from "../api/vndbApi.ts";
import {useNavigate, useSearchParams} from "react-router-dom";
import type {VisualNovelCardResult} from "../types.ts";
import ImageWrapper from "./VisualNovelPageComponents/ImageWrapper.tsx";

function Search() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);




    function handleClick(id: string) {
        navigate(`/vn/${id}`);
    }


    const [query, setQuery] = useState<string>(() => {
        const param = searchParams.get("q");
        if(param){
            setIsLoading(true);
            searchVisualNovel(param)
                .then(res => {
                    setResults(res)
                });
            return param;
        }
        return "";
    });
    const [results, setResults] = useState<VisualNovelCardResult[] | null>(null);

    function handleSearch(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        setSearchParams(prev => {
            if (query) {
                prev.set("q", query);
            } else {
                prev.delete("q");
            }
            return prev;
        });

        setIsLoading(true);
        searchVisualNovel(query)
            .then(res => {
                    setQuery("")
                setResults(res)
            });
    }

    useEffect(() => {
        if(!results){
            return;
        }
        setIsLoading(false);
    }, [results]);

    function resolveResultsScreen(){
        if(results === null) {
            return null;
        }
        if(isLoading){
            return <p>Loading...</p>
        }
        if(!results.length){
            return <p>No results found</p>
        }
        return results.map((result: VisualNovelCardResult) =>
            <div key={result.id} onClick={() => handleClick(result.id)} className="result-card">
                <div className="result-card-image-container">
                    <ImageWrapper image={result.image} handleClick={() => handleClick(result.id)} />
                </div>
                <p>{result.title}</p>
            </div>
        );

    }

    return (
        <div className="search">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="results">
                {resolveResultsScreen()}
            </div>
        </div>
    );

}

export default Search;