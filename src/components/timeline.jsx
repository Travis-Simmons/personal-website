import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Research Fellow / Software Engineer - University of Massachusetts Amherst <span>2022-present</span></h2>
                        <p>As a Research Fellow at the Gleason Lab at UMass Amherst, I am in charge of 
                          a mission critical cloud based data pipeline for the SWOT satelite launched by NASA and CNES.
                          This pipeline, called Confluence, is the culmination of two decades of hydrologic modeling work by teams across the globe.
                          It is my privledge to lead these teams in incorperating their analysis into the pipeline in a robust, scalable, and cost efficient way.
                          Using this pipeline, we will soon know how much water is moving through every river in the world. 

                           </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Research Data Support Specialist - Universtiy of Arizona <span>2020-2022</span></h2>
                        <p>Following an intership with the Pauli Lab at the UofA, I was hired as full time staff in the lab.

                          There, I helped build a data pipeline for the worlds largest plant phenotyping robot in the middle of the desert, 
                          trained many undergraduate students in the basics of data science, created data visualizations, and built a
                          VR environment for agricultural data exploration.

                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Lead STEM Tutor - The College of Coastal Georgia <span>2019-2020</span></h2>
                        <p>Provided one-on-one peer tutoring through a federally funded program (TRiO) which is available to 
                          underserviced student demographics. (every school has TRiO, tell your students about it)
                           </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
