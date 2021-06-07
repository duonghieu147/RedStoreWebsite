import React, { Component } from 'react';
import Navigation from './Navigation';

class About extends Component {
    render() {
        return (
            <div>
                {/* <Navigation></Navigation> */}
                <nav className="navbar">
                    <div className="max-width">
                        {/* <div className="logo"><a href="#">Portfo<span>lio.</span></a></div> */}
                        <img className="logo" href="/" src="images/logo.png" with="125px" alt="description" />
                        <ul className="menu">
                            <li><a href="/" className="menu-btn">Home</a></li>
                            <li><a href="#about" className="menu-btn">About</a></li>
                            <li><a href="#services" className="menu-btn">Services</a></li>
                            {/* <li><a href="#skills" className="menu-btn">Skills</a></li> */}
                            <li><a href="#teams" className="menu-btn">Teams</a></li>
                            <li><a href="#contact" className="menu-btn">Contact</a></li>
                        </ul>
                        <div className="menu-btn">
                            <i className="fas fa-bars" />
                        </div>
                    </div>
                </nav>

                <div>
                    {/* home section start */}
                    <section className="home" id="home">
                        <div className="max-width">
                            <div className="home-content">
                                <div className="text-1">Hello, my name is</div>
                                <div className="text-2">Duong Hieu</div>
                                <div className="text-3">And I'm a <span className="typing" /></div>
                                <a href="#">Hire me</a>
                            </div>
                        </div>
                    </section>
                    {/* about section start */}
                    <section className="about" id="about">
                        <div className="max-width">
                            <h2 className="title">About me</h2>
                            <div className="about-content">
                                <div className="column left">
                                    <img src="images/profile-1.jpg" alt="" />
                                </div>
                                <div className="column right">
                                    <div className="text">I'm Hieu and I'm a <span className="typing-2" /></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                                    <a href="#">Download CV</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* services section start */}
                    <section className="services" id="services">
                        <div className="max-width">
                            <h2 className="title">My services</h2>
                            <div className="serv-content">
                                <div className="card">
                                    <div className="box">
                                        <i className="fas fa-paint-brush" />
                                        <div className="text">Web Design</div>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="box">
                                        <i className="fas fa-chart-line" />
                                        <div className="text">Advertising</div>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="box">
                                        <i className="fas fa-code" />
                                        <div className="text">Apps Design</div>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* skills section start */}
                    {/* <section className="skills" id="skills">
                        <div className="max-width">
                            <h2 className="title">My skills</h2>
                            <div className="skills-content">
                                <div className="column left">
                                    <div className="text">My creative skills &amp; experiences.</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.</p>
                                    <a href="#">Read more</a>
                                </div>
                                <div className="column right">
                                    <div className="bars">
                                        <div className="info">
                                            <span>HTML</span>
                                            <span>90%</span>
                                        </div>
                                        <div className="line html" />
                                    </div>
                                    <div className="bars">
                                        <div className="info">
                                            <span>CSS</span>
                                            <span>60%</span>
                                        </div>
                                        <div className="line css" />
                                    </div>
                                    <div className="bars">
                                        <div className="info">
                                            <span>JavaScript</span>
                                            <span>80%</span>
                                        </div>
                                        <div className="line js" />
                                    </div>
                                    <div className="bars">
                                        <div className="info">
                                            <span>PHP</span>
                                            <span>50%</span>
                                        </div>
                                        <div className="line php" />
                                    </div>
                                    <div className="bars">
                                        <div className="info">
                                            <span>MySQL</span>
                                            <span>70%</span>
                                        </div>
                                        <div className="line mysql" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                     */}
                    {/* teams section start */}
                    <section className="teams" id="teams">
                        <div className="max-width">
                            <h2 className="title">My teams</h2>
                            <div className="carousel owl-carousel">
                                <div className="card">
                                    <div className="box">
                                        <img src="images/profile-1.jpg" alt="" />
                                        <div className="text">Someone name</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="box">
                                        <img src="images/profile-2.jpg" alt="" />
                                        <div className="text">Someone name</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="box">
                                        <img src="images/profile-3.jpg" alt="" />
                                        <div className="text">Someone name</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="box">
                                        <img src="images/profile-4.jpeg" alt="" />
                                        <div className="text">Someone name</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="box">
                                        <img src="images/profile-5.jpeg" alt="" />
                                        <div className="text">Someone name</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* contact section start  */}
                    <section className="contact" id="contact">
                        <div className="max-width">
                            <h2 className="title">Contact me</h2>
                            <div className="contact-content">
                                <div className="column left">
                                    <div className="text">Get in Touch</div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                                    <div className="icons">
                                        <div className="row">
                                            <i className="fas fa-user" />
                                            <div className="info">
                                                <div className="head">Name</div>
                                                <div className="sub-title">Duong Hieu</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <i className="fas fa-map-marker-alt" />
                                            <div className="info">
                                                <div className="head">Address</div>
                                                <div className="sub-title">Son Thuy, Quang Binh, VN</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <i className="fas fa-envelope" />
                                            <div className="info">
                                                <div className="head">Email</div>
                                                <div className="sub-title">duonghieu4299@gmail.com</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column right">
                                    <div className="text">Message me</div>
                                    <form action="#">
                                        <div className="fields">
                                            <div className="field name">
                                                <input type="text" placeholder="Name" required />
                                            </div>
                                            <div className="field email">
                                                <input type="email" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <input type="text" placeholder="Subject" required />
                                        </div>
                                        <div className="field textarea">
                                            <textarea cols={30} rows={10} placeholder="Message.." required defaultValue={""} />
                                        </div>
                                        <div className="button-area">
                                            <button type="submit">Send message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        );
    }
}

export default About;