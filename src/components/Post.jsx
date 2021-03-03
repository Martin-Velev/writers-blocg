import React from 'react'

class Post extends React.Component {
	render() {
		return (
			<div>
				{/* Accessing props: https://reactjs.org/docs/components-and-props.html */}
				{this.props.post.title}
				<br />
				{this.props.post.body}
				<br />
				{this.props.post.upvotes}
				<br />
				{this.props.post.downvotes}
				<br />
				{this.props.post.date.toLocaleDateString('en-US')}
				<br />
				<br />
				<br />
			</div>
		)
	}
}

export default Post
