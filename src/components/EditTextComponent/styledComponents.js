import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5d0fe;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  box-sizing: border-box;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 640px;
  min-height: 200px;
`
export const EditableTextHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  color: #000000;
  box-sizing: border-box;
  margin: 16px;
`

export const InputAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
`

export const UserInput = styled.input`
  color: #323f4b;
  font-size: 24px;
  font-family: 'Roboto';
  margin: 0 16px;
  width: 100%;
  outline: none;
  box-shadow: 0px 0px 4px 2px #cbd2d9;
  border: none;
  text-align: left;
`

export const UserInputToText = styled.p`
  color: #323f4b;
  font-size: 24px;
  font-family: 'Roboto';
  box-sizing: border-box;
  margin: 0 16px;
`

export const ButtonElement = styled.button`
  color: #ffffff;
  background-color: #d946ef;
  height: 38px;
  min-width: 90px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  border: none;
  margin: 8px;
  font-size: 18px;
`
