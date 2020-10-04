import React, { Component } from 'react'

export default class Bloggers extends Component {
    
    render() {
        return (
            <div className="col-lg-6 p-2">
            <div className="blog bg-white rounded text-center">
              <div className="blog_img">
                <img src={this.props.blogs.ImageSrc} alt='man' className="img-fluid rounded" />
              </div>
              <div className="blog_desc">
                <span><small><b>{this.props.blogs.bloggers_title}</b></small></span>
                <span><small>+{this.props.blogs.number_of_blogs} Blogs</small></span>
              </div>
            </div>	
          </div>
        )
    }
}
