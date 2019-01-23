import React, { Component } from 'react';
import { Card, CardTitle, CardActions, Button } from 'react-mdl';

class Jeux extends Component {
    render() {
        return (
            <div className="projects-grid">
                {/*Carte 1*/}
                <div style={{paddingTop: '2em'}}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://res.cloudinary.com/astrolht31/image/upload/v1548265775/img/Screenshot_2019-01-23_2048.png) bottom right 15% no-repeat #46B6AC', backgroundSize: 'cover'}}>2048</CardTitle>
                        <CardActions border>
                            <Button colored href="/src/2048/index.html">Jouer</Button>
                        </CardActions>
                    </Card>
                </div>

                {/*Carte 2*/}
                
                <div style={{paddingTop: '2em'}}>   
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Asteroids</CardTitle>
                        <CardActions border>
                            <Button colored href="/src/asteroids/index.html">Jouer</Button>
                        </CardActions>
                    </Card>
                </div>

                {/*Carte 3*/}
                
                <div style={{paddingTop: '2em'}}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Donkey-Kong</CardTitle>
                        <CardActions border>
                            <Button colored href="/src/Donkey-Kong/index.html">Jouer</Button>
                        </CardActions>
                    </Card>
                </div>

                {/*Carte 4*/}
                
                <div style={{paddingTop: '2em'}}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Morpion</CardTitle>
                        <CardActions border>
                            <Button colored href="/src/Morpion/index.html">Jouer</Button>
                        </CardActions>
                    </Card>
                </div>

                {/*Carte 5*/}
                
                <div style={{paddingTop: '2em'}}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Pacman</CardTitle>
                        <CardActions border>
                            <Button colored href="/src/Pacman/index.html">Jouer</Button>
                        </CardActions>
                    </Card>
                </div>

                {/*Carte 6*/}
                
                <div style={{paddingTop: '2em'}}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Pong</CardTitle>
                        <CardActions border>
                            <Button colored href="/src/pong/index.html">Jouer</Button>
                        </CardActions>
                    </Card>
                </div>

                {/*Carte 7*/}
                
                <div style={{paddingTop: '2em'}}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Snake</CardTitle>
                        <CardActions border>
                            <Button colored href="/src/snake/index.html">Jouer</Button>
                        </CardActions>
                    </Card>
                </div>

                {/*Carte 8*/}
                
                <div style={{paddingTop: '2em'}}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Mario</CardTitle>
                        <CardActions border>
                            <Button colored href="/src/mario/index.html">Jouer</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Jeux;