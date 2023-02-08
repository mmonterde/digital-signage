/**
 * @fileoverview Custom widget that consumes an api to show the pilots
 * information of the dynamic in course.
 */

import React, { Component } from 'react'
import axios from 'axios'

const API_KEY = '7gBL0Lt9gi7yDgbUP80ShO9lmkeOx6Tkwb6CKXdLVQ1Wth9hQQtPnsaN6eucFAqB'
const API_URL = 'https://gpomnichannel23.itool.mx/api/v1'
const REQ_CONFIG = {
    method: 'get',
    url: `${API_URL}/score`,
    headers: {
        'X-Authorization': API_KEY
    }
}

class PilotsContent extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    componentDidMount() {
        axios(REQ_CONFIG)
            .then(({ data: resp }) => {
                const { data } = resp
                this.setState({
                    data: data.data,
                })
            })
            .catch(error => console.log(error))
    }

    nextState() {

    }

    render() {
        const { data = [] } = this.state
        return (
            <div className='main-container'>
                <img src='./../../uploads/championship_logo.svg' className='logo' />
                <h1 className='title'>DRIVER STANDINGS</h1>

                <div className='rating-container'>
                    {data.map((item, i) => {
                        const { name, score } = item
                        return (
                            <div
                                className={`
                rating ${i === 0 ? 'first-place'
                                        : i === 1 ? 'second-place'
                                            : i === 2 ? 'third-place'
                                                : null}`
                                }>
                                {i === 0 && <img src='./../../uploads/first_medal.svg' className='medal' />}
                                {i === 1 && <img src='./../../uploads/second_medal.svg' className='medal' />}
                                {i === 2 && <img src='./../../uploads/third_medal.svg' className='medal' />}
                                {i >= 3 && <span className='position'>{i + 1}</span>}
                                <h4 className='pilot-name'>{name}</h4>
                                <p className='points'>{score === null ? 0 : score} pts</p>
                            </div>
                        )
                    })}
                </div>
                <style jsx>
                    {`
          .main-container {
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #007D35;
            box-shadow: inset 13px 26px 170px #043E1D;
            padding: 20px 5px;
          }

          .logo {
            width: 100%;
            max-width: 200px;
            height: auto;
          }

          .title {
            margin: 20px 0 20px 0;
            font-size: 25px;
          }

          .rating-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: center;
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

          .rating .pilot-name {
            font-weight:bold;
            font-size: 22px;
            letter-spacing: 1px;
            color: #000;
            margin: 0;
            width: 100%;
          }

          .medal {
            width: 35px;
          }

          .position {
            width: 35px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #979797;
            font-size: 18px;
          }

          .points {
            font-size: 18px;
            font-weight: bold;
            color: #979797;
            margin: 0;
            width: fit-content;
            white-space: nowrap;
          }

          .first-place {
            width: 80%;
            box-shadow: 0 20px 20px 0 rgba(0,0,0,0.15);
            z-index: 10;
          }

          .first-place .pilot-name,
          .first-place .points {
            font-weight: bold;
            color: #000;
            font-size: 25px;
            letter-spacing: 1px;
          }

          .second-place {
            box-shadow: 0 15px 15px 0 rgba(0,0,0,0.1);
            z-index: 8;
            width: 85%;
          }

          .third-place {
            box-shadow: 0 10px 10px 0 rgba(0,0,0,0.05);
            z-index: 6;
            width: 90%;
          }

          .second-place .pilot-name,
          .second-place .points,
          .third-place .pilot-name,
          .third-place .points {
            font-weight: bold;
            color: #000;
            font-size: 25px;
            letter-spacing: 1px;
          }
        `}
                </style>
            </div>
        )
    }

}

export default PilotsContent
