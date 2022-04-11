import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [Data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then(
                (res) => {
                    if (!res.ok)
                        throw Error("Couldn't fetch data!!!")
                    return res.json()
                }
            )
            .then(
                (data) => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                    // gethedata()
                }
            )
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("Fetch aborted")
                }
                else {
                    setIsPending(false)
                    setError(err.message);
                }
            })
        // console.log(name)
        // Make sure not to update state in useEffect as it will create a cycle of infinite rerenders
        return () => abortCont.abort();
    }, [url])
    return ({ Data, isPending, error })
}
export default useFetch;