import {type SyntheticEvent, useEffect, useState} from "react";
import {searchVisualNovel} from "../api/vndbApi.ts";
import type {VisualNovelSearchResult} from "../api/apiTypes.ts";
import {Link, useNavigate} from "react-router-dom";
import type {VisualNovelCardResult} from "../types.ts";
import ImageWrapper from "./VisualNovelPageComponents/ImageWrapper.tsx";

function Search() {
    const navigate = useNavigate();

    function handleClick(id: string) {
        navigate(`/vn/${id}`);
    }

    useEffect(() => {
        const storedQuery = sessionStorage.getItem("vndb-browser-query");
        if (!storedQuery) {
            return;
        }
        searchVisualNovel(storedQuery)
            .then(res => {
                setResults(res)
            });
    }, []);

    const [query, setQuery] = useState<string>("");
    const [results, setResults] = useState<VisualNovelCardResult[]>([]);

    function handleSearch(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        searchVisualNovel(query)
            .then(res => {
                sessionStorage.setItem("vndb-browser-query", query)
                console.log(res)
                setQuery("")
                setResults(res)
            });
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
                {results.map((result: VisualNovelCardResult) =>
                    <div key={result.id} onClick={() => handleClick(result.id)} className="result-card">
                        <div className="result-card-image-container">
                            <ImageWrapper image={result.image} handleClick={() => handleClick(result.id)} />
                        </div>
                        <p>{result.title}</p>
                    </div>
                )}
            </div>
        </div>
    );

}

export default Search;