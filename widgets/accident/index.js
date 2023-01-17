import BaseWidget from '../base_widget'
import AccidentContent from './src/AccidentContent'
import AccidentOptions from './src/AccidentOptions'

export default class Accident extends BaseWidget {
  constructor() {
    super({
      name: 'Accident',
      version: '0.1',
      icon: 'check',
      defaultData: {
         // Your implementation here
      }
    })
  }
  get Options() {
    return AccidentOptions
  }

  get Widget () {
    return AccidentContent
  }
}
