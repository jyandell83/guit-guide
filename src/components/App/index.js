import React, { useState, useEffect } from 'react';



import WelcomeModal from '../WelcomeModal'



const App = () =>  {
    const [showModal, setShowModal] = useState(true);
    const [numberOfStrings, setNumberOfStrings] = useState(6);
    const [numberOfFrets, setNumberOfFrets] = useState(24);
    //using this to close welcome model when people submit the form
    const closeModal = () =>  {
        setShowModal(false);
    }
    //using this to build arrays or strings and frets to contain names of notes
    const buildFretboard = (strings, frets) =>  {
        let totalStrings = [];
        let totalFrets = [];
        for (let i = 1; i <= frets; i++) {
            totalFrets.push('x');
        }
        for (let i = 1; i <= strings; i++) {
            totalStrings.push('o');
        }
    }
    useEffect(() =>  {
        buildFretboard(numberOfStrings, numberOfFrets);
    }, [numberOfFrets, numberOfStrings]);

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