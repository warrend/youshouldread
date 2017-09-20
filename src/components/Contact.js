import React from 'react'
// import {Link} from 'react-router-dom';

class Contact extends React.Component {
	apiCall = () => {
		console.log('a')
		fetch(`http://localhost:3000/books`)
			.then(res => {
				console.log('b')
				return res.json()
			})
			.then(books => console.log('c', books))

		console.log('d')
	}

	render() {

		return (
			<div className="full">
				<h1>Have ideas or comments?</h1>
				<button onClick={this.apiCall} >Call Api</button>
				<p>Feel free to email me at warrend555@gmail.com or checkout the project on <a href="https://github.com/warrend/youshouldread">github</a></p>
			</div>
		)
	}
}

export default Contact