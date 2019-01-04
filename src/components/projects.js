import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';
import ReactJs from './projects/react';
import Graphiste from './projects/graphiste';
import Html from './projects/html';
class Projects extends Component {

    constructor(probs) {
        super(probs);
        this.state = { activeTab: 1 }
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <ReactJs/>
            )
        } else if (this.state.activeTab === 1){
            return(
                <Graphiste/>
            )
        } else if (this.state.activeTab === 2){
            return(
                <Html/>
            )
        }
    }



    render() {
        return (
             <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Graphiste</Tab>
                    <Tab>HTML/CSS</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
             </div>
        )
    }
}

export default Projects;