import { useEffect, useState } from 'react';

const useDebounce = (data, timeout) => {
    const [debouncedData, setDebouncedData] = useState(data);
    useEffect(() => {
        let timeoutID = setTimeout(() => {
            setDebouncedData(data);
        }, timeout);
        return () => {
            clearTimeout(timeoutID);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    return debouncedData;
};

export default useDebounce;
