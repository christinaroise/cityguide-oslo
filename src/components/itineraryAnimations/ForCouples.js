import React from 'react';
import {Redirect} from 'react-router-dom'
import ReactMapGL, {Marker} from "react-map-gl";
import placeholder from '../../images/png/002-placeholder-1.png';
import '../pageCss/Explore.css'
import '../pageCss/ItineraryAnimationCard.css'


// ITINERARY ANIMATION FOR COUPLES

class ForCouples extends React.Component{

    state = {
        viewport: {
            latitude: 59.922352,
            longitude: 10.7317997,
            width: "100vw",
            height: "100vh",
            zoom: 16, 
            display: 'inherit'
        },
        redirect: false
    }

    mapRef = React.createRef()

    handleViewportChange = viewport => {
        this.setState({
            viewport: {...this.state.viewport, ...viewport}
        })
    }


    componentDidMount(){
        document.getElementById('menuContainer').style.display = "none"
        this.mapRef.current.getMap().height = "100px"
        this.mapRef.current.getMap().width = "100px"
    }

    setRedirect = () => {
        document.getElementById('menuContainer').style.display = "inherit"
        this.setState({
            redirect:true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/'/>
        }
    }

    collapseAndExpand = (lat, lng, divID) => {
        document.getElementById('itineraryAnimationInfoContainer').style.transitionTimingFunction = "ease-in";
        document.getElementById('itineraryAnimationInfoContainer').style.transition = "0.8s";
        document.getElementById('itineraryAnimationInfoContainer').style.transform = "translateY(130%)";

        this.mapRef.current.getMap().flyTo({
            center: [lat, lng]
        })

        setTimeout(() => {
            
            document.getElementById('itineraryAnimationInfoContainer').style.transitionTimingFunction = "ease-out";
            document.getElementById('itineraryAnimationInfoContainer').style.transition = "0.8s";
            document.getElementById('itineraryAnimationInfoContainer').style.transform = "translateY(0)";

            if(divID == "camillasHus"){
                document.getElementById('camillasHus').style.display = 'inherit'                
                document.getElementById('klosteret').style.display = 'none'
                document.getElementById('salt').style.display = 'none'
                document.getElementById('mantra').style.display ='none'
            }else if(divID == "klosteret"){
                document.getElementById('camillasHus').style.display = 'none'
                document.getElementById('klosteret').style.display = 'inherit'
                document.getElementById('salt').style.display = 'none'
                document.getElementById('mantra').style.display ='none'
            }else if(divID == "salt"){
                document.getElementById('camillasHus').style.display = 'none'
                document.getElementById('klosteret').style.display = 'none'
                document.getElementById('salt').style.display = 'inherit'
                document.getElementById('mantra').style.display ='none'
            }else if(divID == "mantra"){
                document.getElementById('camillasHus').style.display = 'none'
                document.getElementById('klosteret').style.display = 'none'
                document.getElementById('salt').style.display = 'none'
                document.getElementById('mantra').style.display ='inherit'
            } 

        }, 800);
    }


    render() {

        const {viewport} = this.state

        return (
            
            <div id="itineraryAnimationDiv"  className="itineraryAnimation"> 
                {this.renderRedirect()}
                <button onClick= { () => {this.setRedirect()}} classname="buttonCloseAnimation">B</button>
                <div className="itineraryMap">
                    <ReactMapGL
                        ref={this.mapRef}
                        {...viewport}
                        mapboxApiAccessToken="pk.eyJ1IjoiY2hyaXN0aW5hcm9pc2UiLCJhIjoiY2s1M2x1c2J2MGEyZjNtbnRsOXJmNWM0YyJ9.XxWYYAYeQkNOeRRYvCHYhQ"
                        mapStyle="mapbox://styles/mapbox/streets-v11"
                        onViewportChange={this.handleViewportChange}
                    >
                        <Marker
                        latitude={59.922352}
                        longitude={10.7317997}
                        anchor="bottom"
                        >
                            <button className="placeholderBtn">
                                <img src={placeholder} alt="placeholder"/>
                            </button>
                        </Marker>
                    </ReactMapGL>
                </div> 
                <div id="itineraryAnimationInfoContainer" className="itineraryAnimationInfoContainer ">
                    <div id="camillasHus" className="itineraryAnimationInfo camillasHus">
                        <h2>Camillas Hus</h2>
                        <p>Start your romantic get-away at Camillas Hus. Camillas Hus is a unique hotel, situated in the most exclusice part of Oslo, adjacent to the Royal Palace gardens. They offer free parking and breakfast is served in Park29 between 7-10am.</p>
                        <button onClick={ () => this.collapseAndExpand(10.7468122, 59.9177889, "klosteret") }>Next tip</button>
                    </div>
                    <div id="klosteret" className="itineraryAnimationInfo salt">
                        <h2>Klosteret</h2>
                        <p>Continue your date with a private wine tasting at Klosteret's wine cellar. Klosteret is a building from 1899 and has been awarded "best of award of exellence" by Wine Spectator.</p>
                        <button onClick={ () => this.collapseAndExpand(10.747465133666992, 59.907508850097656, "salt") }>Next tip</button>
                    </div>
                    <div id="salt" className="itineraryAnimationInfo salt">
                        <h2>SALT</h2>
                        <p>Book Naustet - a private sauna at Salt with a private locker room and shower. Take a cooling bath in the cold pools behind Àrdna. Remember to bring your own towel and get cosy with your loved one. No funny business though.</p>
                        <button onClick={ () => this.collapseAndExpand(10.74671, 59.911053, "mantra") }>Next tip</button>
                    </div>
                    <div id="mantra" className="itineraryAnimationInfo mantra">
                        <h2>Mantra</h2>
                        <p>Ut fugiat veniam excepteur ut eiusmod cupidatat incididunt duis est excepteur enim ex reprehenderit ad. Non officia nulla eu aute in. Id fugiat enim eiusmod cillum ullamco consectetur laborum mollit. Aliquip qui reprehenderit nisi esse qui.</p>
                        <button onClick={ () => this.collapseAndExpand(10.7317997, 59.922352, "camillasHus") }>Back to the beginning</button>
                    </div>
                   
                </div>    
            </div>
        )
    }
}

export default ForCouples

