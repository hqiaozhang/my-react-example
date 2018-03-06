import React, { Component } from 'react'
 
import { Link } from 'react-router'
import './Preview.css'

export default class Preview extends Component {

  constructor(props) {
    super(props)
    this.handleNavigate = this.handleNavigate.bind(this)
  }

  handleNavigate(id, e) {
    // 阻止原生链接跳转
    e.preventDefault()
  
    // this.props.push(id)
  }
// 
  render() {
    const { title, date, description, id } = this.props
  
    return (
      <article className='article-preview-item'>
        <h1 className='title'>
          <Link to={`/detail/${id}`}
            // onClick={this.handleNavigate.bind(this, id)}
          >
          {title}
          </Link>
        </h1>
        <span className="date">{date}</span>
        <p className="desc">{description}</p>
      </article>  
    )
  }
}