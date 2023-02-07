/**
 * @fileoverview Custom widget that consumes an api to show the ranking
 * information of the dynamic in course.
 */

import React, { Component } from 'react'
import axios from 'axios'

const API_KEY = '7gBL0Lt9gi7yDgbUP80ShO9lmkeOx6Tkwb6CKXdLVQ1Wth9hQQtPnsaN6eucFAqB'
const API_URL = 'https://gop.alquimiai.com/api/v1'
const REQ_CONFIG = {
  method: 'get',
  url: `${API_URL}/general`,
  headers: {
    'X-Authorization': API_KEY
  }
}

const imageDictionary = {
  1: 'amstel',
  2: 'bohemia',
  3: 'xx',
  4: 'heineken',
  5: 'indio',
  6: 'tecate'
}

class RankingContent extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    axios(REQ_CONFIG)
      .then(({ data: resp }) => {
        const { data } = resp
        this.setState({
          data,
          firstPlace: data[0]
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { data = [], firstPlace = {} } = this.state
    return (
      <div className='main-container'>
        <div className='left-section'>
          <div className='header'>
            <img src='./../../uploads/championship_short_logo.svg' className='short-logo' />
            <h1 className='title'>RANKING ESCUDERÍAS</h1>
          </div>
          <div className='rating-container'>
            {data.map((item, i) => {
              const { team, score, id } = item
              return (
                <div className='rating' key={i}>
                  <span className='position'>{i + 1}</span>
                  <h4 className='contestant-name'>{team}</h4>
                  <img
                    src={`./../../uploads/${imageDictionary[id]}_car.svg`}
                    className='contestant-car'
                    style={{
                      marginRight: `${20 + (i * 15)}px`
                    }}
                  />
                  <p className='points'>{score === null ? 0 : score} pts</p>
                </div>
              )
            })}
          </div>
        </div>

        <style jsx>
          {`
            .main-container {
              background-color: white;
              border-radius: 6px;
              display: flex;
              align-items: stretch;
            }

            .left-section {
              width: 100%;
              background: #007D35;
              border-radius: 6px 0 0 6px;
              padding: 15px 100px 15px 15px;
              box-shadow: inset 13px 26px 170px #043E1D;
            }

            .header {
              display: flex;
            }

            .short-logo {
              width: 50px;
              height: auto;
            }

            .title {
              width: 100%;
              text-align: center;
              margin: 0;
              font-size: 25px;
            }

            .rating-container {
              margin-top: 100px;
              width: 100%;
              display: flex;
              flex-direction: column;
              gap: 5px;
            }

            .rating {
              width: 95%;
              z-index: 4;
              border-radius: 6px;
              gap: 10px;
              display: flex;
              justify-content: space-between;
              padding: 10px 10px;
              align-items: center;
              background-color: #fff;
            }

            .position {
              width: 35px;
              height: 35px;
              display: flex;
              color: #979797;
              font-size: 18px;
              font-weight: 600;
              align-items: center;
              justify-content: center;
            }

            .contestant-name {
              font-size: 18px;
              color: #979797;
              margin: 0;
              font-weight: 600;
              width: 100%;
            }

            .contestant-car {
              width: 100px;
              margin: -20px 0 -20px 0;
            }

            .points {
              font-size: 18px;
              font-weight: 600;
              color: #979797;
              margin: 0;
              width: fit-content;
              white-space: nowrap;
            }

            .right-section {
              width: 40%;
              background-position: center;
            }

            .fist_place-shield {
              width: 200px;
              position: absolute;
              transform: translate( -50%, -50%);
              top: 25%;
            }
          `}
        </style>
      </div>
    )
  }
}

export default RankingContent
