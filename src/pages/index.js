import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BannerParticles from "../components/homedefault/bannerParticles";
import About from "../components/homedefault/about";
import Project from "../components/homedefault/project";
import Service from "../components/homedefault/service";
import Contact from "../elements/contact/contact";
import Chooseus from "../components/homedefault/chooseus";

const IndexPage = () => (
  <Layout>
    <SEO title="Wapply Developers" />
    <BannerParticles />
    <About />
    <Service />
    <Chooseus />
    <div className="portfolio-id" id="portfolio">
      <Project />
    </div>
    <Contact />
  </Layout>
)
export default IndexPage;