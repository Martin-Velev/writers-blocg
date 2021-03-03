import React from 'react'
import './DashBoard.css'
import Post from './Post'

// MAP: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// const array1 = [1, 2, 3]
// const map1 = array1.map(x => x * 2);

class DashBoard extends React.Component {
	render() {
		return (
			<div className="dashBoard">

        {this.props.posts.map(post => <Post post={post} />)}
			</div>
		)
	}
}

export default DashBoard
