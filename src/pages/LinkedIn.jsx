import { useEffect } from 'react';

export function LinkedIn() {
    useEffect(() => {
        window.location.replace("https://www.linkedin.com/company/girmantech/");
    }, []);
    return null;
}

export default LinkedIn;
