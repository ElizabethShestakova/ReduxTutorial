import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
	onBtnClick = e => {
		document.querySelectorAll('.btn').forEach(item => {
			item.classList.remove('btn-active')
		})
		e.currentTarget.classList.add('btn-active')
		const year = +e.currentTarget.innerText
		this.props.getPhotos(year)
	}

	render() {
		const { year, photos, isFetching } = this.props
		return (
			<div className="ib page">
				<button className="btn btn-active" onClick={this.onBtnClick}>
					2018
				</button>
				<button className="btn" onClick={this.onBtnClick}>
					2017
				</button>
				<button className="btn" onClick={this.onBtnClick}>
					2016
				</button>
				<button className="btn" onClick={this.onBtnClick}>
					2015
				</button>
				<button className="btn" onClick={this.onBtnClick}>
					2014
				</button>
				<h3>{year} год</h3>
				{isFetching ? (
					<p>Загрузка...</p>
				) : (
					<p className="text">
						У тебя {photos.length} фото за {year} год
					</p>
				)}
			</div>
		)
	}
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	getPhotos: PropTypes.func.isRequired, //добавили новое свойство в PropTypes
	isFetching: PropTypes.bool.isRequired,
}
