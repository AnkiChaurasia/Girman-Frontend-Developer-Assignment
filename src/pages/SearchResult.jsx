import Navbar from '../components/SearchNevbar';
import BG from "../images/bgimage.png";
import Pic from "../images/profilePic.png";
import NoResult from "../images/no_result_found.png"
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import userList from '../dummy/user_list.json';
import { Modal, Button } from 'react-bootstrap';

export function SearchResult() {
    const [searchResult, setSearchResult] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const firstName = params.get('first_name');
        const lastName = params.get('last_name');

        if (firstName) {
            const filteredResults = userList.filter((user) => {
                const userFirstName = user.first_name.toLowerCase();
                const userLastName = user.last_name.toLowerCase();

                // If both first and last names are provided, do an exact match
                if (lastName) {
                    return (
                        userFirstName === firstName.toLowerCase() &&
                        userLastName === lastName.toLowerCase()
                    );
                }

                // If only first name is provided, match by first name only
                return userFirstName === firstName.toLowerCase();
            });

            setSearchResult(filteredResults);
        } else {
            setSearchResult([]);
        }
    }, [location.search]);

    const handleShowModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedUser(null);
    };

    return (
        <>
            <div
                style={{
                    background: `linear-gradient(rgba(255, 255, 255, 0.6) 31%, rgba(177, 203, 256, 0.6) 100%), url(${BG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    width: '100%',
                    height: '100vh',
                }}
            >
                <Navbar />
                {/* Center the search result section */}
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                    <div className="row mt-5">
                        {searchResult.length > 0 ? (
                            searchResult.map((user, index) => (
                                <div className="card col-3 me-3 mb-3" style={{ width: "20rem" }} key={index}>
                                    <img src={Pic} className="profile-pic" alt="Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {user['first_name']} {user['last_name']}
                                        </h5>
                                        <p className="card-text">
                                            <i className="bi bi-geo-alt-fill"></i>
                                            {user['city']}
                                        </p>

                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <p className="card-text mb-0">
                                                    <i className="bi bi-telephone-fill"></i>
                                                    {user['contact_number']}
                                                </p>
                                                <small className="text-muted">Available on phone</small>
                                            </div>

                                            <Button variant="dark" onClick={() => handleShowModal(user)}>
                                                Fetch Details
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-muted ">
                                <img src={NoResult} alt="NoResult"  />
                                <h5>No result found</h5>
                            </div>
                        )}
                    </div>
                </div>

                {/* Modal for User Details */}
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <div>
                            <Modal.Title>Fetch Details</Modal.Title>
                            <small className="text-muted">Here are the details of the following employee</small>
                        </div>
                    </Modal.Header>

                    <Modal.Body>
                        {selectedUser && (
                            <>
                                <p className="mb-0">Name: {selectedUser.first_name} {selectedUser.last_name}</p>
                                <p className="mb-0">City: {selectedUser.city}</p>
                                <p>Contact Number: {selectedUser.contact_number}</p>   
                                <p>Profile Image: </p>
                                <img src={Pic} alt="Pic" />
                            </>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default SearchResult;
