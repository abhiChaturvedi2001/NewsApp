import React, { useEffect, useState } from 'react'

const useNewsApi = (category) => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [category])

    const fetchData = async () => {
        const data = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`);
        const json = await data.json();
        setNewsData(json?.articles)
    }

    return { newsData }

}

export default useNewsApi