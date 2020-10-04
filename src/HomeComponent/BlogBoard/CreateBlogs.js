import React from 'react';

class CreateBlogs {
  render() {
    return (
      <div className="mt-4" id="wrapper" style={{ paddingTop: 75 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-5">
              <h2>
                Blog <i className="fa fa-angle-right font-weight-bold" aria-hidden="true" /> Create Blog
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 blog_img">
              <div id="image-preview">
                <input type="hidden" name="LogoURL" defaultValue />
                <img id="PhotoUrlImg" src="images/blog_image.jpg" className="mCS_img_loaded img-fluid" />
                <input type="file" name="image" id="image-upload" />
                <label htmlFor="image" id="image-label" />
                <span>Blog Image</span>
              </div>
              <ul className="pt-2 no-bullets">
                <li>
                  <div className="form-group">
                    <input type="text" className="form-control" id name defaultValue="Blog Title" />
                  </div>
                </li>
                <li>
                  <div className="form-group">
                    <input type="text" className="form-control" id name defaultValue="Describe Your Blog" />
                  </div>
                </li>
              </ul>
              <ul className="d-flex text-white p-0 pt-2 buttons_all">
                <li>
                  <button type="button" className="btn create_btn">
                    CREATE
                  </button>
                </li>
                <li>
                  <button type="button" className="btn cancel_btn ml-lg-4">
                    CANCEL
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <h6 className="border_right">
                <span>My Previous Blogs</span>
              </h6>
              <div className style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                <div className="blogs_create">
                  <div className="card mt-2">
                    <img className="card-img-top img-fluid" src="images/food.jpg" alt />
                    <div className="card-body p-2">
                      <div className>
                        <div className="dropdown float-right">
                          <a href>
                            <i className="fa fa-share-alt" />
                          </a>
                        </div>
                        <p className="m-0">
                          <b>Food for better health</b>
                        </p>
                        <span>
                          <small>Lorem Ipsum is simply dummy text of dummy</small>
                        </span>
                      </div>
                      <div className="media m-0">
                        <div className="d-flex mr-1">
                          <a href>
                            <img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" />
                          </a>
                        </div>
                        <div className="media-body">
                          <small>
                            <span className="m-0 on_name">
                              <b>Benjamin Robinson</b>
                            </span>
                          </small>
                          <br />
                          <small>
                            <span className="on_date">14 Aug 2020, 09:00 PM</span>
                          </small>
                        </div>
                      </div>
                      {/* / media */}
                    </div>
                  </div>
                </div>
                <div className="blogs_create">
                  <div className="card mt-2">
                    <img className="card-img-top img-fluid" src="images/food.jpg" alt />
                    <div className="card-body p-2">
                      <div className>
                        <div className="dropdown float-right">
                          <a href>
                            <i className="fa fa-share-alt" />
                          </a>
                        </div>
                        <p className="m-0">
                          <b>Food for better health</b>
                        </p>
                        <span>
                          <small>Lorem Ipsum is simply dummy text of dummy</small>
                        </span>
                      </div>
                      <div className="media m-0">
                        <div className="d-flex mr-1">
                          <a href>
                            <img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" />
                          </a>
                        </div>
                        <div className="media-body">
                          <small>
                            <span className="m-0 on_name">
                              <b>Benjamin Robinson</b>
                            </span>
                          </small>
                          <br />
                          <small>
                            <span className="on_date">14 Aug 2020, 09:00 PM</span>
                          </small>
                        </div>
                      </div>
                      {/* / media */}
                    </div>
                  </div>
                </div>
                <div className="blogs_create">
                  <div className="card mt-2">
                    <img className="card-img-top img-fluid" src="images/banner2.png" alt />
                    <div className="card-body p-2">
                      <div className>
                        <div className="dropdown float-right">
                          <a href>
                            <i className="fa fa-share-alt" />
                          </a>
                        </div>
                        <p className="m-0">
                          <b>Food for better health</b>
                        </p>
                        <span>
                          <small>Lorem Ipsum is simply dummy text of dummy</small>
                        </span>
                      </div>
                      <div className="media m-0">
                        <div className="d-flex mr-1">
                          <a href>
                            <img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" />
                          </a>
                        </div>
                        <div className="media-body">
                          <small>
                            <span className="m-0 on_name">
                              <b>Benjamin Robinson</b>
                            </span>
                          </small>
                          <br />
                          <small>
                            <span className="on_date">14 Aug 2020, 09:00 PM</span>
                          </small>
                        </div>
                      </div>
                      {/* / media */}
                    </div>
                  </div>
                </div>
                <div className="blogs_create">
                  <div className="card mt-2">
                    <img className="card-img-top img-fluid" src="images/food.jpg" alt />
                    <div className="card-body p-2">
                      <div className>
                        <div className="dropdown float-right">
                          <a href>
                            <i className="fa fa-share-alt" />
                          </a>
                        </div>
                        <p className="m-0">
                          <b>Food for better health</b>
                        </p>
                        <span>
                          <small>Lorem Ipsum is simply dummy text of dummy</small>
                        </span>
                      </div>
                      <div className="media m-0">
                        <div className="d-flex mr-1">
                          <a href>
                            <img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" />
                          </a>
                        </div>
                        <div className="media-body">
                          <small>
                            <span className="m-0 on_name">
                              <b>Benjamin Robinson</b>
                            </span>
                          </small>
                          <br />
                          <small>
                            <span className="on_date">14 Aug 2020, 09:00 PM</span>
                          </small>
                        </div>
                      </div>
                      {/*/ media */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBlogs;
