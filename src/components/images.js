import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import logo from '../logo.svg'

export default class Images extends Component {
    render() {
        return (
            <div id='carousel-container' style={{backgroundColor: '#e9ecef'}}>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={logo}
                        width="500"
                        height="500"
                        alt="First slide"
                        />
                        <Carousel.Caption style={{position: 'static', color: 'black'}}>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo}
                        width="500"
                        height="500"
                        alt="Second slide"
                        />

                        <Carousel.Caption style={{position: 'static', color: 'black'}}>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo}
                        width="500"
                        height="500"
                        alt="Third slide"
                        />

                        <Carousel.Caption style={{position: 'static', color: 'black'}}>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}