type Props = {
  techList?: string[];
  close: () => void;
  modalRef: any
};

const ModalComponent = ({ techList, close, modalRef}: Props) => {
  return (
    // <div className="Modal">
    //   <h2>Used Technologies</h2>
    //   <ul>
    //     {techList?.map((tech, index) => (
    //       <li key={index}>{tech}</li>
    //     ))}
    //   </ul>
    // </div>

    <div className="ModalContainer">
      <div className="ModalContainer--info" ref={modalRef}>
        <h2 className="TitleModal">Technologies i have used</h2>
        <ul className="Modal--list">
          {techList?.map((tech, index) => (
            <li className="Modal--list--li" key={index}>{tech}</li>
          ))}
        </ul>

        <div className="ButtonsContainer">
          <button className="Button--View" onClick={() => window.open('https://github.com/Andresjl389')}>View more</button>
          <button className="Button--Close" onClick={close}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
