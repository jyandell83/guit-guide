import React from 'react';
import {GuitarString, DashSetting} from './style';



const Dashboard = ({setScale, setRoot, notes, fretboard, openNotes, setOpenNotes, scaleNotes, root}) =>  {
    return(
        <div className="dashboard">
            <h3 className="dashboard__header">Dashboard</h3>
                <DashSetting>
                    ROOT:
                    <select onChange={(e) => setRoot(e.target.value)}>
                        <option disabled selected>- Change Root -</option>
                        {
                            notes.map((note, index) =>  
                                <option key={index}>{note}</option>
                            )
                        }
                    </select>
                </DashSetting>
                <DashSetting>
                    SCALE:
                    <select onChange={(e) => setScale(e.target.value)}>
                        <option disabled selected>- Change Scale -</option>
                        <option>Major</option>
                        <option>Minor</option>
                        <option>Major Pentatonic</option>
                        <option>Minor Pentatonic</option>
                    </select>

                </DashSetting>
           
            {
                //these are the tuners for lack of a better word
                 fretboard.map((elem,i) => 
                    <GuitarString key={i}>
                        <span>{`String ${i + 1}`}</span>
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
                    </GuitarString>)
            }
        </div>
    )
}

export default Dashboard;