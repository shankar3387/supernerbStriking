import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class BlogBoard extends Component {
    render() {
        console.log(this.props.blogs)
        return (
            <div className="col-lg-12 p-1">
            <div className="post-slide9">
              <div className="blog-img">
                <img src={this.props.blogs.ImageSrc} alt="true" className="img-fluid" />
              </div>
              <div className="post-review">
                <ul className="d-flex justify-content-between no-bullets">
                  <li>
                   {this.props.blogs.blog_title}
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><Link  className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></Link></li>
                        <li><Link  className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></Link></li>
                        <li><Link  className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                        <li><Link  className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></Link></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="media_blog idea_media pb-1">
                  <div className="d-flex mr-1">
                    <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                  </div>
                  <div className="media-body">
                    <small><span className="m-0 on_name">{this.props.blogs.description_blogs}</span></small><br />
                    <small><span className="on_date">{this.props.blogs.updated_datetime}</span></small>
                  </div>
                </div>{/*/ media */}
              </div>
            </div>
          </div>
        )
    }
}

export default BlogBoard
