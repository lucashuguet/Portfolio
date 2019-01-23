import React, { Component } from 'react';
import { Card, CardTitle, CardActions, Button } from 'react-mdl';

class Jeux extends Component {
    render() {
        return (
            <div className="projects-grid">
                {/*Carte 1*/}
                
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update1</CardTitle>
                    <CardActions border>
                        <Button colored>Jouer</Button>
                    </CardActions>
                </Card>
                
                {/*Carte 2*/}
                
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update1</CardTitle>
                    <CardActions border>
                        <Button colored>Jouer</Button>
                    </CardActions>
                </Card>
                
                {/*Carte 3*/}
                
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update1</CardTitle>
                    <CardActions border>
                        <Button colored>Jouer</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Jeux;