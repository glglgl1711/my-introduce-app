'use client'
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Link from "next/link";
import Image from "next/image";
import { Footer8 } from "components/blocks/footer";
import Navbar from "components/blocks/navbar/navbar-1";
import { Portfolio1 } from "components/blocks/portfolio";
import NextLink from "components/reuseable/links/NextLink";
import ProjectDetailsContent from "components/common/ProjectDetailsContent";
import ProjectDetailsNavigation from "components/common/ProjectDetailsNavigation";
import useIsotope from "hooks/useIsotope";
import { filterItems, projectList } from "./data";

export default function ProjectDetails() {
  const { handleFilterKeyChange, filterKey } = useIsotope();
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark"
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-white rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== heading section ========== */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay text-white"
          style={{ backgroundImage: "url(/img/photos/bg6.jpg)" }}>
          <div className="container pt-17 pb-12 pt-md-19 pb-md-16 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line text-white">
                    <NextLink title="Identity" href="#" className="text-reset" />
                  </div>

                  <h1 className="display-1 mb-3 text-white">Commodo Dolor Bibendum Parturient Cursus Mollis</h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                    Integer posuere erat a ante venenatis dapibus posuere. Maecenas faucibus mollis interdum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="grid grid-view projects-masonry">
              {/* ========== filter section ========== */}

              {/* ========== projects section ========== */}
              <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                {projectList.map(({ id, image, title, category, color, link, type }) => (
                  <>
                  <div key={id} className={`project item col-md-6 col-xl-4 ${type}`}>
                    <Link href={link}>
                      <figure className="lift rounded mb-6">
                        <Image
                          alt={title}
                          src={image.url}
                          width={image.width}
                          height={image.height}
                          className="w-100 h-auto"
                        />
                      </figure>
                    </Link>

                    <div className="project-details d-flex justify-content-center flex-column">
                      <div className="post-header">
                        <div className={`post-category text-line mb-3 text-${color}`}>2024.09.06</div>
                        <h2 className="post-title h3">인천 유치원 봉사 활동</h2>
                      </div>
                    </div>
                  </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== navigation section ========== */}
        <ProjectDetailsNavigation />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
