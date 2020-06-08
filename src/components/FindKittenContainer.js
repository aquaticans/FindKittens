import React from 'react'
import Search from './Search'
import ImageList from './ImageList'
import SavedList from './SavedList'
import axios from 'axios'
import {myConfig}  from '../config';

export default class FindKittenContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pixList: [],
            searchCategory: '',
            searchText: '',
            savedList: [],
            savedListIds: []
        }

        this.updateSearchText = this.updateSearchText.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
        this.fetchKittens = this.fetchKittens.bind(this);
        this.updateSavedList = this.updateSavedList.bind(this);
    }

    componentWillMount() {
        this.fetchKittens('', 'all', 10);
    }

    updateSearchText(text) {
        if (text.length < 101) this.setState({ searchText: text });
    }

    updateCategory(text) {
        this.setState({ searchCategory: text });
    }

    updateSavedList(pix) {
        if (this.state.savedList.filter(element => element.id === pix.id).length < 1) {
            let updated = this.state.savedList.concat(pix);
            this.setState({ savedList: updated, savedListIds: updated.map(pix => pix.id) });
        }
    }

    fetchKittens(count) {
        let trimText = this.state.searchText.replace(/ +(?= )/g, '');
        this.setState({ searchText: trimText })

        let searchQuery = myConfig['pixabay'];
        if (this.state.searchCategory.length > 0) {
            searchQuery = searchQuery + '&category=' + this.state.searchCategory;
        }
        if (this.state.searchText.length > 0) {
            searchQuery = searchQuery + '&q=' + encodeURIComponent(this.state.searchText);
        }
        axios.get(searchQuery)
            .then(response => {
                if (response.data.hits.length > 0) {
                    this.setState({ pixList: response.data.hits })
                }
                else alert('No Results Found');
            })
            .catch(error => {

                alert('Error Fetching Results from PixaBay', error)
            });
    }

    render() {
        return (
            <div className="FindKittenContainer">
                <div className="LeftContainer">
                    <Search categoryList={categoryList} searchCategory={this.state.searchCategory} searchText={this.state.searchText} updateSearchText={this.updateSearchText} updateCategory={this.updateCategory} fetchNewList={this.fetchKittens}></Search>
                    <ImageList saveKitten={this.updateSavedList} savedListIds={this.state.savedListIds} pixList={this.state.pixList}></ImageList>
                </div>
                <div className="RightContainer">
                    <SavedList savedList={this.state.savedList} ></SavedList>
                </div>
            </div>
        )
    }
}

var categoryList = myConfig['categories'];
