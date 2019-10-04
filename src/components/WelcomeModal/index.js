import React from 'react';

import { Inpt, Modal, ModalContent } from './style'

const WelcomeModal = ({ closeModal }) =>  {
    const handleClick = (e) =>  {
        e.preventDefault();
        closeModal();
    }
    return(
        <Modal>
            <ModalContent>
                <h2>Hi, Welcome to the Guit Guide. Fill in some Info about your guitar to get started</h2>
                <form>
                    <Inpt placeholder='Number of Strings' type='number'/>
                    <Inpt placeholder='Number of Frets' type='number'/>
                    <button type='submit' onClick={handleClick}>Submit</button>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default WelcomeModal;