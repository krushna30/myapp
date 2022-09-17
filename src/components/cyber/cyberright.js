import React, { Component } from "react";
import "./cyber.css";
import Cyberroles from "./cyberroles.png";
import Cyberskills from "./cyberskills.jpg";
//import Cybersecurity from "./cyber3.jpg";
export default class cyberright extends Component {
  render() {
    return (
      <div className="intro">
        <div className="right">
          <div id="1">
            <h4 className="header">What Is Cybersecurity?</h4>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float">
              Cybersecurity is the practice of protecting systems, networks, and
              programs from digital attacks. These cyberattacks are usually
              aimed at accessing, changing, or destroying sensitive information;
              extorting money from users; or interrupting normal business
              processes. Implementing effective cybersecurity measures is
              particularly challenging today because there are more devices than
              people, and attackers are becoming more innovative.
              <br />
              The term applies in a variety of contexts, from business to mobile
              computing, and can be divided into a few common categories.
              <br />
              <p className="float">
                <li>
                  {" "}
                  <span className="hl"> Network security</span> is the practice
                  of securing a computer network from intruders, whether
                  targeted attackers or opportunistic malware
                </li>
                <li>
                  {" "}
                  <span className="hl">Application security </span>focuses on
                  keeping software and devices free of threats. A compromised
                  application could provide access to the data its designed to
                  protect. Successful security begins in the design stage, well
                  before a program or device is deployed
                </li>

                <li>
                  {" "}
                  <span className="hl">Information security</span> protects the
                  integrity and privacy of data, both in storage and in transit.
                </li>

                <li>
                  {" "}
                  <span className="hl">Operational security</span> includes the
                  processes and decisions for handling and protecting data
                  assets. The permissions users have when accessing a network
                  and the procedures that determine how and where data may be
                  stored or shared all fall under this umbrella
                </li>

                <li>
                  <span className="hl">
                    Disaster recovery and business continuity{" "}
                  </span>
                  define how an organization responds to a cyber-security
                  incident or any other event that causes the loss of operations
                  or data. Disaster recovery policies dictate how the
                  organization restores its operations and information to return
                  to the same operating capacity as before the event
                </li>
                <li>
                  <span className="hl">End-user education </span>addresses the
                  most unpredictable cyber-security factor: people. Anyone can
                  accidentally introduce a virus to an otherwise secure system
                  by failing to follow good security practices.
                </li>
              </p>
            </p>
          </div>
          <div id="2">
            <h4 className="header">What is cybersecurity all about?</h4>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float">
              A successful cybersecurity approach has multiple layers of
              protection spread across the computers, networks, programs, or
              data that one intends to keep safe. In an organization, the
              people, processes, and technology must all complement one another
              to create an effective defense from cyber attacks. A unified
              threat management system can automate integrations across select
              Cisco Security products and accelerate key security operations
              functions: detection, investigation, and remediation.
              <br />
              <p className="float">
                <li>
                  {" "}
                  <span className="hl">People</span> Users must understand and
                  comply with basic data security principles like choosing
                  strong passwords, being wary of attachments in email, and
                  backing up data. Learn more about basic cybersecurity
                  principles.
                </li>
                <li>
                  {" "}
                  <span className="hl">Processes </span>Organizations must have
                  a framework for how they deal with both attempted and
                  successful cyber attacks. One well-respected framework can
                  guide you. It explains how you can identify attacks, protect
                  systems, detect and respond to threats, and recover from
                  successful attacks. Watch a video explanation of the NIST
                  cybersecurity framework
                </li>

                <li>
                  {" "}
                  <span className="hl">Technology</span> Technology is essential
                  to giving organizations and individuals the computer security
                  tools needed to protect themselves from cyber attacks. Three
                  main entities must be protected: endpoint devices like
                  computers, smart devices, and routers; networks; and the
                  cloud. Common technology used to protect these entities
                  include next-generation firewalls, DNS filtering, malware
                  protection, antivirus software, and email security solutions
                </li>

                <li>
                  {" "}
                  <span className="hl">Operational security</span> includes the
                  processes and decisions for handling and protecting data
                  assets. The permissions users have when accessing a network
                  and the procedures that determine how and where data may be
                  stored or shared all fall under this umbrella
                </li>
              </p>
            </p>
          </div>

          <div id="3">
            <h4 className="header">Why is cybersecurity important?</h4>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float">
              In today’s connected world, everyone benefits from advanced
              cyberdefense programs. At an individual level, a cybersecurity
              attack can result in everything from identity theft, to extortion
              attempts, to the loss of important data like family photos.
              Everyone relies on critical infrastructure like power plants,
              hospitals, and financial service companies. Securing these and
              other organizations is essential to keeping our society
              functioning. Everyone also benefits from the work of cyberthreat
              researchers, like the team of 250 threat researchers at Talos, who
              investigate new and emerging threats and cyber attack strategies.
              They reveal new vulnerabilities, educate the public on the
              importance of cybersecurity, and strengthen open source tools.
              Their work makes the Internet safer for everyone.
            </p>
          </div>

          <div id="4">
            <h4 className="header">Cyber Security Qualifications</h4>
            <div className="para">
              <hr className="one" />
            </div>
            {/* <img className="end" src={diff} alt="domains" /> */}
            <p className="float">
              <img className="last" src={Cyberroles} />
              Although in some cases it is possible to move across from other IT
              roles into a cyber security position, this is becoming more
              difficult as cyber security careers increase in popularity. If
              you’re interested in a cyber security career, one of the following
              degree subjects will help you along the career path:
              <br />
              <div className="list">
                <li>IT</li>
                <li>Cyber security</li>
                <li>Computer science</li>
                <li>Forensic computing</li>
                <li>Network engineering</li>
                <li>Networks and security</li>
                <li>Mathematics, physics or other STEM subjects</li>
              </div>
              <br />
              <li>
                {" "}
                <span className="hl">
                  Certified Information Systems Security Professional (CISSP)
                </span>
                <br /> includes the processes and decisions for handling and
                protecting data assets. The permissions users have when
                accessing a network and the procedures that determine how and
                where data may be stored or shared all fall under this umbrella
              </li>
              <li>
                {" "}
                <span className="hl">
                  Systems Security Certified Practitioner (SSCP)
                </span>
                <br />
                To gain the SSCP qualification, individuals will need to have a
                comprehensive, up-to-date knowledge of all the skills and
                information required to thrive in this industry, with modules
                covering topics such as risk identification and cryptography.
                Finally, those studying for the SSCP will be assessed by a
                three-hour exam
              </li>
              <li>
                {" "}
                <span className="hl">
                  Certified Information Security Manager (CISM)
                </span>
                <br />A qualification for professionals with at least five
                years’ experience working in the industry, the CISM
                certification is a great way to further your career. You must
                have completed the required five years of work experience, which
                includes at least three years in an information security
                management position, before you obtain the qualification. To
                receive the accreditation, you must have completed your work
                experience within 10 years’ prior to submitting the application.
              </li>
            </p>
          </div>
          <div id="skills">
            <h4 className="header">
              Skills needed for a career in cyber security
            </h4>
            <div className="para">
              <hr className="one" />
            </div>
            {/* <img className="end" src={diff} alt="domains" /> */}
            <p className="float">
              <img className="last" src={Cyberskills} />
              Not sure if you’re cut out for a career in cyber security? Well,
              if your interest is sparked by the idea of becoming an information
              security analyst, penetration tester or a computer forensics
              investigator, you may already possess a few skills crucial for one
              of these roles. A competent information security professional will
              need:
              <br />
              <div className="list">
                <li>
                  Strong analytical skills and a keen eye for spotting trends in
                  data
                </li>
                <li>
                  The ability to make decisions with confidence and show
                  initiative
                </li>
                <li>
                  To be able to work effectively under pressure and meet tight
                  deadlines
                </li>
                <li>
                  Have a keen attention to detail and work in a logical and
                  objective fashion
                </li>
                <li>To be well organised and able to manage their own time</li>
                <li>
                  The ability to work creatively and think outside of the box
                </li>
                <li>
                  To have a clear understanding of confidentiality issues and
                  relating laws
                </li>
                <li>
                  An inquisitive nature and a keen interest in the IT sector
                </li>
              </div>
              <br />
            </p>
          </div>
          <div id="choice">
            <h4 className="header">
              What Types of Cybersecurity Can You Choose From?
            </h4>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float">
              To make a sound judgment about which cybersecurity package to
              choose, it is important to familiarise yourself with the different
              types that are available at your disposal. Here is a list of the
              types of cybersecurity to consider:
              <br />
              <li>
                {" "}
                <span className="hl">Critical Infrastructure Security</span>
                <br />
                You will find this type in applications such as electricity grid
                or water purification systems that contain cyber-physical
                systems.
              </li>
              <li>
                {" "}
                <span className="hl">Network Security </span>
                <br />
                This one is designed to protect internal networks like a
                two-factor authentication process from intruders. This is done
                by securing the infrastructure behind the design.
              </li>
              <li>
                {" "}
                <span className="hl">Application Security </span>
                <br />
                During the development stage of an application, it may be
                exposed to external threats. As found in an antivirus program or
                a firewall, this cybersecurity type uses both hardware and
                software to fight the threats.
              </li>
              <li>
                {" "}
                <span className="hl">Information Security </span>
                <br />
                This is used to protect any kind of data, whether online or
                offline. Also known as InfoSec, this cybersecurity type protects
                data from unauthorized access, deletion, disclosure, or any
                other form of malintent.
              </li>
              <li>
                {" "}
                <span className="hl">Cloud Security </span>
                <br />
                Your data stored on the cloud is always at risk of on-premise
                threats. You can use cloud security, which is a software-based
                tool, to prevent data corruption.
              </li>
              <li>
                {" "}
                <span className="hl">Data Loss Prevention </span>
                <br />
                This mainly concerns itself with the processes and policies for
                preventing loss of data. This includes network permissions and
                data storage policies.
              </li>
              <li>
                {" "}
                <span className="hl">End-user Education </span>
                <br />
                This involves educating the end-users or the general masses to
                follow best practices while using the cyberworld.
              </li>
            </p>
          </div>
          <div id="resources">
            <h4 className="header">
              Websites for Online Cyber Security Resources
            </h4>
            <div className="para">
              <hr className="one" />
            </div>
            <p className="float sklearn">
              <a href=" https://www.cybrary.it/">
                <li className="sklearn"> Learn Cyber Security from Cybrary</li>
              </a>
              <a href=" http://opensecuritytraining.info/HTID.html">
                <li className="sklearn">
                  OpenSecurity Training for Cyber Security
                </li>
              </a>
              <a href="https://www.notsosecure.com/hacking-training-classes/">
                <li className="sklearn">
                  {" "}
                  Training in penetration Testing and Hacking
                </li>
              </a>
              <a href="http://www.cyberaces.org/">
                <li className="sklearn">SANS Cyber Aces Online</li>
              </a>

              <a href="https://www.hackthebox.com/">
                <li className="sklearn"> Hack the Box offered Courses</li>
              </a>
              <h4 className="header">Youtube Playlists for Begginers:</h4>
              <div className="para">
                {" "}
                <hr className="one" />
              </div>
              <div className="youtubeflex">
                <div className="ytl">
                  <iframe
                    width="315"
                    height="315"
                    src="https://www.youtube.com/embed/mS7qWC3CbOU"
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
                    src="https://www.youtube.com/embed/fd0L1IousZU"
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
                    src="https://www.youtube.com/embed/U_P23SqJaDc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <h4 className="header">
                Youtube Playlists for FULL CYBER SECURITY COURSE
              </h4>
              <div className="para">
                {" "}
                <hr className="one" />
              </div>
              <div className="para">(Visit youtube for complete Playlist)</div>
              <div className="youtubeflex">
                <div className="ytl">
                  <iframe
                    width="315"
                    height="315"
                    src="https://www.youtube.com/embed/nzZkKoREEGo"
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
                    src="https://www.youtube.com/embed/3Kq1MIfTWCE"
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
                    src="https://www.youtube.com/embed/videoseries?list=PLEiEAq2VkUUJfPOj5nRounXvf3n17PCft"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
