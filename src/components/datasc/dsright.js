import React, { Component } from "react";
import roadmap from "./dsroadmap.png";
export default class dsright extends Component {
  render() {
    return (
      <div className="intro ">
        <div className="right">
          <div id="1.">
           
            <h4 className="header">Let's Understand Data Science!</h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <p className="float">
            <img
            className="roadmap"
            src={roadmap}
            alt="roadmap"/>
              Data science is a field that combines domain knowledge,
              programming abilities, and mathematics and statistics knowledge to
              extract useful insights from data.
              <br />
              <br />
              Machine learning algorithms are used to number, text, photos,
              video, audio, and other data to create artificial intelligence
              (AI) systems that can execute jobs that would normally need human
              intelligence.
              <br />
              <br />
              By using Data Science, we are able to make:
              <li> Better decisions (should we choose A or B) </li>
              <li> Predictive analysis (what will happen next?) </li>
              <li>
                {" "}
                 Pattern discoveries (find pattern, or maybe hidden information
                in the data){" "}
              </li>
            </p>
          </div>

          <div id="2.">
            <h4 className="header">Roadmap in detail </h4>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float" id="step1">
              <h4 className="header">
                Step 1. How to Learn About Programming or Software Engineering
              </h4>
              <div className="para">
                <hr className="one" />
              </div>
              <br />
              (Estimated time: 2-3 months)
              <br />
              <li>
                Common data structures (data types, lists, dictionaries, sets,
                tuples), writing functions, logic, control flow, searching and
                sorting algorithms, object-oriented programming, and working
                with external libraries
              </li>
              <li>
                SQL scripting: Querying databases using joins, aggregations, and
                subqueries
              </li>
              <li>
                {" "}
                Comfort using the Terminal, version control in Git, and using
                GitHub
              </li>
              <div className="  para " id="step1.1">
                <h4 className="header">RESOURCES TO LEARN PYTHON :</h4>
                <div className="para">
                  <hr className="one" />
                </div>
                <div className="float sklearn">
                  <a href="https://www.learnpython.org/">
                    <li className="sklearn"> www.LearnPython.com</li>
                  </a>
                  <a href="https://www.kaggle.com/learn/python/">
                    <li className="sklearn"> www.Kaggle.com </li>
                  </a>
                  <a href="https://www.freecodecamp.org/learn/scientific-computing-with-python/python-for-everybody/">
                    <li className="sklearn"> www.freecodecamp.org</li>
                  </a>
                </div>
                <div className="youtubeflex">
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
                  <div className="ytl">
                    <iframe
                      width="315"
                      height="315"
                      src="https://www.youtube.com/embed/HGOBQPFzWKo"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>

                <h4 className=" header tm" id="step1.2">
                  Resources To Learn Git and Github :
                </h4>
                <div className="para">
                  <hr className="one" />
                </div>
                <div className="float sklearn">
                  <div className=" start">
                    <iframe
                      width="315"
                      height="215"
                      src="https://www.youtube.com/embed/RGOj5yH7evk"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <a href="https://www.atlassian.com/git">
                    <li className="sklearn">
                      Learn Git From Basics To Advance
                    </li>
                  </a>
                  <a href="https://lab.github.com/">
                    <li className="sklearn">
                      Learn GitHub from the GitHub Labs{" "}
                    </li>
                  </a>
                  <a href="https://www.freecodecamp.org/learn/scientific-computing-with-python/python-for-everybody/">
                    <li className="sklearn"> www.freecodecamp.org</li>
                  </a>
                </div>
                <h4 className=" header tm" id="step1.3">Resources for learning SQL:</h4>
                <div className="para">
                  <hr className="one" />
                </div>
                {/*  sql*/}
                <div className="float sklearn">
                  <div className=" start">
                    <iframe
                      width="315"
                      height="215"
                      src="https://www.youtube.com/embed/HXV3zeQKqGY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <a href="https://www.kaggle.com/learn/intro-to-sql">
                    <li className="sklearn">Intro to SQL on kaggle.com</li>
                  </a>
                  <a href="https://www.kaggle.com/learn/advanced-sql">
                    <li className="sklearn">Advanced SQL On kaggle.com</li>
                  </a>
                  <a href="https://teamtreehouse.com/tracks/beginning-sql">
                    <li className="sklearn">
                      Treehouse offers a good introductory SQL course here.
                    </li>
                  </a>
                </div>

                <div>
                  <h4 className="header tm">
                    Measure your expertise by solving a lot of problems and
                    building at least 2 projects:
                  </h4>
                  <div className="para">
                    <hr className="one" />
                  </div>
                  <li>
                    Data Extraction from a website/API endpoints — try to write
                    Python scripts from extracting data from webpages that allow
                    scraping like soundcloud.com. Store the extracted data into
                    a CSV file or a SQL database
                  </li>
                  <li>
                    Games like rock-paper-scissor, spin a yarn, hangman, dice
                    rolling simulator, tic-tac-toe, and so on.
                  </li>
                  <li>
                    Simple web apps like a YouTube video downloader, website
                    blocker, music player, plagiarism checker, and so on.
                  </li>
                  <br />
                  Deploy these projects on GitHub pages or simply host the code
                  on GitHub so that you learn to use Git.
                </div>
              </div>
            </p>
          </div>

          <div className="float" id="step2">
            <h4 className="header">
              Step 2. How to Learn About Data Collection and Wrangling
              (Cleaning)
            </h4>
            <div className="para">
              <hr className="one" />
            </div>

            <p className="float">
              <span className="hl"> (Estimated time: 2 months)</span>
              <br />A significant part of data science work is centered around
              finding apt data that can help you solve your problem. You can
              collect data from different legitimate sources — scraping (if the
              website allows), APIs, Databases, and publicly available
              repositories.
            </p>
            <p className="float">
              Once you have data in hand, an analyst will often find themself
              cleaning dataframes, working with multi-dimensional arrays, using
              descriptive/scientific computations, and manipulating dataframes
              to aggregate data. Data are rarely clean and formatted for use in
              the “real world”. Pandas and NumPy are the two libraries that are
              at your disposal to go from dirty data to ready-to-analyze data.
              <br />
              <br />
              As you start feeling comfortable writing Python programs, feel
              free to start taking lessons on using libraries like pandas and
              numpy.
            </p>
            <div className="float">
              <h4 className="hl">
                Resources to learn about data collection and cleaning:{" "}
              </h4>
              <div className="para">
                <hr className="one" />
              </div>
              <div className="start">
                <iframe
                  width="315"
                  height="215"
                  src="https://www.youtube.com/embed/r-uOLxNrNk8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <a href="https://www.hackerearth.com/practice/machine-learning/data-manipulation-visualisation-r-python/tutorial-data-manipulation-numpy-pandas-python/tutorial/">
                <li className="sklearn">
                  Learn Python Libraries from Hackerrank
                </li>
              </a>
              <a href="https://www.kaggle.com/learn/pandas">
                <li className="sklearn">Learn Pandas from kaggle.com</li>
              </a>
              <a href="https://www.coursera.org/learn/python-data-analysis?specialization=data-science-python">
                <li className="sklearn">Courseera Data Science Course</li>
              </a>
              <a href="https://www.coursera.org/specializations/data-science-python">
                <li className="sklearn">
                  Courseera Applied Data Science Specialization Course
                </li>
              </a>
              <br />
              <h3> Data Collection Project Ideas</h3>
              <br />
              <li>
                Collect data from a website/API (open for public consumption) of
                your choice, and transform the data to store it from different
                sources into an aggregated file or table (DB). Example APIs
                include TMDB, quandl, Twitter API, and so on.
              </li>
              <a href="https://towardsdatascience.com/data-repositories-for-almost-every-type-of-data-science-project-7aa2f98128b">
                <li className="sklearn">
                  Click here to know about Public Dataset for your Project...!
                </li>
              </a>
            </div>
          </div>
          {/* step2 end */}

          {/* step 3 start */}
          <div id="step3">
            <p className="float">
              <h4 className="header">
                Step 3. How to Learn About Exploratory Data Analysis, Business
                Acumen, and Storytelling
              </h4>
              <div className="para">
                <hr className="one" />
              </div>
              <br />
              (Estimated time: 2-3 months)
              <br />
              <p className="float">
                The next stratum to master is data analysis and storytelling.
                Drawing insights from the data and then communicating the same
                to management in simple terms and visualizations is the core
                responsibility of a Data Analyst.
                <br /> The storytelling part requires you to be proficient with
                data visualization along with excellent communication skills
              </p>
              <br />
              <p className="float">
                <h4 className="hl">
                  Specific exploratory data analysis and storytelling topics to
                  learn include
                </h4>

                <div className="para">
                  {" "}
                  <hr className="one" />
                </div>
                <li>
                  Exploratory data analysis — defining questions, handling
                  missing values, outliers, formatting, filtering, univariate
                  and multivariate analysis
                </li>
                <li>
                  Data visualization — plotting data using libraries like
                  matplotlib, seaborn, and plotly. Know how to choose the right
                  chart to communicate the findings from the data
                </li>
                <li>
                  Developing dashboards — a good percent of analysts only use
                  Excel or a specialized tool like Power BI and Tableau to build
                  dashboards that summarise/aggregate data to help management
                  make decisions
                </li>
                <li>
                  Business acumen: Work on asking the right questions to answer,
                  ones that actually target the business metrics. Practice
                  writing clear and concise reports, blogs, and presentations
                </li>
              </p>
              <h4 className="header" id="step3.1">
                Resources to learn more about Data Analysis
              </h4>
              <div className="para">
                {" "}
                <hr className="one" />
              </div>
              <a href="https://www.coursera.org/learn/data-analysis-with-python">
                <li className="sklearn">
                  Masters Data Analysis from courseera courses
                </li>
              </a>
              <a href="https://www.kaggle.com/learn/data-visualization">
                <li className="sklearn">
                  Learn Data Visualization from kaggle.com
                </li>
              </a>
              <br />
              <h4 className="hl">Data analysis project ideas</h4>
              <li>
                {" "}
                Exploratory analysis on movies dataset to find the formula to
                create profitable movies (use it as inspiration), use datasets
                from healthcare, finance, WHO, past census, Ecommerce, and so
                on.
              </li>
              <a href="https://towardsdatascience.com/hitchhikers-guide-to-exploratory-data-analysis-6e8d896d3f7e">
                <li className="sklearn">Resource for Dataset</li>
              </a>
              <li>
                {" "}
                Build dashboards (jupyter notebooks, excel, tableau) using the
                resources provided above
              </li>
            </p>
          </div>
          {/* step 3 end */}
          {/* step 4 start */}
          <div id="step4">
            <h4 className="header">
              Step 4. How to Learn About Data Engineering{" "}
            </h4>
            <div className="para">
              <hr className="one" />{" "}
            </div>
            <p className="float">
              <br />
              (Estimated time: 2-3 months)
              <br />
              Data engineering underpins the R&D teams by making clean data
              accessible to research engineers and scientists at big data-driven
              firms. It is a field in itself and you may decide to skip this
              part if you want to focus on just the statistical algorithm side
              of the problems.
              <br />
              Responsibilities of a data engineer comprise building an efficient
              data architecture, streamlining data processing, and maintaining
              large-scale data systems.
              <br />
              Engineers use Shell (CLI), SQL, and Python/Scala to create ETL
              pipelines, automate file system tasks, and optimize the database
              operations to make them high-performance. Another crucial skill is
              implementing these data architectures which demand proficiency in
              cloud service providers like AWS, Google Cloud Platform, Microsoft
              Azure, and others
            </p>
            <p className="float" id="step4.1">
              <h4 className="hl">Resources to learn Data Engineering:</h4>
              <div className="para">
                <hr className="one" />{" "}
              </div>
              <a href="https://www.udacity.com/course/data-engineer-nanodegree--nd027">
                <li className="sklearn">
                  {" "}
                  Data Engineering Nanodegree by Udacity 
                </li>
              </a>
              <a href="https://www.coursera.org/specializations/gcp-data-machine-learning">
                <li className="sklearn">
                  Data Engineering, Big Data, and Machine Learning on GCP
                  Specialization  by Google
                </li>
              </a>
              <a href="https://aws.amazon.com/certification/certified-machine-learning-specialty/">
                <li className="sklearn">
                  {" "}
                  AWS Certified Machine Learning (price : 300 USD) 
                </li>
              </a>
              <a href="https://cloud.google.com/certification/data-engineer">
                <li className="sklearn">
                  Professional Data Engineer — Certification offered by GCP
                </li>
              </a>
              <a href="https://towardsdatascience.com/hitchhikers-guide-to-exploratory-data-analysis-6e8d896d3f7e">
                <li className="sklearn">Resource for Dataset</li>
              </a>
            </p>
          </div>
          {/* step 4 end */}

          <div className="step5">
            <h4 className="header">
              Step 5. How to Learn About Applied Statistics and Mathematics
            </h4>
            <div className="para">
              <hr className="one" />{" "}
            </div>

            <p className="float">
              <br />
              (Estimated time: 4-5 months)
              <br />
              Statistical methods are a central part of data science. Almost all
              data science interviews predominantly focus on descriptive and
              inferential statistics
              <br />
              People often start coding machine learning algorithms without a
              clear understanding of underlying statistical and mathematical
              methods that explain the working of those algorithms. This, of
              course, isn't the best way to go about it.
              <br />
              <h4 className="header">
                Topics you should focus on in Applied Statistics and math:
              </h4>
              <li>
                <span className="hl"> Descriptive Statistics —</span> Learn
                about estimates of location (mean, median, mode, weighted
                statistics, trimmed statistics), and variability to describe the
                data
              </li>
              <li>
                <span className="hl"> Inferential statistics — </span>designing
                hypothesis tests, A/B tests, defining business metrics,
                analyzing the collected data and experiment results using
                confidence interval, p-value, and alpha values.
              </li>
              <li>
                <span className="hl">
                  {" "}
                  Linear Algebra, Single and multi-variate calculus —
                </span>
                to understand loss functions, gradient, and optimizers in
                machine learning.
              </li>
            </p>
            <p className="float" id="step5.1">
              <h4 className="hl">
                Resources to learn about Statistics and math:
              </h4>
              <div className="para">
                <hr className="one" />{" "}
              </div>
              <a href="https://www.freecodecamp.org/news/free-statistics-course/">
                <li className="sklearn"> Learn college-level statistics</li>
              </a>
              <a href="https://www.coursera.org/specializations/gcp-data-machine-learning">
                <li className="sklearn">
                  Data Engineering, Big Data, and Machine Learning on GCP
                  Specialization  by Google
                </li>
              </a>
              <a href="https://learn.datacamp.com/courses/statistical-thinking-in-python-part-1">
                <li className="sklearn">
                  Statistical thinking in Python — a foundation course
                </li>
              </a>
              <a href="https://www.udacity.com/course/intro-to-descriptive-statistics--ud827">
                <li className="sklearn">
                  Intro to Descriptive Statistics— offered by Udacity
                </li>
              </a>
              <a href="https://www.udacity.com/course/intro-to-inferential-statistics--ud201">
                <li className="sklearn">Inferential Statistics, Udacity</li>
              </a>
              <a href="https://www.freecodecamp.org/news/statistics-for-data-science/">
                <li className="sklearn">
                  A guide to statistics for data science
                </li>
              </a>
            </p>
          </div>
          {/* step 5 end */}
          <div className="step6">
            <h4 className="header">
              Step 6. How to Learn About Machine Learning and AI
            </h4>
            <div className="para">
              <hr className="one" />{" "}
            </div>

            <p className="float">
              <br />
              (Estimated time: 4-5 months)
              <br />
              After grilling yourself and going through all the major
              aforementioned concepts, you should now be ready to get started
              with the fancy ML algorithms
              <br />
              <br />
              There are three major types of learning:
              <br />
              <li>
                <span className="hl"> 1.Supervised Learning — </span> includes
                regression and classification problems. Study simple linear
                regression, multiple regression, polynomial regression, naive
                Bayes, logistic regression, KNNs, tree models, ensemble models.
                Learn about evaluation metrics.
              </li>
              <li>
                <span className="hl"> 2. Unsupervised Learning —  </span>
                Clustering and dimensionality reduction are the two widely used
                applications of unsupervised learning. Dive deep into PCA,
                K-means clustering, hierarchical clustering, and gaussian
                mixtures.
              </li>
              <li>
                <span className="hl">3. Reinforcement learning</span>
                (can skip*) — helps you build self-rewarding systems. Learn to
                optimize rewards, using the TF-Agents library, creating Deep
                Q-networks, and so on.
              </li>
            </p>
            <p className="float" id="step6.1">
              <h4 className="hl">Resources to learn about Machine Learning:</h4>
              <div className="para">
                <hr className="one" />{" "}
              </div>
              <a href="https://www.freecodecamp.org/news/machine-learning-with-scikit-learn-full-course/">
                <li className="sklearn">
                  {" "}
                  Machine learning in Python with ScikitLearn{" "}
                </li>
              </a>
              <a href="https://www.coursera.org/learn/machine-learning">
                <li className="sklearn">
                  Machine Learning Course by Andrew Ng 
                </li>
              </a>
              <a href="https://www.kaggle.com/learn/intro-to-machine-learning">
                <li className="sklearn">
                  Introduction to Machine Learning — Interactive course by
                  Kaggle
                </li>
              </a>
              <a href="https://www.kaggle.com/learn/intro-to-game-ai-and-reinforcement-learning">
                <li className="sklearn">
                  Intro to Game AI and Reinforcement Learning 
                </li>
              </a>
              <a href="https://www.deeplearning.ai/deep-learning-specialization/">
                <li className="sklearn">
                  Deep Learning Specialization by deeplearning.ai
                </li>
              </a>
            </p>
          </div>
          <div id="resources">
            <div className="float">
              <div className="youtubeflex">
                <div className="ytl">
                  <iframe
                    width="315"
                    height="315"
                    src="https://www.youtube.com/embed/videoseries?list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV"
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
                    src="https://www.youtube.com/embed/videoseries?list=PLfP3JxW-T70HvifebGl3d5d5jzI1Kp0i8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
