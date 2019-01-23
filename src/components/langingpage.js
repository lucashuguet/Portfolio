import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Landing extends Component {
    render() {
        return (
             <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://res.cloudinary.com/astrolht31/image/upload/v1548264480/img/IMG_1162.png" alt="Avatar" className="avatar-img" />
                        <div className="banner-text">
                            <h1>Developper Full Stack</h1>
                            <hr/>
                            <p>HTML/CSS | React | Javascript | React Native | PHP | NodeJS | Graphiste</p>

                            <div className="social-links">

                            {/* Bitbucket */}
                                <a href="https://bitbucket.org/AstroLHT31/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-bitbucket"  aria-hidden="true"/>
                                </a>

                            {/* Github */}
                                 <a href="https://github.com/lucashuguet" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square"  aria-hidden="true"/>
                                </a>

                            {/* Skype */}
                                <a href="https://join.skype.com/invite/nMAGKCebRakU" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-skype"  aria-hidden="true"/>
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