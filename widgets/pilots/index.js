import BaseWidget    from '../base_widget'
import PilotsContent from './src/PilotsContent'

export default class Pilots extends BaseWidget {
    constructor() {
      super({
        name: 'Pilots',
        version: '0.1',
        icon: 'car',
        defaultData: {
        }
      })
    }
  
    get Widget() {
      return PilotsContent
    }
  }