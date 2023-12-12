import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>
                        I am a fun loving science fan living in beautiful Anchorage, AK with my fiance. We spend our time taking
                        advantage of the world class hiking the state has to offer, going to concerts, and getting way too competative
                        at video games.

                        For more than half a decade, I have worked to support and manage international teams of researchers
                        to answer questions about water security, drought tollerance in plants, and wetland mapping
                        using both AWS and HPCs. 

                    </p>
                    {/* <p>During undergrad I worked as a STEM tutor at TRIO Student Suppport Services where I</p> */}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>

            
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Big Data Pipeline Development</h3>
                    <p>I have supported and lead the devleopment of pedabyte scale data pipelines for scientific research. One of which will soon 
                        be deployed by JPL to produce a mission critical data product for the SWOT satellite. 
                    </p>
                </div>
                </div>
            </div>


            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Education and Data Visualization</h3>
                    <p>
                        I love to transfer my excitement for science to others through tutoring, public speaking, and data visualization.
                         I have worked as a peer tutor, given talks around the world, and created data visualizations that were featured
                         in places such as The Wall Street Journal.                    </p>
                </div>
                </div>
            </div>


            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Project Management</h3>
                    <p> 

                        Across all of my work, the throughline is supporting science. I belive that 
                        managerial roles are the most ejoyable and fufilling support positions in any project. My managerial style focuses
                        on clear, open, and compasionate communication, and has enabled teams around the world to 
                        do their best work in a workplace without hostility or ambigous expectations.

                    </p>
                </div>
                </div>
            </div>

            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
