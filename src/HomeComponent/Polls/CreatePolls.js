import React, { Component } from 'react'

export class CreatePolls extends Component {
    render() {
        return (
            <div className="mt-4" id="wrapper" style={{paddingTop: 75}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12 mb-5">
        <h2>Poll <i className="fa fa-angle-right font-weight-bold" aria-hidden="true" /> Create Poll</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-5">
        <div className="form-group mb-4">
          <textarea className="form-control" rows={2} id placeholder="Let's create a garden for kids in our society." defaultValue={""} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" id placeholder="option" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" id placeholder="Lorem Ipsum is simply dummy text of the printing" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" id placeholder="Lorem Ipsum is simply dummy text of the printing" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" id placeholder="Lorem Ipsum is simply dummy text of the printing" />
        </div>
        <div className="mt-5 mb-5">
          <div className="form-check-inline ">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio" />Share as a anonymous
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio" />Share as a non-anonymous
            </label>
          </div>
        </div>
        <ul className="d-flex text-white p-0 buttons_all">
          <li><button type="button" className="btn create_btn">CREATE</button></li>
          <li><button type="button" className="btn cancel_btn ml-lg-4">CANCEL</button></li>
        </ul>	
      </div>
      <div className="col-lg-6 offset-lg-1">
        <h5 className="polls">My Previous Polls</h5>
        <div className="row">
          <div className="col-lg-12">
            <div className="card mt-2 pt-2 pb-2">
              <div className="col-lg-12 date_details">
                <span>Created On</span> <span className="on_date">15 Aug 2020, 02:15 PM</span>
              </div>
              <div className="col-lg-12">
                <div className>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="disc_list">
                        <span className="disc_color bg-warning" /><span className="disc_font">You have a positive attitude towards your work</span>
                      </div>
                      <div className="disc_list">
                        <span className="disc_color bg-info" /><span className="disc_font">The Moon in Cancer will promote a feeling</span>
                      </div>
                      <div className="disc_list">
                        <span className="disc_color bg-primary" /><span className="disc_font">They motivated and inspiried you to handle the project</span>
                      </div>
                      <div className="disc_list">
                        <span className="disc_color bg-dark" /><span className="disc_font">You had been struggle with it for quite some</span>
                      </div>
                      <div>
                        <span className="text-primary desk_font">549 people voted on your poll</span>
                      </div>
                    </div>
                    {/*<div class="col-8"><div id="pie_legend" class="py-3 text-left"></div></div>*/}
                    <div className="col-lg-4"><canvas id="property_types" className="pie" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-2 pt-2 pb-2">
              <div className="col-lg-12 date_details">
                <span>Created On</span> <span className="on_date">15 Aug 2020, 02:15 PM</span>
              </div>
              <div className="col-lg-12">
                <div className>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="disc_list">
                        <span className="disc_color bg-warning" /><span className="disc_font">You have a positive attitude towards your work</span>
                      </div>
                      <div className="disc_list">
                        <span className="disc_color bg-info" /><span className="disc_font">The Moon in Cancer will promote a feeling</span>
                      </div>
                      <div className="disc_list">
                        <span className="disc_color bg-primary" /><span className="disc_font">They motivated and inspiried you to handle the project</span>
                      </div>
                      <div className="disc_list">
                        <span className="disc_color bg-dark" /><span className="disc_font">You had been struggle with it for quite some</span>
                      </div>
                      <div>
                        <span className="text-primary desk_font">549 people voted on your poll</span>
                      </div>
                    </div>
                    {/*<div class="col-8"><div id="pie_legend" class="py-3 text-left"></div></div>*/}
                    <div className="col-lg-4"><canvas id="property_typesa" className="pie" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}

export default CreatePolls
