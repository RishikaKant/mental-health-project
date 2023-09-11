import React from 'react';
import { Helmet } from 'react-helmet';
import comp from '../../assets/comp.png';
import illustration1 from '../../assets/illustration1.svg';
import illustration2 from '../../assets/illustration2.svg';
import illustration3 from '../../assets/illustration3.svg';
import ques from '../../assets/ques.png';
import arrow from '../../assets/arrow.png';
import man from '../../assets/picMan.png';
import nandini from '../../assets/Nandini.png';
import vanshika from '../../assets/Vanshika.jpeg';
import avatar from '../../assets/avatar.png';
import eshita from '../../assets/Eshita.jpeg';
import './aboutPage.scss';

const AboutPage = () => (
  <section style={{ marginTop: '20rem', marginBottom: '1rem' }}>
    <div className="aboutPage">
      <Helmet>
        <title>Raahee | About</title>
      </Helmet>
      <div className="top fonts1">
        <img className="img1" src={comp} alt="comp" />
        <h1>Welcome to Raahee</h1>
        <p>Let raahee be your buddy for every step you take ahead</p>
        <div className="head">
          <button className="btn1 btn btn-primary">Sign In</button>
          <button className="btn2 btn btn-outline-secondary">Learn More</button>
          <div>
            <img className="rounded img2" src={ques} alt="img" />
          </div>
        </div>
      </div>
      <div className="abt fonts2">
        <h1>About Raahee</h1>
        <p>The emotional first aid you need</p>
      </div>
    </div>
    <section>
      <div className="row align-items-start secrow mrtb">
        <div className="col-md-4">
          <img src={illustration1} alt="Mental Health Awarenes" />
        </div>
        <div className="col-md-8 section fonts3">
          <h1 className="mar">Why to</h1>
          <h1 className="mar">Choose</h1>
          <h1 className="mar">Raahee?</h1>
          <p className="mar marl">We are here to encourage and walk beside those Raahee(s) who find themselves in a lost and darkened world.Through our workshops, and blogs curated with a blend of knowledge and creativity, we aim to provide help that is unique and comforting. We also aim to spread the word for mental health in the true and rightful form to the seekers</p>
          <div className="col-md-8">
            <p className="pop mar">
              Learn More
              <img className="mar" src={arrow} alt="arrow" />
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="left-sec">
      <div className="row align-items-start secrow mrtb">
        <div className="col-md-8 section fonts3">
          <h1 className="mar">Our</h1>
          <h1 className="mar">Vision</h1>
          <p className="mar">We are here to encourage and walk beside those Raahee(s) who find themselves in a lost and darkened world.Through our workshops, and blogs curated with a blend of knowledge and creativity, we aim to provide help that is unique and comforting. We also aim to spread the word for mental health in the true and rightful form to the seekers</p>
          <div className="col-md-8">
            <p className="pop mar">
              Learn More
              <img className="mar" src={arrow} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={illustration2} alt="Mental Health Awarenes" />
        </div>
      </div>
    </section>

    <section>
      <div className="row align-items-start secrow mrtb">
        <div className="col-md-4">
          <img src={illustration3} alt="Mental Health Awarenes" />
        </div>
        <div className="col-md-8 section fonts3">
          <h1 className="mar">Our</h1>
          <h1 className="mar">Mission</h1>
          <p className="mar marl">The basis of a healthy mind is non-judgemental communication and unbiased aid in need. Thoughtfully structured workshops, mindful activities and intelligently- written blogs are the guiding light of our Raahee Buddie, to take them to the end of the dark cave and give them the hope to embrace the vivid skies awaiting their arrival</p>
          <div className="col-md-8">
            <p className="pop mar">
              Learn More
              <img className="mar" src={arrow} alt="arrow" />
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="container">
      <div className="carousel slide md-5">
        <h2 className="emotionalH">
          TES
          <u className="emotionalU">TIMONI</u>
          ALS
        </h2>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/*  Carousel  */}
          <div className="carousel-inner">
            <div className="item carousel-item active">
              <div className="img-box">
                <img src={eshita} alt="eshita" />
              </div>
              <p className="testimonial">
                The workshop was thoroughly thought over and very well
                organised. The activities and the insights given were also
                very comforting and were worth self introspection. Absolutely
                loved the "Anonymous Messenger" game💙 looking forward to see
                this project go big!
              </p>
              <p className="overview">
                <b>Eshita Malhotra</b>
                , Raahee Buddy
              </p>
            </div>
            <div className="item carousel-item">
              <div className="img-box">
                <img src={nandini} alt="nandini" />
              </div>
              <p className="testimonial">
                The workshop conducted by the team rahee was absolutely down
                to earth and relatable. Their presentation had so many
                interactive and cool animations. The activity conducted by
                them helped us connect to our emotions which I believe in
                needed in the times that we are living in. It was a job well
                done.
              </p>
              <p className="overview">
                <b>Nandini Ginodia</b>
                , CiscoThingQbator
              </p>
            </div>
            <div className="item carousel-item">
              <div className="img-box">
                <img src={vanshika} alt="vanshika" />
              </div>
              <p className="testimonial">
                A very interactive and interesting workshop with amazing
                animations and activities. It was great seeing all the
                positive replies from other Raahees on the website. I have
                used the website a few times recently too and the replies are
                always better than the last time. Thankyou team Raahee for
                taking this initiative. You have all done a wonderful job.
                Looking forward to seeing new stuff on the site. Overall, it
                was a worthwhile experience. 💫✨
              </p>
              <p className="overview">
                <b>Vanshika</b>
                , CiscoThingQbator
              </p>
            </div>
            <div className="item carousel-item">
              <div className="img-box">
                <img src={avatar} alt="avatar" />
              </div>
              <p className="testimonial">
                Raahee is curated with souls who are doing a fantastic work in
                a world full of selfishness. I personally have been going
                through mental complications lately and did attend few
                workshops too but 'Raahee Buddy' gave me some hope. I really
                loved the concept of creating an online support group and
                enjoyed the workshop throughout. Starting from conversation
                then the activity and uptil the chat. I am very sure Raahee
                will be hope and will be change for people who are looking for
                support.
              </p>
              <p className="overview">
                <b>Arun</b>
                , Manager of Makerspace, CiscoThingQbator
              </p>
            </div>
          </div>
        </div>
        {/*  Carousel Controls  */}
        <a
          className="carousel-control left carousel-control-prev"
          href="#myCarousel"
          data-slide="prev"
        >
          <i className="fa fa-angle-left" />
        </a>
        <a
          className="carousel-control right carousel-control-next"
          href="#myCarousel"
          data-slide="next"
        >
          <i className="fa fa-angle-right" />
        </a>
      </div>
    </div>

    <section style={{ marginTop: '10rem' }} className="mrtb">
      <h2 className="emotionalH mb-4 mrtb fonts4">
        <u className="emotionalU">Check out our latest blogs</u>
      </h2>
      <div className="row d-flex justify-content-around">
        <div className="card col-md-3 team shadow-lg p-3 mb-5 bg-white" style={{ width: '18rem' }}>
          <img src={illustration3} className="card-img-top" alt="pic" />
          <div className="card-body">
            <h5 className="card-title">
              Zindagi Na Milegi Dobara :The Philosophy
            </h5>
            <span>Sit. Relax. Let's discuss some truths about life, which we forget more often than we remember...</span>
            <div className="col-md-8">
              <p className="pop">
                Read More
                <img className="mar" src={arrow} alt="arrow" />
              </p>
            </div>
          </div>
        </div>
        <div className="card col-md-3 team shadow-lg p-3 mb-5 bg-white" style={{ width: '18rem' }}>
          <img src={illustration3} className="card-img-top" alt="pic" />
          <div className="card-body">
            <h5 className="card-title">
              To the ones hustling and ones who can't
            </h5>
            <span>How many times in a month do you feel like you need a vacation? How many times did...</span>
            <div className="col-md-8">
              <p className="pop">
                Read More
                <img className="mar" src={arrow} alt="arrow" />
              </p>
            </div>
          </div>
        </div>
        <div className="card col-md-3 team shadow-lg p-3 mb-5 bg-white" style={{ width: '18rem' }}>
          <img src={illustration3} className="card-img-top" alt="pic" />
          <div className="card-body">
            <h5 className="card-title">
              To all the heroes, in your words!
            </h5>
            <span>A tribute to our favourite singers and their music. This poem is dedicated to everyone struggling...</span>
            <div className="col-md-8">
              <p className="pop">
                Read More
                <img className="mar" src={arrow} alt="arrow" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto btncnt">
        <button type="button" className="btn btn-outline-danger">View all</button>
      </div>
    </section>
    <div className="mrtb">
      <h2 className="emotionalH mb-4 mrtb">
        <u className="emotionalU">Our Teams</u>
      </h2>
      <div className="row container1 d-flex justify-content-around">
        <div className="card1">
          <div>
            <img className="circle1" src={man} alt="img" />
          </div>
          <div className="content1">
            <p>Mr. Vikas Verma</p>
            <p className="design cont">
              UI/UX Designer
            </p>
            <p>We Are here with Raahee to provide you the best Experience</p>
          </div>
        </div>
        <div className="card1">
          <div>
            <img className="circle1" src={man} alt="img" />
          </div>
          <div className="content1">
            <p>Mr. Vikas Verma</p>
            <p className="design cont">
              UI/UX Designer
            </p>
            <p>We Are here with Raahee to provide you the best Experience</p>
          </div>
        </div>
        <div className="card1">
          <div>
            <img className="circle1" src={man} alt="img" />
          </div>
          <div className="content1">
            <p>Mr. Vikas Verma</p>
            <p className="design cont">
              UI/UX Designer
            </p>
            <p>We Are here with Raahee to provide you the best Experience</p>
          </div>
        </div>
      </div>
      <div className="col-12 demo">
        {/* <button
          className="btn dange"
          style={{ textTransform: 'none' }}
          data-toggle="modal"
          data-target="#exampleModal"
          data-wow-delay="0.4s"
        >
          Join Our Session
        </button> */}
      </div>
    </div>
  </section>
);

export default AboutPage;
