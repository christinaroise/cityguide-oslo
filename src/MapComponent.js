import React, { component, useState, useLayoutEffect } from 'react';
import ReactMapGL, {Marker} from "react-map-gl";
import * as cityGuideData from "./jsonLibrary/cityGuideData.json";
import placeholder from './images/png/001-placeholder.png';

import './components/pageCss/MapComponent.css'


class MapComponent extends React.Component{

    state = {
        viewport: {
            latitude: 59.9133301,
            longitude: 10.740325,
            width: "100vw",
            height: "100vh",
            zoom: 11, 
            display: 'inherit'
        },
    }

    mapRef = React.createRef()

    handleViewportChange = viewport => {
        this.setState({
            viewport: {...this.state.viewport, ...viewport}
        })
    }

    componentDidMount(){
        document.getElementById('menuContainer').style.backgroundColor = "rgba(255, 255, 255, 0.85)"
    }

    showFilterMenu(){
        var filterMenu =  document.getElementById('filterMenu');

        if(filterMenu.style.display == 'none'){
            filterMenu.style.display = 'inherit'
        }else {
            filterMenu.style.display = 'none'
        }
    }

   render() {

  

    const {viewport} = this.state

    return (
        <div className="mapPage">
            <ReactMapGL
                ref={this.mapRef}
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiY2hyaXN0aW5hcm9pc2UiLCJhIjoiY2s1M2x1c2J2MGEyZjNtbnRsOXJmNWM0YyJ9.XxWYYAYeQkNOeRRYvCHYhQ"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={this.handleViewportChange}
            >
            {cityGuideData.features.attractions.map(attraction => (
                <Marker
                    key={attraction.properties.ATTRACTION_ID}
                    latitude={attraction.geometry.coordinates[1]}
                    longitude={attraction.geometry.coordinates[0]}
                    anchor="bottom"
                >
                    <button className="placeholderBtn">
                        <img src={placeholder} alt="placeholder"/>
                    </button>
                </Marker>
            ))}
              {cityGuideData.features.cafes.map(cafe => (
                <Marker
                    key={cafe.properties.CAFE_ID}
                    latitude={cafe.geometry.coordinates[1]}
                    longitude={cafe.geometry.coordinates[0]}
                    anchor="bottom"
                >
                    <button className="placeholderBtn">
                        <img src={placeholder} alt="placeholder"/>
                    </button>
                </Marker>
            ))}
            {cityGuideData.features.hotels.map(hotel => (
                <Marker
                    key={hotel.properties.HOTEL_ID}
                    latitude={hotel.geometry.coordinates[1]}
                    longitude={hotel.geometry.coordinates[0]}
                    anchor="bottom"
                >
                    <button className="placeholderBtn">
                        <img src={placeholder} alt="placeholder"/>
                    </button>
                </Marker>
            ))}
            {cityGuideData.features.nightlifes.map(nightlife => (
                <Marker
                    key={nightlife.properties.NIGHTLIFE_ID}
                    latitude={nightlife.geometry.coordinates[1]}
                    longitude={nightlife.geometry.coordinates[0]}
                    anchor="bottom"
                >
                    <button className="placeholderBtn">
                        <img src={placeholder} alt="placeholder"/>
                    </button>
                </Marker>
            ))}
            {cityGuideData.features.restaurants.map(restaurant => (
                <Marker
                    key={restaurant.properties.RESTAURANT_ID}
                    latitude={restaurant.geometry.coordinates[1]}
                    longitude={restaurant.geometry.coordinates[0]}
                    anchor="bottom"
                >
                    <button className="placeholderBtn">
                        <img src={placeholder} alt="placeholder"/>
                    </button>
                </Marker>
            ))}
              
            </ReactMapGL>
            <div className="filterMenuContainerDiv">
                <div className="filterMenuContainer">
                    <div id="filterMenu" className="filterMenu" >
                        <button>Attractions</button>
                        <button>Cafes</button>
                        <button>Hotels</button>
                        <button>Nightlife</button>
                        <button>Restaurants</button>
                    </div>
                    <button id="showFilterMenuButton" className="showFilterMenuButton" onClick={ () => this.showFilterMenu() }>...</button>
                </div>
            </div>
        </div>
    );
   }
}

export default MapComponent



