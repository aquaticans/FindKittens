import React from 'react'
import Image from './Image'

export default class ImageList extends React.Component {

    render() {
        return (
            <div className="ImageListContainer">
                {this.props.pixList.map((pix) =>
                    <Image savedListIds= {this.props.savedListIds}  pix={pix} key={pix.id} saveKitten={this.props.saveKitten}></Image>
                )
                }
            </div>
        )
    }
}
