import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import { FiArrowRightCircle, FiLayers , FiDatabase} from "react-icons/fi";
import Img from "gatsby-image";

const chooseusdata = [
    {
        "id": "choose-us-1",
        "icon": <FiArrowRightCircle />,
        "title": "Fully Responsible",
        "description": "We take the Full resposibility of our client's project and provide revisions until the client is satisfied."
    },
    {
        "id": "choose-us-2",
        "icon": <FiLayers />,
        "title": "Eye Catching Design",
        "description": "We not only focus on the functionality of the application but also create Eye Catching look of the application."
    },
    {
        "id": "choose-us-3",
        "icon": <FiDatabase />,
        "title": "Clean Code",
        "description": "We try to optimize our client's project and do our best to keep the code clean and modern, easy to revise in future."
    }
]

const Chooseus = () => {
    const chooseusQueryData = useStaticQuery(graphql`
        query chooseusQueryQuery {
            homedefaultJson(id: {eq: "chooseus"}) {
                imagegroup {
                    image {
                        childImageSharp {
                            fluid(maxHeight: 500, maxWidth: 600, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                                presentationHeight
                                presentationWidth
                            }
                        }
                    }
                }
            }
        }
    `)
    const ChooseusImage = chooseusQueryData.homedefaultJson.imagegroup;
    return (
        <div className="rn-choose-us-area choose-us-style-01 rn-section-gap bg-color-extra03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="image-group">
                            {ChooseusImage.map((data, index) => (
                                <div className="single-image" key={index}>
                                    <Img fluid={data.image.childImageSharp.fluid} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt_sm--30">
                        <div className="inner">
                            <div className="feature-list-inner">
                                {chooseusdata.map((data, index) => (
                                    <div className="feature-list" key={index}>
                                        <div className="feature-icon">
                                            <i className="icon">{data.icon}</i>
                                        </div>
                                        <div className="feature-content">
                                            <h4 className="title">{data.title}</h4>
                                            <p className="description">{data.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>  
                        </div>  
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Chooseus;
