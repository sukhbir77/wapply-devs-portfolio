import React from 'react';
import { FiMonitor, FiActivity, FiNavigation } from "react-icons/fi";

import { DiAndroid } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di"
import { DiCss3Full } from "react-icons/di"

import { SiApple } from "react-icons/si";
import { SiFlutter } from "react-icons/si"

import { GrHtml5 } from "react-icons/gr";
import { GrReactjs } from "react-icons/gr"

import { FaJava } from "react-icons/fa"
import {FaTabletAlt} from "react-icons/fa"

import { SiKotlin } from "react-icons/si"
import {SiAndroidstudio} from "react-icons/si"
 
const Service = () => {
    return (
        <div className="rn-service-area rn-section-gapBottom">
            {/* Start Service Area  */}
            <div className="rn-service-area">
                <div className="container">
                    <div className="row">

                        {/* Start Single Service  */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="service wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                                <div className="inner">
                                    <div className="icon">
                                        <FiMonitor />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Web Development</h4>
                                        <p>We develop static as well as dynamic websites according to the requirements of the client.</p>
                                        <div className="icon">
                                            <GrHtml5 /> <DiCss3Full style = {{marginLeft: 25}}/> <DiJavascript1  style = {{marginLeft: 25}}/> <GrReactjs  style = {{marginLeft: 25}}/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Service  */}

                        {/* Start Single Service  */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="service wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                                <div className="inner">
                                    <div className="icon">
                                        <DiAndroid />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Android Applications</h4>
                                        <p>We develop Android Applications in pure Java or Kotlin or Flutter as per project's requirements.</p>
                                        <div class="icon">
                                            <FaJava />             <SiFlutter style = {{marginLeft: 30}}/>          <SiKotlin  style = {{marginLeft: 50}}/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* End Single Service  */}

                        {/* Start Single Service  */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="service wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                                <div className="inner">
                                    <div className="icon">
                                        <SiApple />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">iOS Applications</h4>
                                        <p>We develop iOS Applications for iPhones as well as iPads using Android Studio and Flutter.</p>
                                        <div class="icon">
                                            <SiAndroidstudio /> <SiFlutter style = {{marginLeft: 30}}/> <FaTabletAlt style = {{marginLeft: 30}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Service  */}

                    </div>
                </div>
            </div>
            {/* End Service Area  */}

        </div>
    )
}

export default Service;