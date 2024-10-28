import { useEffect } from 'react';

export function Website() {
    useEffect(() => {
        window.location.replace("https://www.girmantech.com");
    }, []);
    return null;
}

export default Website;
