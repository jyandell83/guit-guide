import React, { useState } from 'react';



import WelcomeModal from '../WelcomeModal'



const App = () =>  {
    const [showModal, setShowModal] = useState(true);
    const [numberOfStrings, setNumberOfStrings] = useState(6);
    const [numberOfFrets, setNumberOfFrets] = useState(24);
    //using this to close welcome model when people submit the form
    const closeModal = () =>  {
        setShowModal(false);
    }
    return(
        <div>
            Hello, let guitar guide show you the way
            {numberOfStrings},{numberOfFrets}
            {
                showModal ? <WelcomeModal closeModal ={closeModal} setNumberOfFrets={setNumberOfFrets} setNumberOfStrings={setNumberOfStrings} numberOfFrets ={numberOfFrets} numberOfStrings={numberOfStrings}/> : null
            }
        </div>
    )
}

export default App;