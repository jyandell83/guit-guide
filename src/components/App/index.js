import React, { useState, useEffect } from 'react';



import WelcomeModal from '../WelcomeModal';

import { FretNote, GuitarString, FretContainer } from './style';

const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
// const openNotes = ['E', 'A', 'D', 'G', 'B', 'E'];

const App = () =>  {
    const [showModal, setShowModal] = useState(true);
    const [numberOfStrings, setNumberOfStrings] = useState(6);
    const [numberOfFrets, setNumberOfFrets] = useState(24);
    const [fretboard, setFretboard] = useState([]);
    const [openNotes, setOpenNotes] = useState(['E', 'B', 'G', 'D', 'A', 'E']);
    const [root, setRoot] = useState('C');
    const [scale, setScale] = useState('Major');
    const [scaleNotes, setScaleNotes] = useState([]);
    //using this to close welcome model when people submit the form
    const closeModal = () =>  {
        setShowModal(false);
    }
    useEffect(() =>  {
        const makeMajor = (arr) =>  {
            let newArr = arr.slice(arr.indexOf(root)).concat(arr);
            while (newArr.length > arr.length) {
            newArr.pop();
            }
            if (scale === 'Major Pentatonic'){
                setScaleNotes(newArr.filter((elem, index) => {return index === 0 || index === 2 || index === 4 || index === 7 || index === 9}))  
            }
            else {
                setScaleNotes(newArr.filter((elem, index) => {return index === 0 || index === 2 || index === 4 || index === 5 || index === 7 || index === 9 || index ===11}))  
            };
        }
        const makeMinor = (arr) =>  {
            let newArr = arr.slice(arr.indexOf(root)).concat(arr);
            while (newArr.length > arr.length) {
            newArr.pop();
            }
            if (scale === 'Minor Pentatonic'){
                setScaleNotes(newArr.filter((elem, index) => {return index === 0 || index === 3 || index === 5 || index === 7 || index ===10}))  
            }
            else {
            setScaleNotes(newArr.filter((elem, index) => {return index === 0 || index === 2 || index === 3 || index === 5 || index === 7 || index === 8 || index ===10}))};
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
        if (scale === 'Major') {
            makeMajor(notes);
        }
        if (scale === 'Minor') {
            makeMinor(notes);
        }
        if (scale === 'Major Pentatonic') {
            makeMajor(notes);
        }
        if (scale === 'Minor Pentatonic') {
            makeMinor(notes);
        }
        buildFretboard(numberOfStrings, numberOfFrets);
    }, [numberOfFrets, numberOfStrings, openNotes, root, scale]);
    console.log(scaleNotes)
    return(
        <div>
            <h1>
                Hello, let guitar guide show you the way<br />
            {root} - {scale}
            </h1>
            ROOT:
            <select onChange={
                            e => 
                            {
                                setRoot(e.target.value);
                            }
                            }>
                            <option disabled selected>- Change Root -</option>
                            {
                                notes.map((note, index) =>  
                                    <option key={index}>{note}</option>
                                )
                            }
            </select>
            SCALE:
            <select onChange={e => {setScale(e.target.value)}}>
                <option disabled selected>- Change Scale -</option>
                <option>Major</option>
                <option>Minor</option>
                <option>Major Pentatonic</option>
                <option>Minor Pentatonic</option>
            </select><br />
            
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
                            <option disabled selected>- Change Tuning -</option>
                            {
                                notes.map((note, index) =>  
                                    <option key={index}>{note}</option>
                                )
                            }
                        </select>
                        {elem.map((n, ind) => 
                            <FretContainer key={ind}>
                                <FretNote key={ind} className={(scaleNotes.includes(n)) ? `scale ${n === root ? 'root' : null}` : n}>
                                    {n}
                                </FretNote>
                                </FretContainer>
                        )}
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