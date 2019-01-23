import React, { Component } from 'react';
import { Grid, Cell, List, ListItemContent, ListItem } from 'react-mdl';
class Contact extends Component {
    render() {
        return (
             <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Lucas Huguet</h2>
                        <img src="https://res.cloudinary.com/astrolht31/image/upload/v1548264480/img/IMG_1162.png" alt="avatar" style={{height: '300px'}} />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore magnam neque beatae repudiandae impedit a quae quaerat maiores natus, modi alias. Neque alias eveniet dolorem modi porro, minus vero.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contactez Moi</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fab fa-discord" aria-hidden="true"></i>
                                        AstroLHT31#2243
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fas fa-envelope" aria-hidden="true"></i>
                                        lucashuguet31@mail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fab fa-skype" aria-hidden="true"></i>
                                        live:lucashuguet31_1
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
             </div>
        )
    }
}

export default Contact;