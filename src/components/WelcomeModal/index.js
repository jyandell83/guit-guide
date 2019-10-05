import React from 'react';

import { Inpt, Modal, ModalContent } from './style'

const WelcomeModal = ({ closeModal, setNumberOfStrings, setNumberOfFrets, numberOfStrings, numberOfFrets }) =>  {
    const handleClick = (e) =>  {
        e.preventDefault();
        closeModal();
    }
    return(
        <Modal>
            <ModalContent>
                <h2>Hi, Welcome to the Guit Guide. Fill in some Info about your guitar to get started</h2>
                <form onSubmit={handleClick}>
                    <Inpt placeholder={numberOfStrings} type='number' onChange={e => setNumberOfStrings(e.target.value)}/>
                    <Inpt placeholder={numberOfFrets} type='number'onChange={e => setNumberOfFrets(e.target.value)}/>
                    <button type='submit'>Submit</button>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default WelcomeModal;