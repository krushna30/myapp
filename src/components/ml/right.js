import React, { Component } from "react";
import "./ml.css";
import slider1 from "./ml.jpg";
import lib from "./mllibrary.jpg";
export default class right extends Component {
  render() {
    return (
      <div className="intro ">
        <div className="right">
          <div id="1.">
            <h4 className="header">Let's Understand Machine Learning !</h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <div className="">
              <p className="float">
                Machine Learning Roadmap : Machine learning (ML) is a type of
                artificial intelligence (AI) that allows software applications
                to become more accurate at predicting outcomes without being
                explicitly programmed to do so. Machine learning algorithms use
                historical data as input to predict new output
                values.Recommendation engines are a common use case for machine
                learning. Other popular uses include fraud detection, spam
                filtering, malware threat detection, business process automation
                (BPA) and predictive maintenance.
              </p>
            </div>
            <div id="1.1">
            <h4 className="header" id="1.1">Importance of Machine Learning !</h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <p className="float">
              Machine learning is important because it gives enterprises a view
              of trends in customer behavior and business operational patterns,
              as well as supports the development of new products. Many of
              today’s leading companies, such as Facebook, Google and Uber, make
              machine learning a central part of their operations. Machine
              learning has become a significant competitive differentiator for
              many companies.
            </p>
            </div>
            <h2 className="header" id="1.2">
              If you want to learn Machine Learning with Python. expected you
              know the below concepts:
            </h2>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <p className="float">
              If you are not familiar with Python, there are several ways to
              learn this powerful simple language. You can take some courses on
              Udemy, Coursera, etc.
            </p>

            <ul className="para sq float">
              <li>1. Variables</li>
              <li>2. Mathematical Operators</li>
              <li>3. Control Statements</li>
              <li>4. Data Structures (List, Set, Dict, etc.)</li>
              <li>5. Work with files</li>
              <li>6. Functions</li>
              <li>7. Object-Oriented Programming</li>
            </ul>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <div className="features">
              <h4 className="header" id="1.2.1">
                {" "}
                Features of Machine Learning:
              </h4>
              <div className="para">
                {" "}
                <hr className="one" />
              </div>
              <ul className="sq para float">
                <li>
                  ML uses data to detect various patterns in a given dataset
                  automatically
                </li>
                <li>
                  Machine learning can learn from past data and improve
                  automatically
                </li>
                <li>
                  {" "}
                  ML is a data-driven technology. It is much similar to data
                  mining as it also deals with the huge amount of the data
                </li>
              </ul>
            </div>
            <div className="need" id="1.2.2">
              <h4 className="header"> Need of Machine Learning:</h4>
              <div className="para">
                {" "}
                <hr className="one" />
              </div>
              <ul className="sq para float">
                <li>To solving complex problems</li>
                <li>Decision making in various sector including finance</li>
                <li>
                  {" "}
                  Finding hidden patterns and extracting useful information from
                  the data
                </li>
                <li>Rapid increment in the production of data</li>
              </ul>
            </div>

            <div className="Application" id="1.2.3">
              <h4 className="header"> Applications of Machine Learning:</h4>
              <div className="para">
                {" "}
                <hr className="one" />
              </div>
              <ul className="sq para float">
                <li>Self-driving cars</li>
                <li>Stock market trading prediction</li>
                <li> Image Recognition</li>
                <li>Traffic Prediction</li>
                <li>Online Fraud Detection</li>
                <li>Medical Diagnosis</li>
                <li>Email spams and malware filtering</li>
                <li>Speech Recognition</li>
                <li>Automatic Language Translation</li>
              </ul>
            </div>

            <div id="1.3">
              <h4 className="w3-center">Let's Begin The Journey</h4>
              <div className="para">
                {" "}
                <hr className="one" />
              </div>
              <img className="start" src={slider1} alt="start" />
              <div className="step1 float" id="1.3.1">
                <h4 className="header" >
                  Step 1: Pick a programming language & Get Started!
                </h4>
                <p className="float">
                  The first step to starting learning machine learning is to
                  pick up a programming language. There are different
                  programming languages in the market, but the most suitable for
                  machine learning are Python and R. I recommend Python. Why?
                  Because its popular, easy to learn and future-ready With
                  Python, you can switch domains easily. Python offers popular
                  frameworks like Django and Flask for backend development,
                  Tkinter for GUI development, Pygames for Game development,
                  etc.
                </p>

                <div className="float">
                  If you go with Python, you must learn sklearn for Machine
                  Learning. Sklearn is a modern machine learning library written
                  in Python.
                  <span>
                    {" "}
                    <a href="https://scikit-learn.org/stable/">
                      <div className="sklearn">Learn the Sklearn</div>
                    </a>
                  </span>
                  The best thing about sklearn is that most of the Machine
                  learning algorithms are written for you already. It has a lot
                  of useful classes for preprocessing your data for further
                  analysis
                </div>
                <h4 className="header">
                  Basics For Begginer Along with Project:
                </h4>

                <div className="para">
                  {" "}
                  <hr className="one" />
                </div>
                <div className="youtubeflex">
                  <div className="ytl">
                    <iframe
                      width="360"
                      height="315"
                      src="https://www.youtube.com/embed/iIkJrwVUl1c"
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
                      src="https://www.youtube.com/embed/elojMnjn4kk"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="step2 float" id="1.3.2">
                <h4 className="header">Step 2: Learn Linear Algebra</h4>
                <div className="para">
                  {" "}
                  <hr className="one" />
                </div>
                <p className="float">
                  You should learn Linear Algebra if you wish to master Machine
                  Learning and become a pro! This is essential because if you
                  want to tune your models with maximum flexibility, you need to
                  know how they work, and knowing linear algebra is a must for
                  that! When you start, you should focus on Step 1, and while
                  you are following step 1, you can begin learning Linear
                  Algebra parallelly. This is what I call the parallel
                  conquering technique.
                </p>
                <div className="float">
                  One of the resources I found very helpful for revisiting
                  linear algebra concepts was these pdf notes.
                  <span>
                    {" "}
                    <a href="https://webspace.maths.qmul.ac.uk/p.j.cameron/notes/linalg.pdf">
                      <div className="sklearn">Read the pdf Notes</div>
                    </a>
                  </span>
                </div>
              </div>
              {/* step 3 start */}
              <div id="1.3.3">
              <div className="step3 float" >
                <h4 className="header">
                  Step 3: Learn Probability & Statistics
                </h4>
                <div className="para">
                  {" "}
                  <hr className="one" />
                </div>
                <p className="float">
                  Having a basic understanding of probability and statistics is
                  important when it comes to mastering Machine Learning.
                  <div className="">
                    Here is one of the best resources for that:
                    <span>
                      {" "}
                      <a href="https://www.mathsbox.org.uk/twi/astats.pdf">
                        <div className="sklearn">
                          {" "}
                          Statistics Revision Notes by MathBox
                        </div>
                      </a>
                    </span>
                    Since the basis of the concepts of Machine Learning is
                    derived from statistics and probability, familiarity with
                    them and mastery of statistics and probability help a lot in
                    understanding ML concepts. You can learn them in the
                    <span>
                      {" "}
                      <a href="https://www.khanacademy.org/math/statistics-probability">
                        <div className="sklearn"> KhanAcademy course</div>
                      </a>
                    </span>
                    You should know the following concepts:
                  </div>
                </p>
                <ul className="sq para float">
                  <li>Categorical & Numerical Data</li>
                  <li>Mean, Mode and Median</li>
                  <li> Standard Deviation and Variance</li>
                  <li>Co-Variance</li>
                  <li>Correlation</li>
                  <li>Skewness</li>
                  <li>Random Variables</li>
                  <li>Distributions</li>
                  <li>Conditional and classic Probability</li>
                </ul>
              </div>
              </div>
              {/* step3 ends */}

              {/* step4 start */}
              <div className="step4 float" id="1.3.4">
                <h4 className="header">Step 4: Learn Core ML Algorithms</h4>
                <div className="para">
                  {" "}
                  <hr className="one" />
                </div>
                <p className="float">
                  Once you have some idea of using sklearn after learning
                  python, you should start looking into how these machine
                  learning algorithms work. While using sklearn, and ML
                  Algorithm is a black box written by the sklearn developers. In
                  order to get an idea of how these Machine learning algorithms
                  work from within, look into:
                  <ul className="sq para float">
                    <li>Gradient Descent</li>
                    <li>Slope</li>
                    <li> Supervised vs Unsupervised learning</li>
                    <li>Reinforcement Learning</li>
                    <li>Basic Linear Regression</li>
                    <li>Skewness</li>
                    <li>Working of all such similar models</li>
                    <li>Clustering</li>
                  </ul>
                  <div className="">
                    Here is one of the best resources for that:
                    <span>
                      {" "}
                      <a href="https://developers.google.com/machine-learning/crash-course">
                        <li className="sklearn"> ML Course from Google</li>
                      </a>
                    </span>
                    <span>
                      {" "}
                      <a href="https://madewithml.com/">
                        <li className="sklearn"> madewithml.com</li>
                      </a>
                    </span>
                  </div>
                </p>
              </div>
              {/* step4 end */}

              <div className="step5 float" id="1.3.5">
                <img className="end" src={lib} alt="end" />
                <h4 className="header">Step 5: Learn Python Libraries</h4>
              </div>

              <div className="step6 float" id="1.3.6">
                <h4 className="header">Step 6: Learn Deployment</h4>
                <p className="para">
                  To host your machine learning models with a powerful backend,
                  you will need to learn frameworks like Django and Flask.
                  Docker and Kubernetes can be of great help if you want to ship
                  and deploy your models quickly! Streamlit is worthy of looking
                  into if you wish to build custom web apps for machine learning
                  and data science .
                </p>
              </div>

              <div className="resources float" id="1.4.1">
                <h4 className="header">
                  Resources and study Material For Machine Learning:
                </h4>
                <div className="para">
                  {" "}
                  <hr className="one" />
                </div>
                <div className="youtubeflex">
                  <div className="ytl">
                    <div>
                      <iframe
                        width="315"
                        height="315"
                        src="https://www.youtube.com/embed/GwIo3gDZCVQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="ytl ">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/gmvvaobm7eQ"
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
                      src="https://www.youtube.com/embed/RnFGwxJwx-0"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>

                <div className="mltheory float " id="1.4.2">
                  <h4 className="header">Machine Learning Theory:</h4>
                  <div className="para">
                    <hr className="one" />
                  </div>
                  <div className="float para">
                    <a href="https://www.coursera.org/learn/machine-learning">
                      <li className="sklearn">
                        {" "}
                        Machine Learning, Stanford University
                      </li>
                    </a>
                    <a href="https://ocw.mit.edu/courses/6-867-machine-learning-fall-2006/">
                      <li className="sklearn"> Machine Learning, MIT</li>
                    </a>
                    <a href="https://www.cs.ox.ac.uk/people/nando.defreitas/machinelearning/">
                      <li className="sklearn">
                        {" "}
                        Machine Learning, Oxford University
                      </li>
                    </a>
                    <a href="https://www.dataschool.io/machine-learning-with-scikit-learn/">
                      <li className="sklearn">
                        {" "}
                        Machine Learning, Data School
                      </li>
                    </a>
                  </div>
                </div>

                <div className="dltheory float " id="1.4.3">
                  <h4 className="header">Deep Learning Theory:</h4>
                  <div className="para">
                    <hr className="one" />
                  </div>
                  <div className="float">
                    <a href="https://www.deeplearningbook.org/">
                      <li className="sklearn">
                        {" "}
                        Deep Learning, Ian Goodfellow
                      </li>
                    </a>
                    <a href="http://neuralnetworksanddeeplearning.com/">
                      <li className="sklearn">
                        {" "}
                        Neural Networks and Deep Learning
                      </li>
                    </a>
                    <a href="http://colah.github.io/posts/2015-08-Understanding-LSTMs/">
                      <li className="sklearn"> Understanding LSTM Networks</li>
                    </a>
                    <a href="http://kaiminghe.com/icml16tutorial/icml2016_tutorial_deep_residual_networks_kaiminghe.pdf">
                      <li className="sklearn"> Deep Residual Learning</li>
                    </a>
                  </div>
                </div>

                <div className="fbtheory float " id="1.4.4">
                  <h4 className="header">
                    Forward and Backpropagation Theory and Code:
                  </h4>
                  <div className="para">
                    <hr className="one" />
                  </div>
                  <div className="float">
                    <a href="https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/">
                      <li className="sklearn">
                        {" "}
                        Step by Step Forwardpropagation and Backpropagation with
                        Numbers
                      </li>
                    </a>
                    <a href="http://blog.aloni.org/posts/backprop-with-tensorflow/">
                      <li className="sklearn">
                        Full Manual Backward Propagation with TensorFlow
                      </li>
                    </a>
                    <a href="http://iamtrask.github.io/2015/07/12/basic-python-network/">
                      <li className="sklearn">
                        {" "}
                        Simple Backward Propagation with Python
                      </li>
                    </a>
                    <a href="https://machinelearningmastery.com/implement-backpropagation-algorithm-scratch-python/">
                      <li className="sklearn">
                        {" "}
                        Backward Propagation from Scratch with Python
                      </li>
                    </a>
                  </div>

                  <h4 className="header">
                    Neural Networks Demystified with Python, Welch Labs: Follow
                    the Following playlist
                  </h4>
                  <div className="para">
                    {" "}
                    <hr className="one" />
                  </div>

                  <div className="youtubeflex">
                    <div className="ytl">
                      <div>
                        <iframe
                          width="315"
                          height="315"
                          src="https://www.youtube.com/embed/bxe2T-V8XRs"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>

                    <div className="ytl">
                      <iframe
                        width="315"
                        height="315"
                        src="https://www.youtube.com/embed/UJwK6jAStmg"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>{" "}
                    </div>

                    <div className="ytr">
                      <iframe
                        width="315"
                        height="315"
                        src="https://www.youtube.com/embed/5u0jaA3qAGk"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>{" "}
                    </div>
                  </div>
                </div>

                <div className="nntheory float " id="1.4.6">
                  <h4 className="header">
                    Convolutional Neural Networks with TensorFlow/Keras:
                  </h4>
                  <div className="para">
                    <hr className="one" />
                  </div>
                  <div className="float">
                    <a href="https://github.com/fchollet/deep-learning-models">
                      <li className="sklearn">
                        {" "}
                        Deep Learning Models like VGG, Inception V3, ResNet and
                        more in Keras
                      </li>
                    </a>
                    <a href="https://ocw.mit.edu/courses/6-867-machine-learning-fall-2006/">
                      <li className="sklearn">
                        {" "}
                        Practical Deep Learning with Keras, Jason Brownlee
                      </li>
                    </a>
                    <a href="https://www.cs.ox.ac.uk/people/nando.defreitas/machinelearning/">
                      <li className="sklearn">
                        {" "}
                        Machine Learning, Oxford University
                      </li>
                    </a>
                    <a href="https://www.dataschool.io/machine-learning-with-scikit-learn/">
                      <li className="sklearn">
                        {" "}
                        Machine Learning, Data School
                      </li>
                    </a>
                  </div>
                </div>

                {/* general start  */}
                <div className="reinforcement float " id="1.4.7">
                  <h4 className="header">Reinforcement Learning Theory </h4>
                  <div className="para">
                    <hr className="one" />
                  </div>
                  <div className="float">
                    <a href="https://www.intel.com/content/www/us/en/developer/tools/frameworks/overview.html">
                      <li className="sklearn">
                        {" "}
                        Reinforcement Learning Introduction, Nervana
                      </li>
                    </a>
                    <a href="https://github.com/dennybritz/reinforcement-learning">
                      <li className="sklearn">
                        {" "}
                        Programming Exercises for Sutton’s Book
                      </li>
                    </a>
                    <a href="http://mlg.eng.cam.ac.uk/yarin/blog_3d801aa532c1ce.html">
                      <li className="sklearn">
                        {" "}
                        Uncertainty Estimates from Dropouts
                      </li>
                    </a>
                    <a href="https://yanpanlau.github.io/2016/10/11/Torcs-Keras.html">
                      <li className="sklearn">
                        {" "}
                        Using Keras with DPPG to play TORCS
                      </li>
                    </a>
                    <a href="https://github.com/yao62995/A3C">
                      <li className="sklearn">
                        {" "}
                        Advantage async actor-critic Algorithms (A3C) and
                        Progressive Neural Network in TensorFlow
                      </li>
                    </a>
                  </div>
                </div>
                {/* generalend */}

                {/* rec nn tensor start */}
                <div className="reinforcement float " id="1.4.10">
                  <h4 className="header">
                    Recurrent Neural Networks with TensorFlow{" "}
                  </h4>
                  <div className="para">
                    <hr className="one" />
                  </div>
                  <div className="float">
                    <a href="http://monik.in/a-noobs-guide-to-implementing-rnn-lstm-using-tensorflow/">
                      <li className="sklearn"> RNN-LSTM with TensorFlow</li>
                    </a>
                    <a href="https://danijar.com/introduction-to-recurrent-networks-in-tensorflow/">
                      <li className="sklearn">
                        {" "}
                        Introduction to RNN in TensorFlow{" "}
                      </li>
                    </a>
                    <a href="https://r2rt.com/">
                      <li className="sklearn"> Advanced RNN guides and code</li>
                    </a>
                    <a href="https://r2rt.com/recurrent-neural-networks-in-tensorflow-i.html">
                      <li className="sklearn">
                        {" "}
                        RNN in TensorFlow with and without API{" "}
                      </li>
                    </a>
                  </div>
                </div>
                {/* rec nn tensor start */}

                {/* math start */}
                <div className="math float para " id="1.4.11">
                  <h4 className="header">
                    Mathematics Useful for Machine Learning{" "}
                  </h4>
                  <div className="para">
                    <hr className="one" />
                  </div>
                  <div className="float sklearn">
                  <a href="https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/" >
                      <li className="sklearn"> Discrete Mathematics, MIT</li>
                    </a>
                    <a href="https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/">
                      <li className="sklearn"> Linear Algebra, MIT </li>
                    </a>
                    <a href="http://cs229.stanford.edu/section/cs229-prob.pdf">
                      <li className="sklearn"> Probability Review, Stanford</li>
                    </a>
                    <a href="http://cs229.stanford.edu/section/cs229-cvxopt.pdf">
                      <li className="sklearn">
                        {" "}
                        More convex optimization overview, Stanford{" "}
                      </li>
                    </a>

                    <a href="https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/">
                      <li className="sklearn">
                        {" "}
                        Single Variable Calculus, MIT
                      </li>
                    </a>
                  </div>
                </div>

                {/* math end */}

                <div className="float">
                  <h4 className="header">Conclusion</h4>
                  <div className="para">
                    <hr className="one" />
                  </div>
                  <p className="float">
                    Machine learning is a hot topic these days, but it can be
                    hard to know where you should start. This roadmap will help!
                    We’ll go over the different steps that are needed for
                    someone who wants to become an expert in this field and take
                    their career from “beginner” all the way up to “expert”
                    level!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
