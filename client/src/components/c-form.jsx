import React from "react"
import styled from "styled-components";


const CForm = (props) => {

    return (
        <Form onSubmit = {(e) => e.preventDefault()}>
            {props.title ? <Title>{props.title}</Title> : null}
            {props.children}
        </Form>
    )
}

export default CForm

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 36px;
    color: #222;
    font-weight: bold;
    margin-bottom: 33px;
`
