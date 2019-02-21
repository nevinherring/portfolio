import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile_picture.jpg';

class App extends Component {
    state = { displayBio: false };

    //Constructor not needed due to setting state above
    //can use arrow functions to declare functions to bind this
    // constructor() {
    //     super();
    //     this.state = { displayBio: false };

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render(){
        return (
            <div class='avenir'>
                <img src={profile} alt='profile of Nevin Herring' />
                <h1>Hello!</h1>
                <p>My name is Nevin.  I'm and Occupational Therapist learning to code</p>
                <p>I'm currently working on an online resource for other Occupational Therapists to use</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Collinsville, Il just outside of St. Louis, Mo.  I try to code every day.</p>
                            <p>I have tried several coding languages and Javascript is my favorite so far.  I enjoy building apps with Express, node, react and postgres</p>
                            <p>Beside coding, I like to read, go for walks with my wife and our two dogs.</p>
                            <button onClick={this.toggleDisplayBio}>Read Less</button>
                        </div>
                    ): (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;