const SearchParams = () => {
    const location = "Wellington, Wellington";
    return(
        <div className="search-params">
            <form action="">
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="location" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;