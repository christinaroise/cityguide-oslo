import React from 'react';
import {Redirect} from 'react-router-dom'
import ReactMapGL, {Marker} from "react-map-gl";
import placeholder from '../../images/png/002-placeholder-1.png';
import '../pageCss/Explore.css'
import '../pageCss/ItineraryAnimationCard.css'


// ITINERARY ANIMATION FOR COUPLES



class ForFamilies extends React.Component{

    state = {
        viewport: {
            latitude: 59.913485,
            longitude: 10.723724,
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

            if(divID == "FrognerHouseApartments"){
                document.getElementById('FrognerHouseApartments').style.display = 'inherit'                
                document.getElementById('viegelandpark').style.display = 'none'
                document.getElementById('annePaLandet').style.display = 'none'
                document.getElementById('mantra').style.display ='none'
            }else if(divID == "viegelandpark"){
                document.getElementById('FrognerHouseApartments').style.display = 'none'
                document.getElementById('viegelandpark').style.display = 'inherit'
                document.getElementById('annePaLandet').style.display = 'none'
                document.getElementById('mantra').style.display ='none'
            }else if(divID == "annePaLandet"){
                document.getElementById('FrognerHouseApartments').style.display = 'none'
                document.getElementById('viegelandpark').style.display = 'none'
                document.getElementById('annePaLandet').style.display = 'inherit'
                document.getElementById('mantra').style.display ='none'
            }else if(divID == "mantra"){
                document.getElementById('FrognerHouseApartments').style.display = 'none'
                document.getElementById('viegelandpark').style.display = 'none'
                document.getElementById('annePaLandet').style.display = 'none'
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
                        latitude={59.913485}
                        longitude={10.723724}
                        anchor="bottom"
                        >
                            <button className="placeholderBtn">
                                <img src={placeholder} alt="placeholder"/>
                            </button>
                        </Marker>
                    </ReactMapGL>
                </div> 
                <div id="itineraryAnimationInfoContainer" className="itineraryAnimationInfoContainer ">
                    <div id="FrognerHouseApartments" className="itineraryAnimationInfo FrognerHouseApartments">
                        <h2>Frogner House Apartments</h2>
                        <p>Ut fugiat veniam excepteur ut eiusmod cupidatat incididunt duis est excepteur enim ex reprehenderit ad. Non officia nulla eu aute in. Id fugiat enim eiusmod cillum ullamco consectetur laborum mollit. Aliquip qui reprehenderit nisi esse qui. </p>
                        <button onClick={ () => this.collapseAndExpand(10.6996969, 59.9228681, "viegelandpark") }>Next tip</button>
                    </div>
                    <div id="viegelandpark" className="itineraryAnimationInfo viegelandpark">
                        <h2>Viegeland Park</h2>
                        <p>Ut fugiat veniam excepteur ut eiusmod cupidatat incididunt duis est excepteur enim ex reprehenderit ad. Non officia nulla eu aute in. Id fugiat enim eiusmod cillum ullamco consectetur laborum mollit. Aliquip qui reprehenderit nisi esse qui.</p>
                        <button onClick={ () => this.collapseAndExpand(10.702639, 59.923972, "annePaLandet") }>Next tip</button>
                    </div>
                    <div id="annePaLandet" className="itineraryAnimationInfo annePaLandet">
                        <h2>Anne På Landet</h2>
                        <p>Ut fugiat veniam excepteur ut eiusmod cupidatat incididunt duis est excepteur enim ex reprehenderit ad. Non officia nulla eu aute in. Id fugiat enim eiusmod cillum ullamco consectetur laborum mollit. Aliquip qui reprehenderit nisi esse qui.</p>
                        <button onClick={ () => this.collapseAndExpand(10.74671, 59.911053, "mantra") }>Next tip</button>
                    </div>
                    <div id="mantra" className="itineraryAnimationInfo mantra">
                        <h2>Mantra</h2>
                        <p>Ut fugiat veniam excepteur ut eiusmod cupidatat incididunt duis est excepteur enim ex reprehenderit ad. Non officia nulla eu aute in. Id fugiat enim eiusmod cillum ullamco consectetur laborum mollit. Aliquip qui reprehenderit nisi esse qui.</p>
                        <button onClick={ () => this.collapseAndExpand(10.723724, 59.913485, "FrognerHouseApartments") }>Back to the beginning</button>
                    </div>
                </div>    
            </div>
        )
    }
}

export default ForFamilies

