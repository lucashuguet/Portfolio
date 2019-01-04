import React, { Component } from 'react';
import { Card, CardTitle } from 'react-mdl';

class Graphiste extends Component {
    render() {
        return (
            <div className="projects-grid">
                {/*Carte 1*/}
                
                <Card shadow={0} style={{width: '320px', height: '200px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://i.ibb.co/pPSmTtX/Skin-me.png)  bottom right 15% no-repeat #46B6AC', backgroundSize: 'cover'}}></CardTitle>               
                </Card>
                
                {/*Carte 2*/}
                
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://i.ibb.co/JkG4ZDY/logo-2.png) bottom right 15% no-repeat #46B6AC ', backgroundSize: 'cover'}}></CardTitle>
                </Card>
                
                {/*Carte 3*/}
                
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://i.ibb.co/gV2DhHy/logo-final.png) bottom right 15% no-repeat #46B6AC', backgroundSize: 'cover'}}></CardTitle>
                </Card>
            </div>
        )
    }
}

export default Graphiste;