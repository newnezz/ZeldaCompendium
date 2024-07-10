import { useState, useEffect } from 'react';

const GenericData = ({type}) => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        fetch(`https://zelda.fanapis.com/api/${type}?limit=25&page=${page}`)
        .then(res => res.json())
        .then(data => setData(data.data))
      },[type, page])

    function handlePrev(){
        if (page >= 1) {
            setPage(page -1)
        }
    }
    function handleNext(){
        setPage(page + 1)
    }

    return (
        <div style={{color: 'white', backgroundColor: '#494b4b', padding: '10px', marginTop: '10px'}}>
            <h2>{type.toUpperCase()} - page {page}</h2>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
            {data.map((d, i) => {
                let arr = []
                for (const [key, value] of Object.entries(d)) {
                    if (key === 'id') continue; // removes id
                    arr.push(<p>{key}: {value}</p>)
                }
                arr.push(<hr />)
                return arr;
            })}
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default GenericData;