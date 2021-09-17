import React from 'react'
import './GroupedButtons.css'
import styled from 'styled-components';

export class GroupedButton extends React.Component {
    
render(){
    const ButtonGroup = styled.div`
    display: flex;
`
    return (
        <div>
            <ButtonGroup>
                <button className="btn1">
                    Buy 02 Tokens
                </button>
                <button className="btn2">
                    Release 02 Tokens
                </button>
            </ButtonGroup>
        </div>
    )
}
}

export default GroupedButton
