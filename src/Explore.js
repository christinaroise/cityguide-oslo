import React from 'react';
import {Redirect} from 'react-router-dom';
import './components/pageCss/Explore.css';

class Explore extends React.Component {
    
    state = {
        redirect: false
    }

    setRedirect = (navigateTo) => { 

        this.setState({
            redirect:true,
            path: navigateTo 
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={this.state.path}/>
        }
    }


    render () {

        const {path} = this.state

        return (
            <div>
                  <div id="explorePage" className="explorePage">
                      <div className="itineraryLibrary">
                          <div className="itineraryLibraryTxt">
                              <h1>Oslo City</h1>
                              <p>A quick taste of Norways beauty.</p>
                          </div>
                      </div>
                      <div className="itineraryCardContainer">
                          {this.renderRedirect()}
                          <div className="itineraryCard" onClick= { () => {this.setRedirect("/ForCouples")}} 
                          >
                              <div className="itineraryCardTxt" >
                                  <h2>Let's get it on</h2>
                                  <p>For the couple</p>
                              </div>
                          </div>
                          <div className="itineraryCard" onClick= { () => {this.setRedirect("/ForFamilies")}} 
                          >
                              <div className="itineraryCardTxt">
                                  <h2>Let's explore</h2>
                                  <p>For the family</p>
                              </div>
                          </div>
                          <div className="itineraryCard" onClick= { () => {this.setRedirect("/ForAdrenalinJunkie")}} 
                          >
                              <div className="itineraryCardTxt">
                                  <h2>Let's taste life</h2>
                                  <p>For the adrenaline junkie</p>
                              </div>
                          </div>
                      </div>
                 </div>
      
            </div>
          );
    }
    
}

export default Explore