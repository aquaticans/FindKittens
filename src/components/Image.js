import React from 'react'
import { Badge } from 'react-bootstrap'
import { FaThumbsUp, FaStar } from 'react-icons/fa';


export default class Image extends React.Component {

    saveKitten() {
        this.props.saveKitten(this.props.pix);
    }

    isSavedText() {
        if (this.props.savedListIds.includes(this.props.pix.id)) return 'Saved';
        else return 'Save';
    }

    isSavedClass() {
        if (!this.props.savedListIds.includes(this.props.pix.id)) return 'ImgThumbButton';
        else return 'ImgThumbButton ImgThumbButtonSaved';
    }

    render() {
        return (
            <div className="ImgContainer">
                <div className="ImgBox">
                    <div className="ImgThumbBox" >
                        <img className="ImgThumb" src={this.props.pix.webformatURL} alt={this.props.pix.webformatURL} ></img>
                        <div className={this.isSavedClass()} onClick={this.saveKitten.bind(this)}>{this.isSavedText()}</div>
                    </div>
                </div>
                <div className="ImgInfo">
                    <div className="ImgTags">
                        {this.props.pix.tags.split(',').map((pix) =>
                            <Badge variant="success" key={pix}>{pix}</Badge>
                        )}
                    </div>
                    <div className="ImgStats">
                        <div className="ImgLikes">{this.props.pix.likes + '  '}<FaThumbsUp className='IconAlign'/> </div><div className="ImgFavorites">{this.props.pix.favorites + '  '}<FaStar className='IconAlign'/>  </div>
                    </div>
                </div>
            </div>
        )
    }
}
