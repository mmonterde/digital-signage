import React, { Component } from 'react'
import { Form, Input, InlineInputGroup } from '../../../components/Form'


class AccidentOptions extends Component {
    constructor(props) {
        super(props)
        const { text, color, textColor, titleTextColor, accentColor,
            accidentDate } = props.data || {}
        this.state = {
          text,
          color,
          textColor,
          titleTextColor,
          accentColor,
          accidentDate
        }
      }
      handleChange = (name, value) => {
        const { onChange = () => {} } = this.props
        this.setState(
          {
            [name]: value
          },
          () => {
            onChange(this.state)
          }
        )
      }
      render() {
        const { text, color, textColor, titleTextColor, accentColor, accidentDate } = this.state
        return (
          <div className={'container'}>
            <Form>
              <h3>Widget: Announcement</h3>
              <p>Choose your preferences for the announcement widget.</p>
              <InlineInputGroup>
                <Input
                  inline={false}
                  label={'Background color'}
                  type={'color'}
                  name={'color'}
                  value={color}
                  onChange={this.handleChange}
                />
                <Input
                  inline={false}
                  label={'Text color'}
                  type={'color'}
                  name={'textColor'}
                  value={textColor}
                  onChange={this.handleChange}
                />
                <Input
                  inline={false}
                  label={'Title Text color'}
                  type={'color'}
                  name={'titleTextColor'}
                  value={titleTextColor}
                  onChange={this.handleChange}
                />
                <Input
                  inline={false}
                  label={'Accent color'}
                  type={'color'}
                  name={'accentColor'}
                  value={accentColor}
                  onChange={this.handleChange}
                />
              </InlineInputGroup>

              <Input
                inline={false}
                label={'Text to be displayed'}
                placeholder={'Enter an announcement here ...'}
                type={'textarea'}
                name={'text'}
                value={text}
                onChange={this.handleChange}
              />
               <Input
                inline={false}
                label={'Date without accident'}
                placeholder={'enter de date mm/dd/yyyy...'}
                type={'text'}
                name={'accidentDate'}
                value={accidentDate}
                onChange={this.handleChange}
              />
              </Form>
           
            <style jsx>
              {`
                h3,
                p {
                  font-family: 'Open Sans', sans-serif;
                }
                .container {
                  display: flex;
                  flex-direction: row;
                }
                label {
                    margin-right: 16px;
                    color: #878787;
                    font-family: 'Open Sans', sans-serif;
                    min-width: 100px;

                    display: inline-block;
                    padding-top: 16px;
                    padding-bottom: 16px;
                  }
                .preview {
                  display: block;
                  width: 240px;
                  height: 240px;
                  border-radius: 6px;
                  overflow: hidden;
                }
                .previewContainer {
                  margin-left: 16px;
                  width: 240px;
                }
              `}
            </style>
          </div>
        )
      }
}

export default AccidentOptions
