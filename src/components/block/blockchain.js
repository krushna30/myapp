import React, { Component } from "react";
import Blockslider from "./blockslider";
import Footer from "../home/footer";
import history from "./block7.png";
import work from "./block12.jpg";
import "./blockchain.css";
import roadmap from "./blockroadmap.png";

import "../ml/ml.css";
import "../web/webslider.css";
export default class blockchain extends Component {
  render() {
    return (
      <div className="intro">
        <div className="topmargin">
          <Blockslider />
        </div>
        <div className="intro">
          <div id="understand">
            <img className="roadmap" src={roadmap} alt="roadmap" />
            <h4 className="header">Let's Understand Blockchain Technology !</h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>

            <p className="float">
              - Blockchain technology is a structure that stores transactional
              records, also known as the block, of the public in several
              databases, known as the “chain,” in a network connected through
              peer-to-peer nodes. Typically, this storage is referred to as a
              ‘digital ledger.’.Blockchain is a system of recording information
              in a way that makes It difficult or impossible to change,hack,or
              cheat thesystem. A blockchain is essentially a digital ledger of
              transactions that is dup- Licated and distributed across the
              entire network of computer system on the blockchain.
            </p>
            <br />
            <p className="float">
              -Blockchain sometimes referred to as distributed ledger
              technology(DLT) Makes the history of any digital asset unalterable
              and transparent through The use of decentralization and
              cryptographic hashing Blockchain is a decentralised ledger of all
              transactions across a peer-to- peer network. Using this technology
              ,participants can perform transactions without the need for a
              central certifying authority. potential application Include fund
              transfers,setting trades,voting and many others
            </p>
          </div>
          <div className="para">
            {" "}
            <hr className="one" />
          </div>

          <div id="his">
            <img className="history" src={history} alt="history" />

            <h4 className="header">THE HISTORY OF BLOCKCHAIN TECHNOLOGY </h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <p className=" float para ">
              The blockchain technology was described in 1991 by the research
              scientist Stuart Haber and W. Scott Stornetta. They wanted to
              introduce a computationally practical solution for time-stamping
              digital documents so that they could not be backdated or tampered
              <br />
              Further, in 2008, Satoshi Nakamoto conceptualized the theory of
              distributed blockchains. He improves the design in a unique way to
              add blocks to the initial chain without requiring them to be
              signed by trusted parties. The modified trees would contain a
              secure history of data exchanges. It utilizes a peer-to-peer
              network for timestamping and verifying each exchange. It could be
              managed autonomously without requiring a central authority. These
              improvements were so beneficial that makes blockchains as the
              backbone of cryptocurrencies. Today, the design serves as the
              public ledger for all transactions in the cryptocurrency space.
            </p>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
          </div>

          <div id="brief">
            <img className="work" src={work} alt="work" />
            <h4 className="briefh header">
              A Brief Look at Blockchain Developers
            </h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <p className="float para">
              {" "}
              Today blockchain applications transforming the world of
              technology. Blockchain developers handle the entire life cycle of
              a blockchain application. This means you’ll be responsible for the
              research as well as the execution of the application. They create
              the architecture of the system, make smart contracts, and optimize
              the protocols. As you must’ve guessed by now, they handle a lot of
              responsibilities, and that’s why they need to learn many
              blockchain skills to answer all the challenges in blockchain
              development. There are other professionals, too, who help a
              blockchain developer in their tasks, such as a blockchain
              engineer.
            </p>
          </div>

          <div id="types">
            <h4 className="header"> Types of Blockchain Developers </h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <h4 className="para">Blockchain developers are of two kinds:</h4>
            <h4>
              <li className=" li para">Blockchain software developer</li>
            </h4>
            <p className="subpara float para">
              Blockchain software developers create Dapps or decentralized
              applications. They are responsible for the front-end as well as
              back-end development of Dapps. They also supervise the stack that
              runs the Dapps
            </p>
            <h4>
              {" "}
              <li className="li para"> Core blockchain developer </li>
            </h4>
            <p className=" float ">
              These developers focus on the architecture development of a
              blockchain system. They design their consensus protocol and make
              most of the vital decisions related to blockchain. They supervise
              the network and design the architecture of the same. Core
              blockchain developers are responsible for the security of their
              blockchain network as well.
            </p>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
          </div>

          <div id="resources">
            <h4 className=" header">The Study Material For Blockchain :-</h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <li className="li para">Youtube Playlists For Beginners</li>
            <li className="para">Roadmap</li>
            <div className="youtubeflex">
              <div className="ytl">
                <div>
                  <iframe
                    width="360"
                    height="315"
                    src="https://www.youtube.com/embed/djgtWqkZE84"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="ytl ">
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/QCvL-DWcojc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="ytr">
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/VU59tR982W4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <li className="li para"> YouTube Playlists For Intermediate</li>
            <div className="youtubeflex">
              <div className="ytl">
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/M576WGiDBdQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="ytr">
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/mzPoUjQC4WU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div id="applications" className="float">
            <h4 className=" header">
              13 PROMINENT BLOCKCHAIN APPLICATIONS TO KNOW
            </h4>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
            <ol>
              <li className="subpara">Secure sharing of medical data</li>
              <li className="subpara">NFT marketplaces</li>
              <li className="subpara">Music royalties tracking </li>
              <li className="subpara">Cross-border payments</li>
              <li className="subpara">Real-time IoT operating systems</li>
              <li className="subpara">Personal identity security</li>
              <li className="subpara">Anti-money laundering tracking system</li>
              <li className="subpara">Supply chain and logistics monitoring</li>
              <li className="subpara">Voting mechanism</li>
              <li className="subpara">Advertising insights</li>
              <li className="subpara">Cryptocurrency exchange</li>
              <li className="subpara">Original content creation</li>
              <li className="subpara">Real estate processing platform</li>
            </ol>
            <div className="para">
              {" "}
              <hr className="one" />
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
