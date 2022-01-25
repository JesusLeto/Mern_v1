import React from "react";
import styled from "styled-components";

const CButton = () => {
    return (
        <Button>
            <img src="" alt=""/>
            <p>TextButton</p>
        </Button>
    )
}

export default CButton

const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px 16px;
    height: 40px;
    font-size: 16px;
    

  color: white;
  background: #1890FF;;
  border: 1px solid #1890FF;;
`