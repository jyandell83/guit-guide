import styled from 'styled-components';


export const Modal = styled.div`
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`

export const ModalContent = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
`




export const Inpt = styled.input`
    display: block;
`

