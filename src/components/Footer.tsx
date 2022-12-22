const Footer = () => {
  return (
    <div className="bottom-0 w-full pt-36 dark:bg-c1">
      <div className="flex justify-between max-w-5xl pt-16 pb-8 mx-auto ml-8 mr-8 l md:pt-14 md:pb-10 dark:md:bg-c1 font-DmSans md:mx-auto md:flex-row md:justify-around ">
        <div className="flex flex-col mb-4 ">
          <h2 className="pb-2 text-xl font-semibold dark:text-c9 ">Services</h2>
          <a
            className="font-medium text-md md:text-base dark:text-c5 text-c3"
            href="/hotel"
          >
            Travel Booking
          </a>
          <a
            className="font-medium text-md md:text-base dark:text-c5 text-c3"
            href="/flight"
          >
            Flight Booking
          </a>
          <a
            className="font-medium text-md md:text-base dark:text-c5 text-c3"
            href="/"
          >
            Car Booking
          </a>
          <a
            className="font-medium text-md md:text-base dark:text-c5 text-c3"
            href="/"
          >
            Fivestar Hotel
          </a>
          <a
            className="font-medium text-md md:text-base dark:text-c5 text-c3"
            href="/"
          >
            Traveling
          </a>
        </div>
        <div className="flex flex-col mb-4 ">
          <h2 className="pb-2 text-xl font-semibold dark:text-c9 ">Support</h2>
          <a
            className="font-medium text-md text md:base dark:text-c5 text-c3"
            href="/"
          >
            Account
          </a>
          <a
            className="font-medium text-md md:text-base dark:text-c5 text-c3"
            href="/"
          >
            Legal
          </a>
          <a
            className="font-medium text-md md:text-base dark:text-c5 text-c3"
            href="/"
          >
            Contact
          </a>
          <a
            className="font-medium text-md md:text-base dark:text-c5 text-c3"
            href="/"
          >
            Terms & Condition
          </a>
          <a
            className="font-medium text-md md:text-base dark:text-c5 text-c3"
            href="/"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col mb-4">
          <h2 className="pb-2 text-xl font-semibold dark:text-c9 ">Business</h2>
          <a
            className="font-medium text-md md:text-base dark:text-c5 text-c3"
            href="/"
          >
            Success
          </a>
          <a
            className="font-medium text-md md:text-base dark:text-c5 text-c3"
            href="/"
          >
            About Locato
          </a>
          <a
            className="font-medium text-md md:text-base dark:text-c5 text-c3"
            href="/"
          >
            Blog
          </a>
          <a
            className="font-medium text-md md:text-base dark:text-c5 text-c3"
            href="/"
          >
            Information
          </a>
          <a
            className="font-medium text-md md:text-base dark:text-c5 text-c3"
            href="/"
          >
            Travel guide
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
