import { useLoaderData } from 'react-router-dom';
function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/indrajeetS')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data)
    //         })
    // });

    return (
        <>
            <div className="flex flex-col items-center gap-6 p-7 lg:flex-col md:flex-row md:gap-8 rounded-2xl">
                <div>
                    <img className="size-48 shadow-xl rounded-md" alt="" src={data.avatar_url} />
                </div>
                <div className="flex items-center lg:flex-col md:items-start">
                    <span className="text-2xl font-medium">{data.name}</span>
                    <span className="font-medium text-sky-500">{data.company}</span>
                    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                        <span>No. 4</span>
                        <span>·</span>
                        <span>2025</span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Github

export const gihubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/indrajeetS')
    const data = await response.json()
    return data

}