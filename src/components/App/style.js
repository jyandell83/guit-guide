import styled from 'styled-components';


export const FretNote = styled.div`
    display: inline;
    padding: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 27px;
    width: 27px;

`
export const FretContainer = styled.div`
    width: 5%;
    height: 35px;
    padding: 7px;
    border: 1px solid var(--color-white);
    text-align: center;
    position: relative;
`

export const GuitarString = styled.div`
    display: flex;
    justify-content: center;
`