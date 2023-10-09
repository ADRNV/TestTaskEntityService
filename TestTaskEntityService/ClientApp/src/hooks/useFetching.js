import { useState } from "react"

export const useFetchHook = (callback) => {

    var [loading, setLoading] = useState(true)

    var [error, setError] = useState(null) 

    const fetching = async () => {
        try{
            await callback()
        }
        catch(e){
            setError(e)
        }
    }

    return [fetching, loading, error]
}