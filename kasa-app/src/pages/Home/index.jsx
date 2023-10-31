import Cards from "../../components/Cards";
import bannerHome from "../../assets/home-background.png";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAppartments } from "../../hooks/useAppartments";
import styles from "../../components/Cards/cards.module.scss";
import body from "../../index.module.scss";

function Home() {
  const { appartments } = useAppartments();
  return (
    <>
      <div className={body.bodyContainer}>
        <Header />
        <Banner
          imgSrc={bannerHome}
          title={"Chez vous,\n partout et ailleurs"}
        />
        <div className={styles.cardContainer}>
          {appartments.map((appartment) => (
            <Cards appartment={appartment} key={appartment.id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
