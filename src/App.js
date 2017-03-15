import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ListContainer from './containers/listContainer';
import Api from './utils/api';
import jQuery from 'jquery';
import styles from './style/style.css'

class App extends Component {
  constructor (prop) {
    super(prop)
    this.state = {
      data: []
    }
  }
  componentWillMount () {
    this.serverRequest = jQuery.ajax({
      method: 'GET',
      url: Api.getProjects(),
      dataType: 'jsonp',
      success: function (data) {
        this.setState({
            data: data.projects
          })
      }.bind(this)
    })

  }
  render() {
    return (
      <div className="page-home">
        <Header />
        <div className="container">
          <ListContainer data={this.state.data}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
