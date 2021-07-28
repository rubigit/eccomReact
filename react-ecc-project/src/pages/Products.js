import React, { useState } from 'react'
import Layout from 'components/Layout'
import SearchResults from 'components/SearchResults'


const Products = ({ data }) => {


    // ------------------------------------------------------

    //here: filters (category, sorting), search, etc here
    //here: filtered array
    const searchResult = data
    console.log(`Test3: Products.js`,)
    console.log(`data from Products`, data)


    // -----------------------------------------------------

    return (
        <Layout>

            <form className="filters">
                <button type="button" className="filter-opt-button Content FilterOpen">Filter options</button>
                {/* <!-- <h2 className="">Filters</h2> --> */}
                {/* <!-- toggle hide classs --> */}
                <div className="filter-btn-collectio hide">
                    <button type="button" id="btnClearFilter" className="clear-filter ">Clear all filters</button>
                    <button type="button" id="btnApplyFilter" className="aplly-filter ">Apply Filters</button>
                </div>
                {/* <!-- toggle hide classs --> */}
                <div className="filter-options hide">
                    <fieldset>
                        <legend>Lamp category</legend>
                        <ul id="filterCategory" className="filter-list">
                            <li><input type="checkbox" name="type" value="desk" id="desk" /> <label htmlFor="desk">Desk &#38; table lamps</label></li>
                            <li><input type="checkbox" name="type" value="floor" id="floor" /> <label htmlFor="floor">Floor lamps</label> </li>
                            <li><input type="checkbox" name="type" value="wall" id="wall" /> <label htmlFor="wall">Wall lamps</label></li>
                            <li><input type="checkbox" name="type" value="chandelier" id="chandelier" /> <label htmlFor="chandelier">Chandelier</label></li>
                        </ul>
                    </fieldset>
                    <fieldset>
                        <legend>Lamp finish</legend>
                        <ul id="filterLampFinish" className="filter-list">
                            <li><input type="checkbox" name="color" value="black" id="black" /> <label htmlFor="black">Black</label></li>
                            <li><input type="checkbox" name="color" value="white" id="white" /> <label htmlFor="white">White</label></li>
                            <li><input type="checkbox" name="color" value="grey" id="grey" /> <label htmlFor="grey">Grey</label></li>
                            <li><input type="checkbox" name="color" value="gold" id="gold" /> <label htmlFor="gold">Gold</label></li>
                            <li><input type="checkbox" name="color" value="brown" id="brown" /> <label htmlFor="brown">Brown</label>
                            </li>
                        </ul>
                    </fieldset>
                    <fieldset>
                        <legend>Light bulb type</legend>
                        <ol id="filterBulbType" className="filter-list">
                            <li><input type="checkbox" name="bulb" value="inc" id="inc" /> <label htmlFor="inc">Incandescent</label></li>
                            <li><input type="checkbox" name="bulb" value="led" id="led" /> <label htmlFor="led">Led</label></li>
                        </ol>
                    </fieldset>
                    <fieldset>
                        <legend>Ratings (above)</legend>
                        <ol className="filter-list">
                            <li>
                                <input type="radio" name="rating" value="4" id="aboveFour" />
                                <label htmlFor="aboveFour"><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span></label>
                            </li>
                            <li>
                                <input type="radio" name="rating" value="3" id="aboveThree" />
                                <label htmlFor="aboveThree"><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span></label>
                            </li>
                            <li>
                                <input type="radio" name="rating" value="2" id="aboveTwo" />
                                <label htmlFor="aboveTwo"><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span></label>
                            </li>
                            <li>
                                <input type="radio" name="rating" value="1" id="aboveOne" />
                                <label htmlFor="aboveOne"><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span></label>
                            </li>
                        </ol>
                    </fieldset>
                </div>
            </form>

            {/* <!-- Result section --> */}
            <section className="results">
                <div className="results-hding">
                    <div className="results-subheading">
                        <h2 className="subheading">Lightning</h2>
                        <h3 className="qtyResults">qtyResults</h3>
                    </div>
                    <div>
                        {/* <!-- sort options --> */}
                        <fieldset className="sort-options">
                            <label className="sort-label" htmlFor="sort">Sort by</label>
                            <select name="sort" id="sort">
                                <option value="name">Name</option>
                                <option value="high">Price, highest to lowest</option>
                                <option value="low">Price, lowest to highest</option>
                                <option value="rate">Rating</option>
                            </select>
                        </fieldset>
                    </div>
                </div>
            </section>


            <SearchResults result={searchResult} />
        </Layout>
    )
}

export default Products