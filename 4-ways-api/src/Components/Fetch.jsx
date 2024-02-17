import React, { useEffect, useState } from 'react';

const Fetch = () => {

    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('https://api.quotable.io/random')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    // console.log(data.content);

    const [quote,setQuote]=useState(null)
    useEffect( ()=>{
        const fetchQuote=async()=>{
            const url='https://api.quotable.io/random'
            const res=await fetch(url);
            const data=await res.json();
            setQuote(data);
        }
        fetchQuote();
    },[])

    // console.log(quote);


    return (
        <div>

            <h1 className='text-white'>Fetch API</h1>

            <h1>Without async await ::: {data?.content}</h1>
            <p>Code: </p>

<p>{`     const [data, setData] = useState(null)
    useEffect(() => {
        fetch('https://api.quotable.io/random')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])`}
    </p>

         <br />


<h1>With asynce await ::::  {quote?.content}</h1>
<p>code :: 
{
    `
    
    const [quote,setQuote]=useState(null)
    useEffect( ()=>{
        const fetchQuote=async()=>{
            const url='https://api.quotable.io/random'
            const res=await fetch(url);
            const data=await res.json();
            setQuote(data);
        }
        fetchQuote();
    },[])
    `
}

</p>


        </div>
    );
};

export default Fetch;