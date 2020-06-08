import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resultCount:10
        }

        this.fetchNewList = this.fetchNewList.bind(this);
    }

    handleChangeSearchText(event) {
        this.props.updateSearchText(event.target.value);
    }

    handleChangeSearchCategory(event) {
        this.props.updateCategory(event.target.value);
    }

    fetchNewList() {
        this.props.fetchNewList(this.state.resultCount);
    }

    render() {
        return (
            <div className="SearchContainer">
                <Form>
                    <Form.Group controlId="Search.SearchText">
                        <Form.Control type="text"        
                            value = {this.props.searchText}
                            placeholder="Keyword..."
                            onChange={this.handleChangeSearchText.bind(this)} />
                    </Form.Group>
                    <Form.Group controlId="Search.SearchCategory">
                        <Form.Control
                            as="select"
                            placeholder="Category..."                            
                            value = {this.props.searchCategory}
                            onChange={this.handleChangeSearchCategory.bind(this)} >
                            <option key='None'>Category...</option>
                            {this.props.categoryList.map((category) =>
                                <option key={category}>{category}</option>
                            )
                            }
                        </Form.Control>
                    </Form.Group>
                    <Button onClick= {this.fetchNewList} className="SearchButton" as="input" type="submit" value="Search" readOnly />
                </Form>
            </div>
        )
    }
}
