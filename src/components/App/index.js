import React, { useState, useEffect } from 'react';



import WelcomeModal from '../WelcomeModal';

import { FretNote, GuitarString } from './style';

const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
// const openNotes = ['E', 'A', 'D', 'G', 'B', 'E'];

const App = () =>  {
    const [showModal, setShowModal] = useState(true);
    const [numberOfStrings, setNumberOfStrings] = useState(6);
    const [numberOfFrets, setNumberOfFrets] = useState(24);
    const [fretboard, setFretboard] = useState([]);
    const [openNotes, setOpenNotes] = useState(['E', 'A', 'D', 'G', 'B', 'E']);
    const [root, setRoot] = useState('E');
    const [scale, setScale] = useState([])
    //using this to close welcome model when people submit the form
    const closeModal = () =>  {
        setShowModal(false);
    }
    const makeMajor = (arr) =>  {
        return arr.filter((elem, index) => {return index === 0 || index === 2 || index === 4 || index === 5 || index === 7 || index === 9 || index ===11});
    }
    //using this to build arrays or strings and frets to contain names of notes
    const buildFretboard = (strings, frets) =>  {
        let fretArray = [];
        
        
        for(let i = 0; i < strings; i++) {
            let openNote = openNotes[i];
            let guitarString = notes.slice(notes.indexOf(openNote)).concat(notes, notes);
            while (guitarString.length > frets) {
                guitarString.pop();
            }
            fretArray.push(guitarString);
        }
        setFretboard(fretArray);
    }
    useEffect(() =>  {
        buildFretboard(numberOfStrings, numberOfFrets);
    }, [numberOfFrets, numberOfStrings, openNotes, root]);
    console.log(fretboard)
    return(
        <div>
            Hello, let guitar guide show you the way
            ROOT:
            <select onChange={
                            e => 
                            {
                                setRoot(e.target.value);
                            }
                            }>
                            {
                                notes.map((note, index) =>  
                                    <option key={index}>{note}</option>
                                )
                            }
            </select>
            SCALE:
            <select>
                <option>Major</option>
                <option>Minor</option>
            </select>
            {numberOfStrings},{numberOfFrets}<br />
            {
                //these are the tuners for lack of a better word
                 fretboard.map((elem,i) => 
                    <GuitarString key={i}>
                        <select onChange={
                            e => 
                            {
                                let newArr = openNotes.slice();
                                newArr[i] = e.target.value;
                                setOpenNotes(newArr);
                            }
                            }>
                            {
                                notes.map((note, index) =>  
                                    <option key={index}>{note}</option>
                                )
                            }
                        </select>
                        {elem.map((n, ind) => <FretNote key={ind} className={(n === root) ? 'root' : n}>{n}</FretNote>)}
                    </GuitarString>)
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