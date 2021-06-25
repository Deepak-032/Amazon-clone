import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home_image"
            src="/images/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="banner"
            />

            {/* Product id, title, rating, image */}
            <div className="home_row">
                <Product
                    id="12341121"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                    price={521}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
                />
                <Product
                    id="12340921"
                    title="Samsung Galaxy Buds+ (Black)"
                    price={6990.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71nrZHQMZ7L._SL1500_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="12309821"
                    title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, One Size (S & L Bands Included) (Black)"
                    price={14327.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product
                    id="12341009"
                    title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
                    price={2799}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
                />
                <Product
                    id="09841121"
                    title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage)"
                    price={47999.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="12091321"
                    title="Samsung 108 cm (43 inches) Crystal 4K Series Ultra HD Smart LED TV UA43AUE60AKLXL (Black) (2021 Model)"
                    price={36990.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71fEd9glTIL._SL1500_.jpg"
                />
            </div>
            {/* Products */}
        </div>
    )
}

export default Home
