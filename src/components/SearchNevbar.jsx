import Icon from "../images/Logo.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SearchNavbar() {
  
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
    <nav className='navbar navbar-expand-lg bg-body-tertiary shadow'>
      <div className='container-fluid d-flex align-items-center'>
        
        {/* Logo Section */}
        <a className='navbar-brand d-flex align-items-center' href='/' style={{ marginLeft: '170px' }}>
          <img src={Icon} alt="Icon" width="170px" height="40px" />
        </a>

        {/* Search Section */}
        <div className="d-flex align-items-center ms-auto me-5" style={{ maxWidth: '500px', flexGrow: 1 }}>
          <div style={{ position: 'relative', width: '100%' }}>
            
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
              style={{ width: '100%', height: '40px' }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SearchNavbar;
