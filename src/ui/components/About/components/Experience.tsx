import { useEffect, useRef, useState } from "react";
import { FaCode } from "react-icons/fa";
import ModalComponent from "./Modal";

type Props = {
  title: string;
  typeProject: string;
  techList?: string[]
};

const ExperienceComponent = ({ title, typeProject,techList }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handlUsedTech = () => {
    setOpenModal(true);
    console.log("Desde el experienceComponent: ",openModal)
  };


  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(modalRef.current && !modalRef.current.contains(event.target as Node)){
        closeModal();
      }
    }

    if(openModal){
      document.addEventListener("mousedown", handleClickOutside);
    }else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return() =>{
      document.removeEventListener("mousedown", handleClickOutside);
    }

  })

  return (
    <>
    <div className="ExperienceContainer">
      <div className="ItemsContainer">
        <h3 className="SubtitleAbout">{title}</h3>
        <button className="MoreInfo" onClick={handlUsedTech}>Used tech</button>
      </div>
      <div className="AnotherInfoContainer">
        <FaCode size={20} />
        <p style={{ marginLeft: 20 }}>{typeProject}</p>
      </div>
    </div>
    {openModal && (
        <ModalComponent techList={techList} close={closeModal} modalRef={modalRef}/>
    ) }
    </>
  );
};

export default ExperienceComponent;
