import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'

import './App.css'
class App extends Component {
	render() {
		const { user, page, getPhotosAction, handleLoginAction } = this.props
		return (
			<div className="row">
				<Page
					photos={page.photos}
					year={page.year}
					isFetching={page.isFetching}
					error={page.error}
					getPhotos={getPhotosAction}
				/>
				<User
					name={user.name}
					isFetching={user.isFetching}
					error={user.error}
					handleLogin={handleLoginAction}
				/>
			</div>
		)
	}
}

//приклеиваем данные из store
const mapStateToProps = store => {
	console.log(store)
	return {
		user: store.user,
		page: store.page,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getPhotosAction: year => dispatch(getPhotos(year)),
		handleLoginAction: () => dispatch(handleLogin()),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
