import React, { useState, useEffect } from 'react';



import WelcomeModal from '../WelcomeModal'

const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const openNotes = ['E', 'A', 'D', 'G', 'B', 'E'];

const App = () =>  {
    const [showModal, setShowModal] = useState(true);
    const [numberOfStrings, setNumberOfStrings] = useState(6);
    const [numberOfFrets, setNumberOfFrets] = useState(24);
    const [fretboard, setFretboard] = useState([]);
    //using this to close welcome model when people submit the form
    const closeModal = () =>  {
        setShowModal(false);
    }
    //using this to build arrays or strings and frets to contain names of notes
    const buildFretboard = (strings, frets) =>  {
        let fretArray = [];
        
        
        for(let i = 0; i < strings; i++) {
            let openNote = openNotes[i];
            let guitarString = notes.slice(notes.indexOf(openNote)).concat(notes, notes);
            fretArray.push(guitarString);
        }
        setFretboard(fretArray);
    }
    useEffect(() =>  {
        buildFretboard(numberOfStrings, numberOfFrets);
    }, [numberOfFrets, numberOfStrings]);
    console.log(fretboard)
    return(
        <div>
            Hello, let guitar guide show you the way
            {numberOfStrings},{numberOfFrets}<br />
            {
                //these are the tuners for lack of a better word
                 fretboard.map((elem,i) => 
                    <div key={i}>
                        <select onChange={(e => console.log(e.target.value))}>
                            {
                                notes.map((note, index) =>  
                                    <option key={index}>{note}</option>
                                )
                            }
                        </select>
                        <div>{elem}</div>
                    </div>)
            }
            {
                showModal ? <WelcomeModal 
                                closeModal ={closeModal} 
                                setNumberOfFrets={setNumberOfFrets} 
                                setNumberOfStrings={setNumberOfStrings} 
                                numberOfFrets ={numberOfFrets} 
                                numberOfStrings={numberOfStrings}
                                /> 
                            : 
                            null
            }
        </div>
    )
}

export default App;