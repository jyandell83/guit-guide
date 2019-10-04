import React, { useState } from 'react';



import WelcomeModal from '../WelcomeModal'



const App = () =>  {
    const [showModal, setShowModal] = useState(true);
    const closeModal = () =>  {
        setShowModal(false);
    }
    return(
        <div>
            Hello, let guitar guide show you the way
            {
                showModal ? <WelcomeModal closeModal ={closeModal}/> : null
            }
        </div>
    )
}

export default App;