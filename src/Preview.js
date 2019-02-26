import React, { Component } from 'react';

class Preview extends Component {
	render(){
		// in a container return all the subjects preview images
		// if a preview image is clicked, trigger the detail view of the corresponding semester
		return (
			<div className="Preview-container">
                {
                    this.props.project.aspects.map(aspect => (
                        <section key={aspect.name} className="Preview-square">
                            <img className="Preview-img" src={aspect.preview} onClick={() => alert(aspect.name)}/>
                        </section>
                    ))
                }
            </div>
		);
	}
}

export default Preview;