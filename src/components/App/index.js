import React, { useState, useEffect } from 'react';


import Header from '../Header';
import WelcomeModal from '../WelcomeModal';
import Dashboard from '../Dashboard';


import { FretNote, GuitarString, FretContainer } from './style';


const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
// const openNotes = ['E', 'A', 'D', 'G', 'B', 'E'];

const App = () =>  {
    const [showModal, setShowModal] = useState(false);
    const [numberOfStrings, setNumberOfStrings] = useState(6);
    const [numberOfFrets, setNumberOfFrets] = useState(24);
    const [startingFret, setStartingFret] = useState(0);
    const [endingFret, setEndingFret] = useState(24);
    const [fretboard, setFretboard] = useState([]);
    const [openNotes, setOpenNotes] = useState(['E', 'B', 'G', 'D', 'A', 'E']);
    const [root, setRoot] = useState('C');
    const [scale, setScale] = useState('Major');
    const [scaleNotes, setScaleNotes] = useState([]);
    //using this to close welcome model when people submit the form
    const closeModal = () =>  {
        setShowModal(false);
    }
    const fretNumbers = new Array(numberOfFrets).fill('x');
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
                // while (guitarString.length > frets) {
                //     guitarString.pop();
                // }
                // guitarString.splice(startingFret, endingFret);
                fretArray.push(guitarString.slice(startingFret, endingFret));
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
    }, [numberOfFrets, numberOfStrings, openNotes, root, scale, startingFret, endingFret]);
    return(
        <div>
            <Header root={root} scale={scale} />
            
            {
                //these are the tuners for lack of a better word
                 fretboard.map((elem,i) => 
                    <GuitarString key={i}>
                        {elem.map((n, ind) => 
                            <FretContainer key={ind}>
                                <FretNote key={ind} className={(scaleNotes.includes(n)) ? `scale ${n === root ? 'root' : null}` : n}>
                                    {n}
                                </FretNote>
                            </FretContainer>
                        )}
                    </GuitarString>)
            }
            <div className="fret-inlays-container">
                {
                    fretNumbers.map((element, num) => num >= startingFret && num < endingFret ? <div className="fret-inlays" key={num}>{num}</div>: null)
                }
            </div>
            <button onClick={() => setNumberOfStrings(numberOfStrings + 1)}>Add String</button>
            <button onClick={() => setNumberOfStrings(numberOfStrings - 1)}>Delete String</button>
            <Dashboard 
                setScale={setScale} 
                setRoot={setRoot}
                setStartingFret={setStartingFret}
                setEndingFret={setEndingFret}
                notes={notes} 
                fretboard={fretboard}
                openNotes={openNotes}
                setOpenNotes={setOpenNotes}
                scaleNotes={scaleNotes}
                root={root}
            />
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