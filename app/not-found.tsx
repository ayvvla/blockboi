import React from "react";

const NotFound = () => {
  return (
    <section className="mx-10 py-5 bg-white h-[100vh] ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg h-[400px] ">
                <h1 className="text-center text-5xl font-bold">404</h1>
              </div>
              <div className="-mt-12">
                <h3 className="text-xl font-semibold">
                  Looks like you're lost
                </h3>

                <p>the page you are looking for not available!</p>

                <a href="/" className="px-3 py-6 mt-5 inline-block">
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
