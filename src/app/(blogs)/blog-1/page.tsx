import Image from "next/image";
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from "components/blocks/footer";
import Navbar from "components/blocks/navbar/navbar-1";
import Carousel from "components/reuseable/Carousel";
import VideoPlyr from "components/reuseable/VideoPlyr";
import Pagination from "components/reuseable/Pagination";
import NextLink from "components/reuseable/links/NextLink";
import { BlogCard2, BlogCard3 } from "components/reuseable/blog-cards";
// CUSTOM DATA
import { blogs } from "./data";
// IMPORT IMAGES
import blogOneImage from "../../../../public/img/photos/b1.jpg";
import blogTwoImage from "../../../../public/img/photos/b2.jpg";
import blogThreeImage from "../../../../public/img/photos/b3.jpg";
import Link from "next/link";

export default function BlogOne() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar search button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
                <h1 className="display-1 mb-3">공지사항</h1>
                <p className="lead px-lg-5 px-xxl-8">
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog classic-view mt-n17">
                  <BlogCard2
                    link="#"
                    category="공지사항"
                    title="2024년 09월 봉사 관련되어 공지 남깁니다."
                    description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur."
                    cardTop={
                      <figure className="card-img-top overlay overlay-1 hover-scale">
                        <a className="link-dark" href="#">
                          <Image alt="blog" src={blogOneImage} />
                          <span className="bg" />
                        </a>

                        <figcaption>
                          <h5 className="from-top mb-0">Read More</h5>
                        </figcaption>
                      </figure>
                    }
                  />

<BlogCard2
                    link="#"
                    category="공지사항"
                    title="2024년 09월 봉사 관련되어 공지 남깁니다."
                    description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur."
                    cardTop={
                      <figure className="card-img-top overlay overlay-1 hover-scale">
                        <a className="link-dark" href="#">
                          <Image alt="blog" src={blogOneImage} />
                          <span className="bg" />
                        </a>

                        <figcaption>
                          <h5 className="from-top mb-0">Read More</h5>
                        </figcaption>
                      </figure>
                    }
                  />

<BlogCard2
                    link="#"
                    category="공지사항"
                    title="2024년 09월 봉사 관련되어 공지 남깁니다."
                    description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur."
                    cardTop={
                      <figure className="card-img-top overlay overlay-1 hover-scale">
                        <a className="link-dark" href="#">
                          <Image alt="blog" src={blogOneImage} />
                          <span className="bg" />
                        </a>

                        <figcaption>
                          <h5 className="from-top mb-0">Read More</h5>
                        </figcaption>
                      </figure>
                    }
                  />
                  

                  
                </div>

                

                {/* ========== pagination section ========== */}
                {/* <Pagination className="justify-content-start" /> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
