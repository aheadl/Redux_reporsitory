import React, { Component } from 'react';

import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
//import About from './AboutComponent';
import {About, testPropspassing} from './AboutComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

   
//** My notes**:
//The filter below, grabs one object and sends to the CampsiteInfo component
//Render is added as an attribute to <Route below because the campsite object is being passed to Directory
// Note that unlike the <Route> for the Directory component, you use the attribute component instead of render

// In the render() pass the campsite, promotion and partner objects to the Home page:
//       use the filter array method to filter for objects where the featured property evaluates to true. 
//Then, because filter returns an array and you want to pass an object, 
//you will use [0] to access one object in the array. 


    render() {
        const HomePage = () => {
            return (
                <Home  
                    campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        };

        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo 
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        };    
        //match.params is used to dig out the router 'campsiteId' parameter passed in /directory/:campsiteId when CampsiteWithId is called
       
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                   
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About partners={this.state.partners} /> } />
                    
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;