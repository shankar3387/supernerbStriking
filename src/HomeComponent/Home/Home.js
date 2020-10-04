import React from 'react'
import { Link } from 'react-router-dom'
import Fashion from '../Fashion/Fashion'
import BlogBoard from '../BlogBoard/BlogBoard';
import CreateBlogsButton from '../BlogBoard/CreateBlogsButton';
import CreatePollsButton from '../Polls/CreatePollsButton';
import Bloggers from '../TopBloggers/Bloggers';
import CommunityModal from '../CommunityModal/CommunityModal';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

export default class Home extends React.Component{
    
    fashion = [
        {
            ImageSrc:'images/lady.png',
            title:'Solid Fashion Cotton Silk',
            quantity:'1',
            discount_price: '399',
            offers: '20% off',
            price:'799'


        },
        {
            ImageSrc:'images/lady.png',
            title:'Nischitha',
            quantity:'1',
            discount_price: '₹ 899',
            offers: '20% off',
            price:'799'


        },
        {
            ImageSrc:'images/lady.png',
            title:'Shrishail',
            quantity:'1',
            discount_price: '699',
            offers: '20% off',
            price:'₹ 799'


        },
        {
            ImageSrc:'images/lady.png',
            title:'Yogi',
            quantity:'1',
            discount_price: '399',
            offers: '20% off',
            price:'799'


        },
        {
            ImageSrc:'images/lady.png',
            title:'Ravi',
            quantity:'1',
            discount_price: '699',
            offers: '20% off',
            price:'799'


        },
        {
            ImageSrc:'images/lady.png',
            title:'Shankar',
            quantity:'1',
            discount_price: '₹ 899',
            offers: '20% off',
            price:'₹ 799'


        },
        
    ];
    blogsArray = [
       {
        ImageSrc:'images/man.jpg',
        blog_title:'Nischitha',
        description_blogs:'',
        updated_datetime:'',
       },
       {
        ImageSrc:'images/man.jpg',
        blog_title:'Shrishail',
        description_blogs:'',
        updated_datetime:'',
       },
       {
        ImageSrc:'images/man.jpg',
        blog_title:'Yogi',
        description_blogs:'',
        updated_datetime:'',
       },
       {
        ImageSrc:'images/man.jpg',
        blog_title:'Ravi',
        description_blogs:'',
        updated_datetime:'',
       },
    ]
      BloggerArray = [{
          ImageSrc:'images/man.jpg',
          bloggers_title:'shree',
          number_of_blogs:'6000'
      },
      {
        ImageSrc:'images/man.jpg',
        bloggers_title:'yogi',
        number_of_blogs:'20'
    }
    
    ]
     fashionList = this.fashion.map(list=> <Fashion fashion={list} />)
     blogsList = this.blogsArray.map(blogs=><BlogBoard blogs={blogs} />)
     BloggersList = this.BloggerArray.map(blogs=><Bloggers blogs={blogs} />)

     componentDidMount(){
      const text = 'test'
      ModalManager.open(<CommunityModal text={text} onRequestClose={() => true}/>);
     }
    render() {
        return (
            <div className="app-container" style={{marginTop: 19}}>
  {/* Page Content */}
  <div className="container-fluid mt-5 ">
    <div className="row">
      <div className="col-lg-9 p-0">
        <img src="images/bannermain.png" className="img-fluid" alt="supernebr" style={{height: 405, width: '100%'}} />
        <div style={{position: "absolute", top: "40%",left: "10%",color: "white",fontSize: "35px"}}>Your Tagline Goes here</div> 
        <p style={{position: "absolute", top: "55%",left: "10%",color: "#d4d1bc",fontSize: "10px"}}>lorem ipsum is simply dummy text of the printing and type scoring industry</p>  
      </div>
      <div className="col-lg-3 p-0">
        <div className="col-lg-12 pl-1 pr-0 pl-xs-0">
          <img src="images/banner2.png" className="img-fluid" alt="supernebr" style={{height: 200, width: '100%'}} />
        </div>
        <div className="col-lg-12 pl-1 pt-1 pr-0 pl-xs-0">
          <img src="images/banner3.png" className="img-fluid" alt="supernebr" style={{height: 200, width: '100%'}} />
        </div>
      </div>
    </div>
  </div>
  <div className="container pt-5">
    <div className="row">
      <div className="col-lg-8">
        <div className="row">
          <div className="col">
            <div className="card-home">
              <img src={"../images/banner2.png"} alt='true' className="img-fluid" />
              <p style={{position: "absolute", top: "40%",left: "30%",color: "white",fontSize: "15px"}}>Upcoming Pop-Up <br/>&nbsp;&nbsp;Shops in your <br/>&nbsp;&nbsp;&nbsp; community</p>
            </div>
          </div>
          <div className="col">
            <div className="card-home">
              <img src={"../images/banner2.png"} alt='true' className="img-fluid" />
              <p style={{position: "absolute", top: "50%",left: "30%",color: "white",fontSize: "15px"}}>Upcoming Events</p>
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-lg-12">
            <h4>Leaderboard</h4>
          </div>
          <div className="col-lg-8 pr-2">
            <div className="rounded bg-white board">
              <div className="media idea_media border-bottom p-2">
                <div className="d-flex mr-1">
                  <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                </div>
                <div className="media-body d-flex justify-content-between">
                  <span><small><span className="m-0 on_name"><b>Vaibhav Sharma Bought <Link href>Casual Shirt</Link></b></span></small><br />
                    <small><span>8 Order placed out of 10 by 5 members</span></small>
                  </span>
                  <span><small className="text-warning">14 aug 2020, 09:00 PM</small></span>
                </div>
              </div>{/*/ media */}
              <div className="media idea_media border-bottom p-2">
                <div className="d-flex mr-1">
                  <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                </div>
                <div className="media-body d-flex justify-content-between">
                  <span><small><span className="m-0 on_name"><b>Vaibhav Sharma Bought <Link href>Casual Shirt</Link></b></span></small><br />
                    <small><span>8 Order placed out of 10 by 5 members</span></small>
                  </span>
                  <span><small className="text-warning">14 aug 2020, 09:00 PM</small></span>
                </div>
              </div>{/*/ media */}
              <div className="media idea_media border-bottom p-2">
                <div className="d-flex mr-1">
                  <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                </div>
                <div className="media-body d-flex justify-content-between">
                  <span><small><span className="m-0 on_name"><b>Vaibhav Sharma Bought <Link href>Casual Shirt</Link></b></span></small><br />
                    <small><span>8 Order placed out of 10 by 5 members</span></small>
                  </span>
                  <span><small className="text-warning">14 aug 2020, 09:00 PM</small></span>
                </div>
              </div>{/*/ media */}
              <div className="media idea_media border-bottom p-2">
                <div className="d-flex mr-1">
                  <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                </div>
                <div className="media-body d-flex justify-content-between">
                  <span><small><span className="m-0 on_name"><b>Vaibhav Sharma Bought <Link href>Casual Shirt</Link></b></span></small><br />
                    <small><span>8 Order placed out of 10 by 5 members</span></small>
                  </span>
                  <span><small className="text-warning">14 aug 2020, 09:00 PM</small></span>
                </div>
              </div>{/*/ media */}
              <div className="media idea_media border-bottom p-2">
                <div className="d-flex mr-1">
                  <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                </div>
                <div className="media-body d-flex justify-content-between">
                  <span><small><span className="m-0 on_name"><b>Vaibhav Sharma Bought <Link href>Casual Shirt</Link></b></span></small><br />
                    <small><span>8 Order placed out of 10 by 5 members</span></small>
                  </span>
                  <span><small className="text-warning">14 aug 2020, 09:00 PM</small></span>
                </div>
              </div>{/*/ media */}
            </div>	
          </div>
          <div className="col-lg-4 rounded bg-white board">
            <div className="row">
              <div className="col-lg-12 pl-2 pt-2">
                <h6>Top Bloggers</h6>
              </div>
              {this.BloggersList}
             </div>
            <div className="row">
              <div className="col-lg-12 pl-2 pt-2">
                <h6>Top Activitist</h6>
              </div>
              <div className="col-lg-6 p-2">
                <div className="blog bg-white rounded text-center">
                  <div className="blog_img">
                    <img src="images/man.jpg" className="img-fluid rounded" />
                  </div>
                  <div className="blog_desc">
                    <span><small><b>Vaibhav Sharma</b></small></span>
                    <span><small>+420 Blogs</small></span>
                  </div>
                </div>	
              </div>
              <div className="col-lg-6 p-2">
                <div className="blog bg-white rounded text-center">
                  <div className="blog_img">
                    <img src="images/man.jpg" className="img-fluid rounded" />
                  </div>
                  <div className="blog_desc">
                    <span><small><b>Vaibhav Sharma</b></small></span>
                    <span><small>+420 Blogs</small></span>
                  </div>
                </div>	
              </div>
              <div className="col-lg-6 p-2">
                <div className="blog bg-white rounded text-center">
                  <div className="blog_img">
                    <img src="images/man.jpg" alt="true" className="img-fluid rounded" />
                  </div>
                  <div className="blog_desc">
                    <span><small><b>Vaibhav Sharma</b></small></span>
                    <span><small>+420 Blogs</small></span>
                  </div>
                </div>	
              </div>
              <div className="col-lg-6 p-2">
                <div className="blog bg-white rounded text-center">
                  <div className="blog_img">
                    <img src="images/man.jpg" alt="true" className="img-fluid rounded" />
                  </div>
                  <div className="blog_desc">
                    <span><small><b>Vaibhav Sharma</b></small></span>
                    <span><small>+420 Blogs</small></span>
                  </div>
                </div>	
              </div>
            </div>
          </div>
        </div>
        {/*---------------///////////Leaderboard////////------------------*/}
        {/*-----------Poll------------*/}
        <div className="row pt-4">
          <div className="col-lg-12">
            <div className="col-lg-12 bg-white shadow_box rounded">
              <div className="row rounded-top poll">
                <div className="col-lg-12 text-white rounded pt-3">
                  <h4 className="text-white">Current Poll</h4>
                  <span className="poll_fa"><Link ><i className="fa fa-long-arrow-right" aria-hidden="true" /></Link></span>
                </div>	
              </div>
              <div className="row py-3">
                <div className="col-lg-8">
                  <h6>Lorem ipsum is dummy text of the printing</h6>
                  <div className="form-check pt-2">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="optradio" /><small>You have a positive attitude towards your work</small>
                    </label>
                  </div>
                  <div className="form-check pt-2">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="optradio" /><small>The moon in a Cancer will promote a feeling</small>
                    </label>
                  </div>
                  <div className="form-check pt-2">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="optradio" /><small>They motivated and inspiried you to handle the project.</small>
                    </label>
                  </div>
                  <div className="form-check pt-2">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="optradio" /><small>You had been struggling withit for quite some</small>
                    </label>
                  </div>
                </div>
                <div className="col-lg-4" style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start'}}>
                  <div className="media idea_media flex-row-reverse">
                    <div className="d-flex ml-2">
                      <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                    </div>
                    <div className="media-body" style={{textAlign: 'end'}}>
                      <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                      <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small>
                    </div>
                  </div>{/*/ media */}
                </div>
              </div>
              <div className="row py-2 d-flex justify-content-between">
                <div className="col">
                  <button className="btn btn-default bg-warning text-white mr-3 px-4" type="button">Submit</button>
                </div>
                <div className="col d-flex justify-content-end align-items-center">
                  <small>Want to create a poll like this? </small> &nbsp;<CreatePollsButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-----------/////////Poll////////------------*/}
      </div>
      <div className="col-lg-2 px-1">
        <div className="row">
          <div className="col-lg-12">
            <div className="col-lg-12 bg-white shadow_box rounded">
              <div className="row rounded-top">
                <div className="col-lg-12 rounded p-2">
                  <h6>Blog Board</h6>
                  <span className="poll_fa" style={{top: 5, right: 8}}><Link href><i className="fa fa-long-arrow-right" aria-hidden="true" /></Link></span>
                </div>	
              </div>
              <div className="row blog_board">
              {this.blogsList}
              </div>
              <div className="row">
                <CreateBlogsButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 px-1">
        <div className="row">
          <div className="col-lg-12 pr-0">
            <div className="col-lg-12 bg-white shadow_box rounded">
              <div className="row rounded-top">
                <div className="col-lg-12 rounded p-2">
                  <h6>Chit Board</h6>
                </div>	
              </div>
              <div className="row chit_board">
                <div className="col-lg-12 p-1">
                  <div className="post-review border_bottom py-2">
                    <div className="media_blog idea_media pb-1">
                      <div className="d-flex mr-1">
                        <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                      </div>
                      <div className="media-body">
                        <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                        <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small><br />
                        <small>Commented on <Link href>Food for better health</Link></small><br />
                      </div>
                    </div>{/*/ media */}
                    <div className="media_blog idea_media pb-1">
                      <div className="media-body">
                        <small>Lorem Ipsum has been the indusab</small><br />
                      </div>
                    </div>{/*/ media */}
                  </div>
                  <div className="post-review border_bottom py-2">
                    <div className="media_blog idea_media pb-1">
                      <div className="d-flex mr-1">
                        <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                      </div>
                      <div className="media-body">
                        <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                        <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small><br />
                        <small>Commented on <Link href>Food for better health</Link></small><br />
                      </div>
                    </div>{/*/ media */}
                    <div className="media_blog idea_media pb-1">
                      <div className="media-body">
                        <small>Lorem Ipsum has been the indusab</small><br />
                      </div>
                    </div>{/*/ media */}
                  </div>
                  <div className="post-review border_bottom py-2">
                    <div className="media_blog idea_media pb-1">
                      <div className="d-flex mr-1">
                        <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                      </div>
                      <div className="media-body">
                        <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                        <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small><br />
                        <small>Commented on <Link href>Food for better health</Link></small><br />
                      </div>
                    </div>{/*/ media */}
                    <div className="media_blog idea_media pb-1">
                      <div className="media-body">
                        <small>Lorem Ipsum has been the indusab</small><br />
                      </div>
                    </div>{/*/ media */}
                  </div>
                  <div className="post-review border_bottom py-2">
                    <div className="media_blog idea_media pb-1">
                      <div className="d-flex mr-1">
                        <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                      </div>
                      <div className="media-body">
                        <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                        <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small><br />
                        <small>Commented on <Link href>Food for better health</Link></small><br />
                      </div>
                    </div>{/*/ media */}
                    <div className="media_blog idea_media pb-1">
                      <div className="media-body">
                        <small>Lorem Ipsum has been the indusab</small><br />
                      </div>
                    </div>{/*/ media */}
                  </div>
                  <div className="post-review border_bottom py-2">
                    <div className="media_blog idea_media pb-1">
                      <div className="d-flex mr-1">
                        <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                      </div>
                      <div className="media-body">
                        <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                        <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small><br />
                        <small>Commented on <Link href>Food for better health</Link></small><br />
                      </div>
                    </div>{/*/ media */}
                    <div className="media_blog idea_media pb-1">
                      <div className="media-body">
                        <small>Lorem Ipsum has been the indusab</small><br />
                      </div>
                    </div>{/*/ media */}
                  </div>
                  <div className="post-review border_bottom py-2">
                    <div className="media_blog idea_media pb-1">
                      <div className="d-flex mr-1">
                        <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                      </div>
                      <div className="media-body">
                        <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                        <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small><br />
                        <small>Commented on <Link href>Food for better health</Link></small><br />
                      </div>
                    </div>{/*/ media */}
                    <div className="media_blog idea_media pb-1">
                      <div className="media-body">
                        <small>Lorem Ipsum has been the indusab</small><br />
                      </div>
                    </div>{/*/ media */}
                  </div>
                  <div className="post-review border_bottom py-2">
                    <div className="media_blog idea_media pb-1">
                      <div className="d-flex mr-1">
                        <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                      </div>
                      <div className="media-body">
                        <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                        <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small><br />
                        <small>Commented on <Link href>Food for better health</Link></small><br />
                      </div>
                    </div>{/*/ media */}
                    <div className="media_blog idea_media pb-1">
                      <div className="media-body">
                        <small>Lorem Ipsum has been the indusab</small><br />
                      </div>
                    </div>{/*/ media */}
                  </div>
                  <div className="post-review border_bottom py-2">
                    <div className="media_blog idea_media pb-1">
                      <div className="d-flex mr-1">
                        <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                      </div>
                      <div className="media-body">
                        <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                        <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small><br />
                        <small>Commented on <Link href>Food for better health</Link></small><br />
                      </div>
                    </div>{/*/ media */}
                    <div className="media_blog idea_media pb-1">
                      <div className="media-body">
                        <small>Lorem Ipsum has been the indusab</small><br />
                      </div>
                    </div>{/*/ media */}
                  </div>
                  <div className="post-review border_bottom py-2">
                    <div className="media_blog idea_media pb-1">
                      <div className="d-flex mr-1">
                        <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                      </div>
                      <div className="media-body">
                        <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                        <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small><br />
                        <small>Commented on <Link href>Food for better health</Link></small><br />
                      </div>
                    </div>{/*/ media */}
                    <div className="media_blog idea_media pb-1">
                      <div className="media-body">
                        <small>Lorem Ipsum has been the indusab</small><br />
                      </div>
                    </div>{/*/ media */}
                  </div>
                  <div className="post-review border_bottom py-2">
                    <div className="media_blog idea_media pb-1">
                      <div className="d-flex mr-1">
                        <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                      </div>
                      <div className="media-body">
                        <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                        <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small><br />
                        <small>Commented on <Link href>Food for better health</Link></small><br />
                      </div>
                    </div>{/*/ media */}
                    <div className="media_blog idea_media pb-1">
                      <div className="media-body">
                        <small>Lorem Ipsum has been the indusab</small><br />
                      </div>
                    </div>{/*/ media */}
                  </div>
                  <div className="post-review border_bottom py-2">
                    <div className="media_blog idea_media pb-1">
                      <div className="d-flex mr-1">
                        <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                      </div>
                      <div className="media-body">
                        <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                        <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small><br />
                        <small>Commented on <Link href>Food for better health</Link></small><br />
                      </div>
                    </div>{/*/ media */}
                    <div className="media_blog idea_media pb-1">
                      <div className="media-body">
                        <small>Lorem Ipsum has been the indusab</small><br />
                      </div>
                    </div>{/*/ media */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*-----------------Fashion-----------------*/}
    <div className="row pt-5">
      <div className="col-md-12">
        <h4 className="fashion">Fashion</h4>
        <button type="button" className="btn btn-primary mr-2 view_all">View All</button>
        <div className="row pt-4">
            {this.fashionList}
        </div>
      </div>
    </div>
    {/*///////////Fashion//////////-*/}
    {/*Featured Seller-*/}
    <div className="row pt-4">
      <div className="col-md-12">
        <h4 className="featured">Featured Seller</h4>
        <button type="button" className="btn btn-primary mr-2 view_all">View All</button>
        <div className="row pt-4">
          <div className="col-lg-2">
            <div className="featured-img">
              <img src="images/sony.png" alt className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="featured-img">
              <img src="images/sony.png" alt className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="featured-img">
              <img src="images/sony.png" alt className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="featured-img">
              <img src="images/sony.png" alt className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="featured-img">
              <img src="images/patanjali.png" alt className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="featured-img">
              <img src="images/lady.png" alt className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*------///////Featured Seller /////----------*/}
    {/*------Home Services----------*/}
    <div className="row pt-4">
      <div className="col-md-12">
        <h4 className="featured">Home Services</h4>
        <button type="button" className="btn btn-primary mr-2 view_all">View All</button>
        <div className="row pt-4">	
          <div className="col-lg-3">
            <div className="post-slide9">
              <div className="services-img">
                <img src="images/home_serv.png" alt className="img-fluid" />
              </div>
              <div className="post-review">
                <ul className="d-flex justify-content-between no-bullets">
                  <li>
                    Pest Control Services
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><Link href className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></Link></li>
                        <li><Link href className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></Link></li>
                        <li><Link href className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                        <li><Link href className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></Link></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <small>Mon - Fri, 09:00 AM to 09:00 PM</small><br />
                <small>+91 123456789</small>
                <ul className="d-flex justify-content-between no-bullets">
                  <li>540+ Experts</li>
                  <li>
                    <small className="text-warning">GET QUOTE</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="post-slide9">
              <div className="services-img">
                <img src="images/home_serv.png" alt className="img-fluid" />
              </div>
              <div className="post-review">
                <ul className="d-flex justify-content-between no-bullets">
                  <li>
                    Pest Control Services
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><Link href className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></Link></li>
                        <li><Link href className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></Link></li>
                        <li><Link href className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                        <li><Link href className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></Link></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <small>Mon - Fri, 09:00 AM to 09:00 PM</small><br />
                <small>+91 123456789</small>
                <ul className="d-flex justify-content-between no-bullets">
                  <li>540+ Experts</li>
                  <li>
                    <small className="text-warning">GET QUOTE</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="post-slide9">
              <div className="services-img">
                <img src="images/home_serv.png" alt className="img-fluid" />
              </div>
              <div className="post-review">
                <ul className="d-flex justify-content-between no-bullets">
                  <li>
                    Pest Control Services
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><Link href className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></Link></li>
                        <li><Link href className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></Link></li>
                        <li><Link href className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                        <li><Link href className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></Link></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <small>Mon - Fri, 09:00 AM to 09:00 PM</small><br />
                <small>+91 123456789</small>
                <ul className="d-flex justify-content-between no-bullets">
                  <li>540+ Experts</li>
                  <li>
                    <small className="text-warning">GET QUOTE</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="post-slide9">
              <div className="services-img">
                <img src="images/home_serv.png" alt className="img-fluid" />
              </div>
              <div className="post-review">
                <ul className="d-flex justify-content-between no-bullets">
                  <li>
                    Pest Control Services
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><Link href className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></Link></li>
                        <li><Link href className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></Link></li>
                        <li><Link href className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                        <li><Link href className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></Link></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <small>Mon - Fri, 09:00 AM to 09:00 PM</small><br />
                <small>+91 123456789</small>
                <ul className="d-flex justify-content-between no-bullets">
                  <li>540+ Experts</li>
                  <li>
                    <small className="text-warning">GET QUOTE</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>	
      </div>
    </div>
    {/*---------////////Home Services//////////-------------*/}
    {/*----------------Rental------------------------*/}
    <div className="row pt-4">
      <div className="col-md-12">
        <h4 className="featured ml-2">Rental</h4>
        <button type="button" className="btn btn-primary mr-2 view_all">View All</button>
        <div className="row pt-4">
          <div className="col-lg-3">
            <div className="post-slide9">
              <div className="rental-img">
                <img src="images/bike.png" alt className="img-fluid" />
                <ul className="d-flex justify-content-end pr-2 pt-2 shopping_cart" style={{listStyle: 'none'}}>
                  <li className="pr-2"><Link href><i className="fa fa-share-alt" aria-hidden="true" /></Link></li>
                </ul>
              </div>
              <div className="post-review rental_text">
                <p>Bikes</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="post-slide9">
              <div className="rental-img">
                <img src="images/shoes.png" alt className="img-fluid" />
                <ul className="d-flex justify-content-end pr-2 pt-2 shopping_cart" style={{listStyle: 'none'}}>
                  <li className="pr-2"><Link href><i className="fa fa-share-alt" aria-hidden="true" /></Link></li>
                </ul>
              </div>
              <div className="post-review rental_text">
                <p>Shoes</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="post-slide9">
              <div className="rental-img">
                <img src="images/shoes.png" alt className="img-fluid" />
                <ul className="d-flex justify-content-end pr-2 pt-2 shopping_cart" style={{listStyle: 'none'}}>
                  <li className="pr-2"><Link href><i className="fa fa-share-alt" aria-hidden="true" /></Link></li>
                </ul>
              </div>
              <div className="post-review rental_text">
                <p>Shoes</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="post-slide9">
              <div className="rental-img">
                <img src="images/shoes.png" alt className="img-fluid" />
                <ul className="d-flex justify-content-end pr-2 pt-2 shopping_cart" style={{listStyle: 'none'}}>
                  <li className="pr-2"><Link href><i className="fa fa-share-alt" aria-hidden="true" /></Link></li>
                </ul>
              </div>
              <div className="post-review rental_text">
                <p>Shoes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*----------////////Rental///////------------------*/}
    {/*------Idea Sharing----------*/}
    <div className="row pt-4">
      <div className="col-md-12">
        <h4 className="featured">Idea Sharing</h4>
        <button type="button" className="btn btn-primary mr-2 view_all">View All</button>
        <div className="row pt-4">
          <div className="col-lg-4">
            <div className="post-slide9">
              <div className="sharing-img">
                <img src="images/man.jpg" alt className="img-fluid" />
              </div>
              <div className="post-review">
                <ul className="d-flex justify-content-between no-bullets">
                  <li>
                    The Art of Photography
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><Link href className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></Link></li>
                        <li><Link href className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></Link></li>
                        <li><Link href className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                        <li><Link href className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></Link></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="media mt-2 idea_media">
                  <div className="d-flex mr-1">
                    <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                  </div>
                  <div className="media-body">
                    <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                    <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small>
                  </div>
                </div>{/*/ media */}
              </div>
            </div>
          </div>	
          <div className="col-lg-4">
            <div className="post-slide9">
              <div className="sharing-img">
                <img src="images/man.jpg" alt className="img-fluid" />
              </div>
              <div className="post-review">
                <ul className="d-flex justify-content-between no-bullets">
                  <li>
                    The Art of Photography
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><Link href className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></Link></li>
                        <li><Link href className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></Link></li>
                        <li><Link href className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                        <li><Link href className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></Link></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="media mt-2 idea_media">
                  <div className="d-flex mr-1">
                    <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                  </div>
                  <div className="media-body">
                    <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                    <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small>
                  </div>
                </div>{/*/ media */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="post-slide9">
              <div className="sharing-img">
                <img src="images/man.jpg" alt className="img-fluid" />
              </div>
              <div className="post-review">
                <ul className="d-flex justify-content-between no-bullets">
                  <li>
                    The Art of Photography
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><Link href className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></Link></li>
                        <li><Link href className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></Link></li>
                        <li><Link href className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                        <li><Link href className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></Link></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="media mt-2 idea_media">
                  <div className="d-flex mr-1">
                    <Link href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></Link>
                  </div>
                  <div className="media-body">
                    <small><span className="m-0 on_name">Benjamin Robinson</span></small><br />
                    <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small>
                  </div>
                </div>{/*/ media */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*---------////////Home Services//////////-------------*/}
  </div>
  {/* /#page-content-wrapper */}
</div>

        );
    }

} 