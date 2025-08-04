import React from 'react';

const BlogArea = () => {
  const blogPosts = [
    {
      id: 1,
      image: "./images/ourfleet/2.jpg",
      author: "Vedant Travels",
      date: "February 23, 2023",
      title: "Pune to Mumbai Cab",
      Para: "Vedant Travels offers a smooth and comfortable ride from Pune to Mumbai. Our fleet of well-maintained vehicles and experienced drivers ensure a hassle-free journey with safety and punctuality, making your trip enjoyable and stress-free.",
      link: "/booking"
    },
    {
      id: 2,
      image: "./images/ourfleet/5.jpg",
      author: "Vedant Travels",
      date: "February 23, 2023",
      title: "Mumbai Airport to Pune  Cab",
      Para: "Vedant Travels offers reliable and convenient cab services from Mumbai Airport to Pune City. Our experienced drivers and well-maintained vehicles ensure a safe and comfortable ride, getting you to your destination quickly and efficiently.",
      link: "/booking"
    },
    {
      id: 3,
      image: "./images/ourfleet/3.jpg",
      author: "Vedant Travels",
      date: "February 23, 2023",
      title: "Mumbai to Pune Cabs",
      Para: "Travel from Mumbai to Pune with ease with Vedant Travels. Enjoy a smooth, comfortable, and affordable ride with our fleet of well-maintained cars. We offer timely service, ensuring you reach your destination safely and on time.",
      link: "/booking"
    }
  ];
  
  

  return (
    <div className="blog-area pt-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <i className="flaticon-drive"></i> Our Blog
              </span>
              <h2 className="site-title">Latest News & Blog</h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-md-6 col-lg-4" key={post.id}>
              <div
                className={`blog-item wow fadeInUp`}
                data-wow-delay={`${0.25 * (index + 1)}s`}
              >
                <div className="blog-item-img">
                  <img src={post.image} alt="Thumb" />
                </div>
                <div className="blog-item-info">
                  <div className="blog-item-meta">
                    <ul>
                      <li>
                        <a href="#" className='text-white'>
                          <i className="far fa-user-circle "></i> By {post.author}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-title">
                    <a>{post.title}</a>
                  </h4>
                  <p>
                {post.Para}
                  </p>
                  <a className="theme-btn" href={post.link}>
                    Book Now 
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
