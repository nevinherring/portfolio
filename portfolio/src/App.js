import React, { Component } from 'react';

class App extends Component {
    state = { displayBio: false }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <p>My name is Nevin.  I'm a freelance web developer.</p>
                <p>I enjoy building web apps and learning new things.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live just outside of St. Louis, Mo.</p>
                            <p>I enjoy building projects with JavaScript and learning new frameworks.</p>
                            <p>Besides coding, I enjoy going on walks with my wife and two dogs and playoing board games.</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio}>Read More</button>
                            </div>
                        )
                }
            </div>
        )
    }
}

export default App;