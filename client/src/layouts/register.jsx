import React from "react";
import styled from "styled-components";
import CForm from "../components/c-form";
import CInput from "../components/c-input";
import naming from '../assets/text.json'


const RegisterPage = () => {
    return (
        <RegisterWrapper>
            <FormPart>
                <CForm
                    title={"Sign up"}
                >
                    <CInput placeholder = {"Name"} getValue = {value => console.log(value)}/>
                    <CInput placeholder = {"Email"} getValue = {value => console.log(value)}/>
                </CForm>
            </FormPart>
            <ImagePart/>
        </RegisterWrapper>
    )

}

export default RegisterPage

const RegisterWrapper = styled.div`
    margin: 75px 0;
    display: flex;
    flex-direction: row;
    width: 100%;
`

const FormPart = styled.div`
    width: 50%;
    margin: 0 75px;
    padding-left: 34px;
`

const ImagePart = styled.div`
    width: 50%;
    margin: 0 55px;
`