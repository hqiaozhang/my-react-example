import React, { PropTypes, Component } from 'react'
import Preview from './Preview'
 
 
export default class PreviewList extends Component {

  componentDidMount() {
    
    this.props.loadArticles()
  }

  render() {
    const { articleList, loading, error, push } = this.props

    // if (error) {
    //   return <p className="message">Oops, something is wrong.</p>
    // }
    if (loading) {
      return <p className="message">Loading...</p>
    }
    return (
      <div className='articles'>
        { articleList.map(item => <Preview {...item} key={item.id} push={push} />) }
      </div>  
    )
  }
}
