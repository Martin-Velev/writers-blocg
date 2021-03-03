import './Hotbar.css'
import React from 'react'

class Hotbar extends React.Component {
	render() {
		return (
      // css Class names: https://www.w3schools.com/cssref/sel_class.asp
			<div className="hotbar">
				<button className="hotbarButton">Hot</button>
				<button className="hotbarButton">New</button>
				<button className="hotbarButton">Random</button>
			</div>
		)
	}
}

export default Hotbar
