import React, { Component } from "react";
// import "./webright.css";
// import Webslider from "./webslider";
export default class webright extends Component {
  render() {
    return (
      <div className="intro ">
        {/* <Webslider /> */}
        <div className="right">
          <div id="web">
            <h4 className="header" id="lets">Let's Explore Web Developement !</h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <p className="float">
              Web Development is the Building and maintenance of websites. It
              refers to the tasks associated with creating, building,and
              maintaining websites and web applications that run Online on a
              browser.
              <br />
              <br />
              <h4 className="hl">
                What are the most common programming languages?
              </h4>
              Programming languages involved in web development as a basic
              tools:
              <br />
              <li> HTML (Hypertext Mark-up Language)</li>
              <li> CSS (Cascading Style Sheets)</li>
              <li> JavaScript</li>
            </p>
            <div id="html">
              <h4 className="header">HTML(Hypertext Mark-up Language)</h4>
              <div className="para">
                <hr className="one" />
              </div>
              <p className="float">
                HTML defines the basic framework of a website – the foundation
                upon which everything else is built upon. It forms the blocks
                that define a page’s layout, format, and critical components.
                Although it is theoretically possible to code a website on HTML
                only, it will be just a barebone site with no functions unless
                it’s enriched with CSS and JavaScript. Also, even simple style
                modifications such as changing the color of a button require a
                lot of coding to be executed using HTML only.
                <br />
                <h4 className="hl">Resources To Learn HTML</h4>
                <a href="https://www.w3schools.com/html/default.asp">
                  <li className="sklearn"> Learn HTML from w3school.com</li>
                </a>
                <div className="youtubeflex">
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/BsDoLVMnmZs"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/pQN-pnXPaVg"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytr">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/HcOc7P5BMi4"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </p>
            </div>
            <div id="css">
              <h4 className="header">CSS (Cascading Style Sheets) </h4>
              <div className="para">
                <hr className="one" />
              </div>
              <p className="float">
                CSS is used to style the content of a website using a small set
                of files that are kept across the entire site. This way,
                whenever a change must be applied to say, consistently change
                the color of all the buttons found in every page of the website,
                a web dev needs to edit only a single file in CSS.
                <br />
                <h4 className="hl">Resources To Learn HTML</h4>
                <a href="https://www.w3schools.com/css/">
                  <li className="sklearn"> Learn CSS from w3school.com</li>
                </a>
                <div className="youtubeflex">
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/Edsxf_NBFrw"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/1Rs2ND1ryYc"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytr">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/3_9znKVNe5g"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <h4 className="header" id="boot">
                  CSS Frameworkds{" "}
                </h4>
                <div className="para">
                  <hr className="one" />
                </div>
                <p className="float">
                  . A CSS framework is a set of default CSS and HTML files. It
                  extends a front-end developer’s capabilities for website
                  design. In addition to assisting while building a responsive
                  design, CSS frameworks also present distinct and symmetric
                  layouts, saving developers from writing code from ground zero
                  at every occasion.
                  <br />
                  <br />
                  <li>
                    {" "}
                    Full featured (Bootstrap, Foundation, Semantic UI, and
                    more),
                  </li>
                  <li>
                    {" "}
                    Aimed at Material Design: (Materialize and Material Design
                    Lite), and
                  </li>
                  <li> Lightweight (Pure).</li>
                </p>
                <h4 className="hl">Resources To Learn Bootstrap 5</h4>
                <div className="para">
                  <hr className="one" />
                </div>
                <a href="https://www.w3schools.com/bootstrap5/index.php">
                  <li className="sklearn">
                    {" "}
                    Learn Bootstrap from w3school.com
                  </li>
                </a>
                <div className="youtubeflex">
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/vpAJ0s5S2t0"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/-qfEOE4vtxE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytr">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/rjTKLIwm0oE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </p>
            </div>

            <div id="javascript">
              <h4 className="header">Learn Javascript </h4>
              <p className="float">
                The JavaScript programming language is used to take care of the
                interactivity of many unique website elements. It can be used to
                create effects that alter the appearance of icons and drop-down
                menus, add animations, games, and other interactive elements
                <br />
                <li className="hl">Resources To Learn JavaScript</li>
                <div className="youtubeflex">
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/hKB-YGF14SY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/o1IaduQICO0"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </p>
            </div>

            <div id="frameworks">
              <h4 className="header">Frontend Frameworks</h4>
              <div className="para">
                <hr className="one" />
              </div>
              <p className="float">
                Frameworks are templates to create a website or a web
                application. They provide a structure (such as a skeleton or
                scaffolding) on which to arrange the whole project. While the
                framework sets the page templates, they build the structure with
                particular allocated areas to embed a framework code in. So,
                JavaScript frameworks are complete sets of tools to form and
                arrange a website or web application.
                <br />
                <br />
                <div id="react">
                  <li className="hl"> 1. React.js </li>
                  <p>
                    is an open-source library for building dynamic user
                    interfaces, born and bred by Facebook. The framework is
                    applied to create web-applications with multiple dynamic
                    components. It relies on JavaScript and JSX, a Facebook PHP
                    language extension. React enables building reusable HTML
                    elements for the front end. React also includes React
                    Native, a dedicated cross-platform mobile development
                    framework. To discover more about the pros and cons of React
                    and React Native, consider exploring our article on this
                    subject.
                  </p>
                  <h4 className="header">Resources For React.js </h4>
                  <div className="para">
                    <hr className="one" />
                  </div>
                  <div className="youtubeflex">
                    <div className="ytl">
                      <iframe
                        width="315"
                        height="315"
                        src="https://www.youtube.com/embed/Ke90Tje7VS0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="ytl">
                      <iframe
                        width="315"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                      X
                    </div>
                    <div className="ytr">
                      <iframe
                        width="315"
                        height="315"
                        src="https://www.youtube.com/embed/bMknfKXIFA8"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div id="angular">
                  <li className="hl"> 2. Angular.js </li>
                  <p>
                    Angular is a front-end framework powered by Google that is
                    compatible with most of the common code editors. Angular is
                    intended to create dynamic, single-page web applications
                    (SPAs), and progressive web-apps. Upon its initial release,
                    the framework was most appreciated for its ability to
                    convert HTML-based documents into dynamic content. Angular
                    is among the most popular front-end frameworks. You can
                    explore this topic in our article on the pros and cons of
                    Angular development
                  </p>
                  <h4 className="header">Resources For Angular.js </h4>
                  <div className="para">
                    <hr className="one" />
                  </div>
                  <div className="youtubeflex">
                    <div className="ytl">
                      <iframe
                        width="315"
                        height="315"
                        src="https://www.youtube.com/embed/k5E2AVpwsko"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="ytl">
                      <iframe
                        width="315"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="ytr">
                      <iframe
                        width="315"
                        height="315"
                        src="https://www.youtube.com/embed/0LhBvp8qpro"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div id="vue">
                  <li className="hl"> 3. Vue.js </li>
                  <p>
                    is yet another open-source framework for SPAs. It employs a
                    component-based development model and enables attaching
                    components to a project. Vue.js is an example of a library
                    that is more of a framework. To utilize Vue.js, knowledge of
                    HTML and CSS is an absolute requirement. It suggests a whole
                    bunch of templates and patterns applied in development. Vue
                    is primarily recognized for the small size of documents and
                    HTML-based syntax. Again, to immerse yourself in Vue.js
                    advantages and disadvantages click the link.
                  </p>
                  <h4 className="header">Resources For Vue.js </h4>
                  <div className="para">
                    <hr className="one" />
                  </div>
                  <div className="youtubeflex">
                    <div className="ytl">
                      <iframe
                        width="315"
                        height="315"
                        src="https://www.youtube.com/embed/FXpIoQ_rT_c"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="ytl">
                      <iframe
                        width="315"
                        height="315"
                        src="https://www.youtube.com/embed/qZXt1Aom3Cs"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div id="jquery">
                  <li className="hl"> 4. JQuery </li>
                  <p>
                    , in turn, is aimed at controlling HTML documents. It has a
                    simple API to control events and design animation in
                    browsers. Aside from that, jQuery is applied to manipulate
                    the Document Object Model (DOM) and serves as a plugin
                    development tool as well. It also comes with a lighter
                    cross-browser library, jQuery UI for a mobile framework
                    jQuery Mobile and for graphic interface construction.
                  </p>
                  <h4 className="header">Resources For JQuery </h4>
                  <div className="para">
                    <hr className="one" />
                    (visit youtube to see full playlists)
                  </div>

                  <div className="youtubeflex">
                    <div className="ytl">
                      <iframe
                        width="315"
                        height="315"
                        src="https://www.youtube.com/embed/YFlx1C8XwR0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="ytl">
                      <iframe
                        width="315"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PL6n9fhu94yhVDV697uvHpavA3K_eWGQap"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="ytr">
                      <iframe
                        width="315"
                        height="315"
                        src="https://www.youtube.com/embed/HgvIox6ehkM"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </p>
            </div>

            <div id="backend">
              <h4 className="header">Backend For Web Developement</h4>
              <div className="para">
                <hr className="one" />
              </div>
              <h4 className="header">Programming Languages To Learn: </h4>
              <div className="para">
                <hr className="one" />
              </div>
              <div id="php" className="float">
                <li className="hl para"> 1. php </li>
                <p>
                  PHP, an acronym for Hypertext Preprocessor, is a server-side
                  scripting language and is one of the most widely used
                  programming languages for backend web development. We can
                  validate this statement by letting you know that platforms
                  like Wikipedia, WordPress, Facebook, and many others are
                  relying on PHP. This particular language is preferred for web
                  development because of various prominent reasons such as
                  cross-platform compatibility, OOPs features, easy integration
                  with HTML, CSS, JavaScript, etc, huge community support,
                  better flexibility & security, and many more. In addition, the
                  language is quite easy to learn and use. Furthermore, there
                  are various renowned PHP frameworks out there such as Laravel,
                  Symfony, CodeIgniter, etc. that you can consider.
                </p>
                <h4 className="header">Resources For PHP </h4>
                <div className="para">
                  <hr className="one" />
                </div>
                <div className="youtubeflex">
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/OK_JCtrrv-c"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/videoseries?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytr">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/6EukZDFE_Zg"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div id="python" className="float">
                <li className="hl"> 2. Python</li>
                <p>
                  Another language that is being preferred for backend
                  development, specifically in current times, is Python. It is a
                  high-level, general-purpose programming language that supports
                  multiple programming paradigms such as Object-Oriented,
                  Procedural, and Functional. Instagram, Spotify, Google, etc.
                  are some of the popular platforms that are using Python in
                  their tech stacks. The language provides you with some
                  remarkable features such as rich library support, easy
                  integration with other languages, GUI Programming support,
                  compatibility with trending technologies, etc. Also, Python
                  has a very simple syntax and comes up with better code
                  readability aspects that subsequently make it easy to learn
                  and use. Several popular Python web frameworks to you can take
                  into consideration are Django, Flask, etc.
                </p>
                <h4 className="header">Resources For python </h4>
                <div className="para">
                  <hr className="one" />
                </div>
                <div className="youtubeflex">
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/gfDE2a7MKjA"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/rfscVS0vtbw"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytr">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/_uQrJ0TkZlc"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div id="" className="float">
                <li className="hl">3.Javascript </li>
                <p>
                  Honestly, JavaScript needs no introduction for its extensive
                  role in web development. It is actually one of the fundamental
                  units of web development alongside HTML and CSS. The language
                  is being preferred by a huge number of developers for web
                  development, and it is ranking at the top position as well at
                  various renowned indices for top programming languages. Apart
                  from web development, the language can also be used for game
                  development, mobile application development, etc. Some of the
                  considerable features of this particular language are –
                  Imperative & Structured, Light-Weight, Object-oriented
                  Programming Support, Platform Independent, and many others.
                  Also, the best part is that JavaScript can be used for both –
                  Frontend Development and Backend Development. Other languages
                  that you can consider: Java, Go, Ruby, etc.
                </p>
              </div>
              <h4 className="header">
                Backend Frameworks For Web Developement
              </h4>
              <div className="para">
                <hr className="one" />
              </div>
              <div id="django" className="float">
                <li className="hl"> 1. Django </li>
                <p>
                  Django is a Python-based open-source web framework that allows
                  you to do web development more efficiently and without any
                  hassle. Django follows the model-template-views (MTV)
                  architectural pattern. The reason behind the immense
                  popularity and demand for this particular framework is some of
                  its noticeable features such as extensibility, rapid
                  development, scalability, security, vast community, and many
                  more. Businesses are using Django for various distinct web
                  development areas such as social networking platforms,
                  scientific computing platforms, content management systems,
                  and various others. Some of the popular websites that are
                  using Django are – Instagram, Mozilla, Pinterest, etc. If you
                  want to get into web development using Python – you can surely
                  give it a try to Django.
                </p>
                <h4 className="header">Resources For Django </h4>
                <div className="para">
                  <hr className="one" />
                </div>
                <div className="youtubeflex">
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/JxzZxdht-XY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/o0XbHvKxw7Y"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytr">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/F5mRW0jo-U4"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div id="laravel" className="float">
                <li className="hl"> 2. Laravel </li>
                <p>
                  Laravel is one of the most popular PHP frameworks available in
                  the tech world. This open-source web framework follows the
                  Model-View-Controller (MVC) architectural pattern and provides
                  you with numerous enriching features like a built-in
                  command-line tool called Artisan, pre-installed
                  Object-Oriented and Modular libraries, Eloquent ORM (Object
                  Relational Mapping), Template Engine, and many others.
                  Moreover, the framework leverages you with various tools for
                  particular tasks like dependency injection, unit testing, etc.
                  The ready-to-use packages provided by Laravel include Cashier
                  for managing subscription billing services, Envoy that
                  provides a clean & minimal syntax for defining common tasks
                  you run on your remote servers, Socialite for the simplified
                  mechanism for OAuth authentication with providers like
                  Facebook, GitHub, Google, etc. and various others.
                </p>
                <h4 className="header">Resources For Laravel </h4>
                <div className="para">
                  <hr className="one" />
                </div>
                <div className="youtubeflex">
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/ImtZ5yENzgE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/376vZ1wNYPA"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytr">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/MYyJ4PuL4pY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <h4 className="header">
                {" "}
                Server Tier In Web Developement(Node.js and Express.js)
              </h4>
              <div className="para">
                <hr className=" one" />
              </div>
              <div id="node" className="float">
                <li className="hl"> 1. Node.js </li>
                <p>
                  Node.js is an open source and cross-platform runtime
                  environment for executing JavaScript code outside of a
                  browser. You need to remember that NodeJS is not a framework
                  and it’s not a programming language. Most of the people are
                  confused and understand it’s a framework or a programming
                  language. We often use Node.js for building back-end services
                  like APIs like Web App or Mobile App. It’s used in production
                  by large companies such as Paypal, Uber, Netflix, Wallmart and
                  so on.
                  <br />
                  Node.js is a platform for building the i/o applications which
                  are server-side event-driven and made using JavaScript.
                </p>
                <h4 className="header">Resources For MongoDB </h4>

                <div className="para">
                  <hr className="one" />
                </div>

                <div className="youtubeflex">
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/BLl32FvcdVM"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/JnvKXcSI7yk"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytr">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/Oe421EPjeBE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>

              <div id="express" className="float">
                <li className="hl"> 2. Express.js </li>
                <p>
                  Express is a small framework that sits on top of Node.js’s web
                  server functionality to simplify its APIs and add helpful new
                  features. It makes it easier to organize your application’s
                  functionality with middle ware and routing. It adds helpful
                  utilities to Node.js’s HTTP objects. It facilitates the
                  rendering of dynamic HTTP objects.
                  <br />
                  <br />
                  Express.js is a framework based on Node.js for which is used
                  for building web-application using approaches and principles
                  of Node.js.event-driven.
                </p>
                <h4 className="header">Resources For Express.js </h4>

                <div className="para">
                  <hr className="one" />
                </div>

                <div className="youtubeflex">
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/Oe421EPjeBE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/7H_QH9nipNs"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytr">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/L72fhGm1tfE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <h4 className="header">Database For Web Developement</h4>
              <div className="para">
                <hr className="one" />
              </div>
              <div id="mongodb" className="float">
                <li className="hl"> 1. MongoDB </li>
                <p>
                  MongoDB is a free and open-source document-oriented database
                  that is very much popular among web developers. This NoSQL
                  database uses JSON-like documents with optional schemas for
                  storage & retrieval of data and comes up with much-needed
                  scalability and flexibility. MongoDB provides you with
                  numerous prominent features such as Ad-hoc queries, Indexing,
                  Replication, Load Balancing, File Storage, Aggregation,
                  Transactions, etc. In addition, the security and data recovery
                  aspects of this particular database are quite better compared
                  to various other database management systems. Other than that,
                  MongoDB is compatible with various standard programming
                  languages like C/C++, Java, PHP, Python, Ruby, and several
                  others
                </p>
                <h4 className="header">Resources For MongoDB </h4>

                <div className="para">
                  <hr className="one" />
                </div>
                <a href="https://www.mongodb.com/docs/">
                  <li className="sklearn">
                    Read here the official Documentation of MongoDB{" "}
                  </li>
                </a>
                <div className="youtubeflex">
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/oSIv-E60NiU"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/videoseries?list=PLwGdqUZWnOp1P9xSsJg7g3AY0CUjs-WOa"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytr">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/lBBtq3Oawqw"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div id="mysql" className="float">
                <li className="hl"> 2. MySQL </li>
                <p>
                  MySQL is another open-source relational database management
                  system that is widely used for web-based applications. It is a
                  fast and high-performance database that provides better
                  scalability, usability, and reliability. Also, MySQL provides
                  cross-platform compatibility, strong indexing support, SSL
                  support for secured connections, powerful data encryption and
                  accuracy, built-in replication support, and various other
                  features. Meanwhile, MySQL can work on various distinct
                  operating systems and is compatible with many popular
                  languages like PHP, Java, etc. Let us tell you this as well
                  that this particular framework, MySQL, is used by various
                  renowned websites like Flickr, Twitter, Facebook, Drupal,
                  Joomla, and many others. Other databases that you can
                  consider: Oracle, PostgreSQL, etc.
                </p>
                <h4 className="header">Resources For MySQL </h4>
                <div className="para">
                  <hr className="one" />
                </div>
                <div className="youtubeflex">
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/WmGgxTpGs_8"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/HXV3zeQKqGY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="ytr">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/7S_tz1z_5bA"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div id="firebase" className="float">
                <li className="hl"> 3. Firebase </li>
                <p>
                  Firebase is a product of Google which helps developers to
                  build, manage, and grow their apps easily. It helps developers
                  to build their apps faster and in a more secure way. No
                  programming is required on the firebase side which makes it
                  easy to use its features more efficiently. It provides
                  services to android, ios, web, and unity. It provides cloud
                  storage. It uses NoSQL for the database for the storage of
                  data.
                  <br />
                  <h4 className="hl"> Some of the Features of Firebase:</h4>
                  <br />
                  <li>
                    <span className="hl"> Realtime Database:</span> The Firebase
                    Realtime Database is a cloud-based NoSQL database that
                    manages your data at the blazing speed of milliseconds. In
                    simplest term, it can be considered as a big JSON file.
                  </li>
                  <li>
                    <span className="hl"> Authentication:</span> Firebase
                    Authentication service provides easy to use UI libraries and
                    SDKs to authenticate users to your app. It reduces the
                    manpower and effort required to develop and maintain the
                    user authentication service. It even handles tasks like
                    merging accounts, which if done manually can be hectic
                  </li>
                  <li>
                    <span className="hl">Cloud Firestore:</span> The cloud
                    Firestore is a NoSQL document database that provides
                    services like store, sync, and query through the application
                    on a global scale. It stores data in the form of objects
                    also known as Documents. It has a key-value pair and can
                    store all kinds of data like, strings, binary data, and even
                    JSON trees.
                  </li>
                  <li>
                    <span className="hl">Hosting:</span> Firebase provides
                    hosting of applications with speed and security. It can be
                    used to host Stati or Dynamic websites and microservices. It
                    has the capability of hosting an application with a single
                    command.
                  </li>
                </p>
                <h4 className="header">Resources For Firebase </h4>

                <div className="para">
                  <hr className="one" />
                </div>
                <a href="https://firebase.google.com/docs/build">
                  <li className="sklearn">
                    Read here the official Documentation of Firebase{" "}
                  </li>
                </a>
                <div className="youtubeflex">
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/fgdpvwEWJ9M"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="float" id="fullstack">
                <h4 className="header">Full Stack Web Developement</h4>
                <div className="para">
                  <hr className="one" />
                </div>
                <p className="float">
                  Full Stack Developers work in both the front-end sides of a
                  website. They can create a website,application or software
                  program for start to end. “Stack” refers to the different
                  technologies that handle different functionalities on the same
                  website like the server interface,etc. Full-stackers take care
                  of both the front-end and the back-end, and need to know how
                  the web works on all levels, in order to determine how the
                  client- and server-sides will relate. Naturally working up to
                  this level of expertise will take longer, as there is more to
                  learn.
                  <br />
                  <br />
                  In addition to mastering HTML and CSS, he/she also knows how
                  to: Program a browser (like using JavaScript, jQuery, Angular,
                  or Vue) Program a server (like using PHP, ASP, Python, or
                  Node) Program a database (like using SQL, SQLite, or MongoDB)

                  <br/>
                  <li className="hl">Some famous Full stacks are :</li>
                  <h4 className="sklearn"> 1.MERN :(MongoDB , Express.js ,React.js ,Node.js)</h4>
                  <h4 className="sklearn"> 2.MEAN :(MongoDB , Express.js ,Angular.js ,Node.js)</h4>
                  <br/>
                  <br/>
                  If you have followed the roadmap mentioned above you can be a full stack web developer...!!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
