import React, { Component } from 'react'

export default class GenreItem extends Component {
    render() {
        return (
            <div>
                Genre Item
                <button onClick={this.props.handleClick}>Get genres</button>
            </div>
        )
    }
}
