import React, { Component } from "react";
import "./cloud.css";
// import Intro from "./cloud.jpg";
import Types from "./pphcloud.jpg";
import Benefits from "./cloudbenefits.png";
import Security from "./security.jpeg";
import Aws from "./aws.jpg";
import Azure from "./azure.png";
import Gcloud from "./googlecloud.png";
export default class cloudright extends Component {
  render() {
    return (
      <div className="intro ">
        {/* <Webslider /> */}
        <div className="right">
          <div id="1.">
            <h4 className="header">Let's Take a Dive In Cloud Computing !</h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            {/* <img className="end" src={Intro} alt="end" /> */}
            <p className="float">
              In simple terms, cloud computing is a range of services delivered
              over the internet, or “the cloud.” It means using remote servers
              to store and access data instead of relying on local hard drives
              and private datacenters. Before cloud computing existed,
              organizations had to purchase and maintain their own servers to
              meet business needs. This required buying enough server space to
              reduce the risk of downtime and outages, and to accommodate peak
              traffic volume. As a result, large amounts of server space went
              unused for much of the time. Today’s cloud service providers allow
              companies to reduce the need for onsite servers, maintenance
              personnel, and other costly IT resources.
            </p>
          </div>

          <div id="2.">
            <h4 className="header">Working of Cloud Computing !</h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <img className="  front" src={Types} alt="end" />
            <p className="float">
              There are three types of cloud computing deployment models:
              private cloud, public cloud, and hybrid cloud.
              <br />
              <br />
              <p className="float">
                <span className="hl">Private Cloud </span>provides a proprietary
                cloud environment dedicated to a single business entity, with
                physical components stored on-premises or at a vendor’s
                datacenter. Because the private cloud is only accessible to a
                single business, this model offers a high degree of control.
                Advantages include customized architecture, advanced security
                protocols, and the ability to extend computing resources in a
                virtualized environment as needed
              </p>
              <p className="float">
                <span className="hl">Public Cloud </span>uses the internet to
                store and manage access to data and applications. It’s
                completely virtualized, providing an environment where shared
                resources are leveraged as needed. Because these resources are
                delivered over the web, the public cloud deployment model allows
                organizations to scale more easily—the ability to pay for cloud
                resources as needed is a huge advantage over local servers. In
                addition, public cloud service providers offer robust security
                measures to protect user data from being accessed by other
                tenants.
              </p>
              <p className="float">
                <span className="hl">Hybrid Cloud </span>combines private and
                public cloud models, allowing organizations to leverage the
                benefits of shared resources while using existing IT
                infrastructure for critical security requirements. The hybrid
                cloud model allows companies to store confidential data
                internally and access it via applications running in the public
                cloud.
                <br />
                <br />
                In addition, businesses can choose to take a multi-cloud
                approach, which means they use more than one public cloud
                service. This approach can be used to distribute workloads
                across multiple cloud platforms, allowing organizations to
                optimize their environments for performance, flexibility, and
                cost savings.
              </p>
            </p>
          </div>

          <div id="3.">
            <h4 className="header">Benefits of Cloud Computing !</h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <img className=" front" src={Benefits} alt="start" />
            <p className="float">
              Cloud computing has gained popularity at a rapid pace because it
              offers a number of benefits. It’s more cost-effective than on-site
              server installations and can provide faster service than a
              traditional installation.
              <br />
              <br />
              In addition, cloud computing models are easy to scale. The cloud
              extends alongside an organization's fluctuating needs, making it
              easy to accommodate real-time changes in computing power needs.
              The cloud is also very reliable, offering dependable data backup
              for disaster recovery and business continuity. Businesses that
              leverage cloud environments do not need to maintain complex
              hardware, nor do they need to build solutions from scratch. The
              cloud allows teams to get projects up and running as soon as they
              receive executive sign off.
            </p>
          </div>

          <div id="4.">
            <h4 className="header">Examples of Cloud Computing!</h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            {/* <img className="end" src={Intro} alt="end" /> */}
            <p className="float">
              While cloud computing can take many forms, the majority falls into
              three key areas. Each type of cloud computing provides its own set
              of advantages.
              <br />
              <br />
              <b className="hl">Software as a Service (SaaS): </b>
              <p className="float">
                Traditionally, software was installed directly on each
                individual device. With the software as a service (SaaS)
                computing model, web applications are hosted in the cloud to
                reduce costs through pay-as-you-go pricing. End users can easily
                connect to the cloud application through a web browser or mobile
                device, and there’s no need for IT departments to get involved
                with management or maintenance. Examples include Gmail,
                Salesforce CRM, and RightSignature, as well as cloud storage
                services like OneDrive and Dropbox.
              </p>
              <div className="para">
                <hr className="one" />
              </div>
              <b className="hl">Infrastructure as a Service (IaaS): </b>
              <p className="float">
                The infrastructure as a service (IaaS) computing model moves an
                organization's entire datacenter to the cloud. The business
                rents virtual machines (VMs), virtual servers, operating
                systems, and other IT infrastructure on a pay-as-you-go basis.
                The cloud service provider is responsible for maintaining all
                data storage servers and networking hardware, eliminating the
                need for a resource-intensive, on-site installation. Examples
                include Microsoft Azure, Google Cloud, Oracle Cloud, and Amazon
                Web Services (AWS).
              </p>
              <div className="para">
                <hr className="one" />
              </div>
              <b className="hl">Platform as a Service (PaaS): </b>
              <p className="float">
                The platform as a service computing model gives organizations
                the power to develop software without needing to maintain the
                backend environment. PaaS vendors optimize environments for each
                tenant's unique needs, and often include supplemental
                development tools such as storage resources, compile services,
                and version control.
              </p>
            </p>
          </div>

          <div id="5.">
            <h4 className="header">Is cloud computing secure?</h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <img className=" front" src={Security} alt="start" />
            <p className="float">
              Cloud providers take cloud security very seriously. Vendors have
              developed complex security protocols based on encryption and
              authentication, and take steps to ensure tenants can’t access
              their neighbour's data. In general, servers are regulated by the
              laws of the country they reside in. That means data stored on a
              European server will be regulated differently than a server in the
              U.S. Organizations that handle private user data need to be aware
              of all regulations that may apply to their cloud solutions.
            </p>
          </div>

          <div id="6.">
            <h4 className="header">BEST CLOUD CERTIFICATION FOR BEGINNERS</h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <p className="float">
              If you’re getting started in the cloud and aren’t sure where to
              start, AWS, Azure and GCP offer a certification that only requires
              a basic understanding of the platform and are a great way to help
              you get the ball rolling in your cloud certification journey. The
              three certifications for beginners are:
              <span className="hl">
                AWS Certified Cloud Practitioner, Microsoft Certified Azure
                Fundamentals, and Google Associate Cloud Engineer.
              </span>
              <br />
              <br />
              <br />
              <p className="float">
                <img className="aws" src={Aws} alt="aws" />
                <span className="imp">
                  An AWS Certified Cloud Practitioner{" "}
                </span>
                is at the foundational learning level, meaning individuals at
                this level should have at least six months of basic/foundational
                industry and AWS knowledge. In order to get this certification,
                individuals are expected to effectively demonstrate a
                comprehensive understanding of AWS fundamentals and best
                practices
              </p>
              <p className="float">
                <img className="aws" src={Azure} alt="aws" />
                <span className="imp">
                  With an Azure Fundamentals certification
                </span>
                individuals will prove their understanding of cloud concepts,
                Azure pricing and support, core Azure services, as well as the
                fundamentals of cloud privacy, security, trust and compliance.
              </p>
              <p className="float">
                <img className="aws" src={Gcloud} alt="gcloud" />
                <span className="imp">A Google Associate Cloud Engineer</span>
                is at the associate learning level, which is focused on the
                fundamental skills of deploying, monitoring, and maintaining
                projects on Google Cloud. This kind of certification is a good
                starting point for those new to cloud and can be used as a path
                to professional level certifications. The recommended experience
                is just 6+ months building on Google Cloud. This certification
                is intended for individuals that can deploy applications,
                monitor operations, and manage enterprise solutions. Individuals
                have displayed an ability to use the Google Cloud Console and
                the command-line interface to perform common platform-based
                tasks to maintain one or more deployed solutions that leverage
                Google-managed or self-managed services on Google Cloud
              </p>
            </p>
          </div>
          <div className="header" id="7.">
            Steps To Learn Cloud Computing
          </div>

          <div className="para">
            {" "}
            <hr className="one" />
          </div>
          <div id="step1">
            <h4 className="header">Step 1: Check your basic knowledge</h4>
            <p className="float">
              <span>
                Basic knowledge, such as Windows, Linux, and basic networking
                skills, is enough to start your career in cloud computing.
              </span>
              <div className="list">
                Cloud Computing Prerequisites
                <br />
                <br />
                <li>1. Programming Skills</li>
                <li>2. Familiarity with Databases</li>
                <li>3. Basics of Security and Privacy</li>
                <li>4. Knowledge of Agile Development</li>
                <li>5. Familiarity with Operating Systems</li>
                <li>6. Understanding of Virtualization</li>
                <li>7. Basics of Networking</li>
              </div>
            </p>
          </div>
          <div id="step1.1">
            <div className="header">1. Programming Skills</div>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float">
              As a cloud computing professional, you’ll need to have proper
              programming skills because you’ll be working with several
              programming languages. Cloud computing professionals use multiple
              programming languages including Java, PHP, Python, and .NET. Each
              of these languages has its distinct advantages so you should focus
              on developing a basic understanding of each of them. For example,
              Python has multiple libraries that make specific programming tasks
              easier and efficient. On the other hand, PHP is necessary for
              developing cloud computing applications.
            </p>
          </div>

          <div id="step1.2">
            <div className="header">2. Familiarity with Databases</div>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float">
              Databases allow companies to easily store and access a lot of
              information. Cloud computing professionals help their
              organizations by creating and managing cloud-based databases.
              Thus, it is crucial to understand the functionality of databases.
              Moreover, cloud-based databases have become increasingly popular
              in the last few years because they let an organization avail the
              benefits of having a database without the necessary hardware.
              Apart from covering the basics of databases, you should also learn
              related technologies. SQL is the programming language for handling
              a relational database management system. Apart from SQL, other
              prominent database technologies are MongoDB, MySQL, and Apache
              Hadoop
            </p>
          </div>

          <div id="step1.3">
            <div className="header">3. Basics of Security and Privacy</div>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float">
              Digital security and privacy concerns have become a significant
              issue recently. Currently, hackers attack people 2,244 times per
              day, which means they are attacking every 39 seconds. Companies
              have to make sure that their cloud storage and cloud-based
              applications remain safe from hackers and other malicious
              elements. That’s why you should study the fundamentals of
              cybersecurity. You should be familiar with the best practices to
              prevent cybersecurity threats as they mitigate the risk of a
              successful hacking attack substantially. Some of the prominent
              subjects you can learn about are cryptography and encryption. They
              are vital for studying cybersecurity so you can start with them.
              Even a little familiarity with these subjects would be sufficient
              for your preparation. Cybersecurity is a prominent prerequisite
              for cloud computing so we recommend focusing on it.
            </p>
          </div>

          <div id="step1.4">
            <div className="header">4. Knowledge of Agile Development</div>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float">
              Agile development is a software development methodology that
              focuses on developing products through the collaboration of
              cross-functional and self-organising teams and their users. In
              this methodology, a team releases the product after it has reached
              a certain development stage and then modifies the product based on
              the user feedback on the same. The user’s feedback plays a huge
              role in agile development as it helps the developers understand
              the weak areas of the product and work on them. An excellent
              example of agile development is mobile apps. Companies release a
              mobile app and then release new updates now and then for the app
              to enhance their user experience
            </p>
          </div>

          <div id="step1.5">
            <div className="header">5. Familiarity with Operating Systems</div>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float">
              You should be familiar with the basic operations of different
              operating systems such as Windows, macOS, and Linux. Linux is a
              little more important than the other operating systems because
              it’s a widely popular solution among companies for cloud computing
              implementations. This is the simplest prerequisite for cloud
              computing as it takes very little effort to familiarise yourself
              with an OS’s operations. If you’ve been using a PC or a similar
              device for quite some time, you’d already be familiar with most of
              the concepts.
            </p>
          </div>

          <div id="step1.6">
            <div className="header">6. Understanding of Virtualization</div>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float">
              Virtualization is the process of creating virtual devices,
              infrastructures, and servers on one computing device. You create a
              virtual, software-based representation of another device such as
              virtual storage, network, or application in this process.
              Virtualization helps companies in reducing operating costs as they
              can multiply the available software devices without increasing the
              hardware. It’s necessary to be familiar with the basics of an
              operating system before you learn virtualization. You should know
              how to create a virtual machine on your computer and also how to
              create multiple VMs.
            </p>
          </div>

          <div id="step1.7">
            <div className="header">7. Basics of Networking</div>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float">
              After you have learned about virtualization, you should focus on
              networking. In cloud computing, networking focuses on hosting some
              or all network resources from the cloud. This includes virtual
              firewalls, virtual routers, network management software,
              bandwidth, etc. As a beginner, you should start with learning
              about IP addresses and how they work. Understanding the concept of
              IP addresses is fundamental to learning the advanced concepts of
              networking. The network in a cloud-based solution allows the user
              to connect with the cloud services. Apart from connecting the
              users to the cloud service, the network also allows the different
              components of the cloud-based solution (servers and storage nodes)
              to connect
            </p>
          </div>

          <div id="step2">
            <div className="header">
              Step 2: Learn Basics of Cloud Computing
            </div>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float">
              For a beginner, the fundamental ideas of cloud computing will be
              an adventurous journey. You have so many basic courses to learn
              cloud computing online that it’s practically hard to choose the
              best one.
            </p>
          </div>

          <div id="step3">
            <div className="header">
              Step 3: Understand the concepts like “Linux” and “Networking.”
            </div>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float">
              <span className="hl">LINUX: </span> Linux operating systems will
              have a high priority in the IAAS platform and most of the
              companies that work with web applications choose Linux operating
              systems. Example Amazon Web Services and Google Cloud Platform are
              also built around Linux concepts.
            </p>
            <p className="float">
              <span className="hl">NETWORKING: </span>
              <li>
                {" "}
                1. It is the glue that puts everything together in the realm of
                computing.
              </li>
              <li>
                {" "}
                2. You get to understand how different servers around the world
                communicate with each other. All these happen due to Networking.
                So, Put your mind and great in networking concepts
              </li>
            </p>
            <div className="youtubeflex">
            <div className="ytl ">
              <iframe
                width="360"
                height="315"
                src="https://www.youtube.com/embed/aaEoyVIowk8"
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
                src="https://www.youtube.com/embed/fHgk7aDGn_4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            </div>
          </div>

          <div id="step4">
            <h4 className="header">Step 4: Understand how AWS works.</h4>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float">
              There are many cloud platforms available across, but here let’s
              discuss a real cloud platform. AWS is growing rapidly and there
              are many courses about them as some companies have started
              considering them for different workloads or to migrate Once you
              have a better idea of how Amazon Web Services is structured, you
              may start enhancing your career in AWS by taking up advanced
              courses.
            </p>

            <div className="youtubeflex">
              <div className="ytl">
                <iframe
                  width="315"
                  height="315"
                  src="https://www.youtube.com/embed/k1RI5locZE4"
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
                  src="https://www.youtube.com/embed/SOTamWNgDKc"
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
                  src="https://www.youtube.com/embed/uQdzcIf_KII"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div id="resources">
            <div className="math float para ">
              <h4 className="header hl">
                More Resources To Learn Cloud Computing:
              </h4>
              <div className="para">
                <hr className="one" />
              </div>
              <div className="float sklearn">
                <a href="https://aws.amazon.com/training/">
                  <li className="sklearn">
                    Amazon AWS Training and Certification
                  </li>
                </a>
                <a href="https://www.udemy.com/topic/cloud-computing/">
                  <li className="sklearn"> Udemy Courses </li>
                </a>
                <a href="https://www.coursera.org/browse/information-technology/cloud-computing">
                  <li className="sklearn"> Course-era Courses</li>
                </a>
                <a href="https://www.edx.org/course/aws-cloud-practitioner-essentials?index=product&queryID=1101396d2ec1acf6634402cfa9dfbf3c&position=2">
                  <li className="sklearn">
                    {" "}
                    Edx AWS Cloud Practitioner Essentials
                  </li>
                </a>

                <a href="https://cloudacademy.com/product/courses/">
                  <li className="sklearn">
                    {" "}
                    CLOUD ACADEMY - Cloud Training Courses
                  </li>
                </a>
                <a href="https://acloudguru.com/">
                  <li className="sklearn">
                    {" "}
                    CLOUD GURU -Complete Cloud Training Courses
                  </li>
                </a>
              </div>
            </div>
          </div>
          <h4 className="header">Complete Playlist for Cloud Computing...</h4>
          <div className="para">
            <hr className="one" />
          </div>
          <div className="youtubeflex" id="playlist">
            <div className="ytl">
              <iframe
                width="315"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLOE1GTZ5ouRPbpTnrZ3Wqjamfwn_Q5Y9A"
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
                src="https://www.youtube.com/embed/videoseries?list=PLPIwNooIb9vhYroMrNpoBYiBUFzTwEZot"
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
                src="https://www.youtube.com/embed/videoseries?list=PLJS09IaRQH1IKuwHy1e4V43nLjzLYruvD"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          {/* ENd the code */}
        </div>
      </div>
    );
  }
}
