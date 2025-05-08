import {Component} from 'react'
import {
  BackgroundContainer,
  CardContainer,
  EditableTextHeading,
  InputAndButtonContainer,
  UserInput,
  UserInputToText,
  ButtonElement,
} from './styledComponents'

class EditTextComponent extends Component {
  state = {
    inputTextValue: '',
    isButtonClicked: false,
  }

  toogleInputToText = event => {
    console.log(event.target.value)
    this.setState({
      inputTextValue: event.target.value,
    })
  }

  toogleButtonText = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  toogleInputToParagraph = () => {
    const {isButtonClicked, inputTextValue} = this.state
    if (isButtonClicked) {
      return <UserInputToText>{inputTextValue}</UserInputToText>
    }
    return (
      <UserInput
        type="text"
        value={inputTextValue}
        onChange={this.toogleInputToText}
        placeholder="Please enter text"
      />
    )
  }

  render() {
    const {isButtonClicked} = this.state
    const buttonText = isButtonClicked ? 'Edit' : 'Save'
    return (
      <BackgroundContainer>
        <CardContainer>
          <EditableTextHeading>Editable Text Input</EditableTextHeading>
          <InputAndButtonContainer>
            <>{this.toogleInputToParagraph()}</>
            <ButtonElement type="button" onClick={this.toogleButtonText}>
              {buttonText}
            </ButtonElement>
          </InputAndButtonContainer>
        </CardContainer>
      </BackgroundContainer>
    )
  }
}

export default EditTextComponent
