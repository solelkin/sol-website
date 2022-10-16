import Layout from '../components/layout';

export default function Index() {
  return (
    <>
      <video className="video" playsInline autoPlay muted loop>
        <source src="/meboSlide.mp4" type="video/mp4" />
      </video>
      <Layout pageTitle="Sol Elkin">
        <a href="https://github.com/pmndrs">
          <h1>Sol Elkin</h1>
        </a>
      </Layout>
    </>
  );
}
