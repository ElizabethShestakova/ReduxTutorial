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

	renderTemplate = () => {
		const { photos, isFetching, error } = this.props

		if (error) {
			return (
				<p className="error">Во время загрузки фото произошла ошибка</p>
			)
		}
		if (isFetching) {
			return <p>Загрузка...</p>
		} else {
			return photos.map(entry => (
				<div key={entry.id} className="photo">
					<img src={entry.sizes[0].url} alt="" />

					<p className="photo__likes">{entry.likes.count} ❤</p>
				</div>
			))
		}
	}

	render() {
		const { year, photos } = this.props
		let lastNum = +photos.length.toString().slice(-1)
		let text = 'фотографий'
		if (lastNum === 1 || lastNum === 2 || lastNum === 3) {
			text = 'фотографии'
		}
		return (
			<div className="ib page">
				<button className="btn" onClick={this.onBtnClick}>
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
				<h3>
					{year} год: {photos.length === 0 ? 'нет' : photos.length}{' '}
					{text}
				</h3>
				<div className="photos">{this.renderTemplate()}</div>
			</div>
		)
	}
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	getPhotos: PropTypes.func.isRequired, //добавили новое свойство в PropTypes
	error: PropTypes.string,
	isFetching: PropTypes.bool.isRequired,
}
