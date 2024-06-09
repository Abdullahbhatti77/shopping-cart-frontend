import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

function FetchData() {
    const [data, setData] = useState([]);

    
    const { isLoading, error, refetch } = useQuery(
    {
        queryKey: ['fetchPosts'],
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let data=await response.json();
            setData(data);          
            console.log(data);
            return data;
        }
    }
    );
    const fetchData = async () => {
        await refetch(); // This will trigger refetching the data
    };

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error.message}</h1>
    return ( 
        <>
            {data.length===0 && (<button onClick={fetchData}>Fetch Data</button>)}


            <button onClick={() => setData([])}>Clear Data</button>

            {
                data && data.map((post) => (
                    <div key={post.id}>
                        <h2>{post.id}</h2>
                        <p>{post.title}</p>
                    </div>
                ))
            }
        </>
    
     );
}

export default FetchData;