import { useParams } from "react-router-dom";
import { useAppartment } from "../../hooks/useAppartment";
import { Collapse } from "../../components/Collapse";
import Header from "../../components/Header";
import Rating from "../../components/Rating";
import styled from "../Appartment/appartment.module.scss";
import Slideshow from "../../components/Slideshow";
import Footer from "../../components/Footer";
import body from "../../index.module.scss";

export const Appartment = () => {
  const { id } = useParams();
  const { appartment } = useAppartment(id);
  if (!appartment) {
    return null;
  }
  return (
    <>
      <div className={body.bodyContainer}>
        <Header />
        <Slideshow slides={appartment.pictures} />

        <section className={styled.apptInfosContainer}>
          <div className={styled.apptInfos}>
            <div className={styled.apptTitle}>
              <h1 className={styled.apptName}>{appartment.title}</h1>
              <p className={styled.location}>{appartment.location}</p>
            </div>
            <div className={styled.apptTagsContainer}>
              {appartment.tags.map((tags, index) => {
                return (
                  <p className={styled.tags} key={index}>
                    {tags}
                  </p>
                );
              })}
            </div>
          </div>

          <div className={styled.hostInfosContainer}>
            <div className={styled.hostInfos}>
              <p className={styled.hostName}>{appartment.host.name}</p>
              <img
                className={styled.hostPicture}
                src={appartment && appartment.host.picture}
                alt={appartment && appartment.host.name}
              />
            </div>
            <Rating score={appartment && appartment.rating} />
          </div>
        </section>

        <section className={styled.collapseContainer}>
          <Collapse title={"Description"}>
            <p className={styled.collapseTxt}>{appartment.description}</p>
          </Collapse>

          <Collapse title={"Equipements"} className={styled.equipmentsCollapse}>
            <ul className={styled.equipList}>
              {appartment.equipments.map((equip, index) => {
                return (
                  <li className={styled.collapseTxt} key={index}>
                    {equip}
                  </li>
                );
              })}
            </ul>
          </Collapse>
        </section>
      </div>
      <Footer className={styled.footer} />
    </>
  );
};

export default Appartment;
