const AboutPage = () => {
  return (
    <>
      <h3>
        Hi, my name is Bharat kasera from Rajasthan, India. I'm a web developer
        and UI/UX Designer. with a Bachelors. My top priority is to get your
        business online the right way, giving you industry-standard design and
        all the functionality you need to operate smoothly online. Get in touch
        today with the details of your project let's get started!{" "}
      </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
