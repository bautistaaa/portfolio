import React from "react"
import Layout from "../../../components/layout"
import revolutionuc1 from "../../../images/revolutionuc1.jpeg"

const WelcomeExperiencePage = ({ location }) => (
  <Layout path={location.pathname}>
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={revolutionuc1}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded px-3 py-4 px-md-5 text-justify-p">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">August 2021</span>
                  <span className="section-heading-lower">
                    UHP Welcome Experience Mentorship
                  </span>
                </h2>
                <p>
                  The{" "}
                  <a href="https://www.uc.edu/campus-life/honors/students/experiences/welcome-experience-leaders.html">
                    UHP Welcome Experience
                  </a>{" "}
                  gives incoming first year students the opportunity to connect,
                  build community, engage and learn more about UHP during their
                  first few months here at UC. This year I applied to be a
                  mentor for the Welcome Experience. Besides it being a
                  pre-approved honors experience, it was an opportunity for me
                  to leave my introverted comfort zone and meet new people, and
                  help them learn about the university, the honors program, and
                  help with their transition to the UC community.
                </p>
                <p>
                  This was not my first time mentoring incoming students and
                  helping them with the transition. Every year there is a large
                  group of potential Indian international students, and current
                  students (also Indian international) volunteer to be a
                  resource to them by answering questions, scheduling meetups,
                  and give a tour of the campus. When I was an incoming
                  freshman, I received great help from my seniors. I would have
                  faced a lot of difficulty throughout the transition if this
                  program did not exist. This has led me to volunteering for
                  this every year.
                </p>
                <p>
                  Through the UHP Welcome Experience program, I found an
                  opportunity to yet again serve the next generation of students
                  as a mentor. I got to not only share my knowledge of UC and
                  Cincinnati, but also of the University Honors Program and
                  community. I got to connect with more UHP members, especially
                  with my partner Mia, our co-ordinator Ashley, and ofcourse,
                  our faculty leader Bria. Even in my 4th year at UC, I was
                  pleasently surprised to see that UHP always has something more
                  to offer.
                </p>
                <p>
                  This experience also included some of my first face-to-face
                  interactions with people after the pandemic hit and we were
                  all forced to quarantine. While I have enjoyed my time in
                  isolation away from forced social interactions, I also
                  realized that real human connections are something I have been
                  taking for granted.
                </p>
                <p>
                  Our first meetup with the mentee group involved a tour of the
                  campus disguised as a scavenger hunt. Me and my partner Mia
                  met our mentee group at the bearcat statue, provided them with
                  UHP t-shirts, and started the scavenger hunt. It was quite a
                  workout walking circled around the campus, but it was well
                  worth the conversations and stories we shared. While the
                  mentees did have some knowledge of the campus thanks to their
                  orientations, they were very happy to learn some of the
                  shortcuts and not-so-obvious paths to get from one place to
                  another.
                </p>
                <p>
                  Our second meetup was a chill indoor meeting with cookies, and
                  we talked about campus life, classes, organization
                  involvement, social life etc. It was particularly rewarding to
                  see the mentees applying some pieces of advice we gave them.
                </p>
                <p>
                  A big part of why software development is my passion is that I
                  like creating something and watching it grow and impact lives.
                  I think it is also why I have always wanted to play the role
                  of a mentor, to help shape a person into someone who can go on
                  and make a lot more impact than I can by myself. This
                  experience has taught me that while being a mentor is
                  difficult and requires courage and virtue, it is far more
                  rewarding and fulfilling. I hope I keep getting opportunities
                  like these in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default WelcomeExperiencePage
