import React, {useState} from "react";
import styled from "styled-components";

const CInput = (props) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div>
            <Wrapper
                active = {isActive}
            >
                {props.children ? <Label>{props.children}</Label>: null}
                <Input
                       placeholder = {props.placeholder}
                       onFocus = {() => setIsActive(true)}
                       onBlur = {() => setIsActive(false)}
                       value={props.value}
                       onChange={e => props.getValue(e.target.value)}
                       active = {isActive}
                />
            </Wrapper>
        </div>
    )
}

export default CInput

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid ${props => props.active ? "black": "grey"};
    margin-bottom: 25px;
    
`
const Label = styled.div`
    font-size: 16px;
    width: 12px;
    margin-right: 12px;
`
const Input = styled.input`
    width: 100%;
    border: none;
    padding: 6px 30px 6px 0;
    font-size: 13px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${props => props.active ? "black": "grey"}
  }
`

