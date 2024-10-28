import Navbar from '../components/Navbar';
import BG from "../images/bgimage.png";
import Icon from "../images/icon.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Home() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    // Function to navigate to search results page
    const onSearch = () => {
        // Split the name by spaces and take the first two words if available
        const nameParts = name.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts[1] || '';

        if (firstName) {
            // Construct the query with first name and optionally last name if present
            let query = `first_name=${encodeURIComponent(firstName)}`;
            if (lastName) {
                query += `&last_name=${encodeURIComponent(lastName)}`;
            }
            navigate(`/search-results?${query}`);
        } else {
            toast.error("Please enter a name to search");
        }
    };

    return (
        <>
            <div style={{ 
                background: `linear-gradient(rgba(255, 255, 255, 0.6) 31%, rgba(177, 203, 256, 0.6) 100%), url(${BG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                width: '100%', 
                height: '100vh' 
            }}>
                <Navbar />

                {/* Logo section */}
                <div style={{
                    marginTop: '90px',
                    display: 'flex',          
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}>
                    <img src={Icon} alt="Icon" width="460px" height="68px" />
                </div>

                {/* Search input section */}
                <div style={{
                    marginTop: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{ position: 'relative', width: '460px', height: '40px' }}>
                        {/* Search Icon */}
                        <i
                            className="bi bi-search"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '10px',
                                transform: 'translateY(-50%)',
                                fontSize: '1.2rem',
                                color: '#6c757d',
                            }}
                        ></i>

                        {/* Search Input */}
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
                            className="form-control ps-5"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Home;
