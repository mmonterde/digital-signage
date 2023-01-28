import BaseWidget    from '../base_widget'
import RankingContent from './src/RankingContent'

export default class Ranking extends BaseWidget {
    constructor() {
      super({
        name: 'Ranking',
        version: '0.1',
        icon: 'trophy',
        defaultData: {
        }
      })
    }
  
    get Widget() {
      return RankingContent
    }
  }