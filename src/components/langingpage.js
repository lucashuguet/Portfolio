import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Landing extends Component {
    render() {
        return (
             <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://i.ibb.co/3ydGdHV/IMG-1162.png" alt="Avatar" className="avatar-img" />
                        <div className="banner-text">
                            <h1>Developper Full Stack</h1>
                            <hr/>
                            <p>HTML/CSS | React | Javascript | React Native | PHP | NodeJS | Graphiste</p>

                            <div className="social-links">

                            {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin"  aria-hidden="true"/>
                                </a>

                            {/* Github */}
                                 <a href="https://github.com/lucashuguet" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square"  aria-hidden="true"/>
                                </a>

                            {/* Discord */}
                                 <a href="https://discord.gg/6MYn5Fr" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-discord"  aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>

                </Grid>
             </div>
        )
    }
}

export default Landing;