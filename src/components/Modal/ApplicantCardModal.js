import React,{useState} from "react";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement
Modal.setAppElement('#root');


function ApplicantCardModal(props) {


  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div >
        <h3 onClick={openModal}>{props.applicant.name}</h3>
      <Modal
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
            <h4>Presentation</h4>
            <p>{props.applicant.presentation}</p>
            <h4>Arbetslivserfarenhet</h4>
            {props.applicant.experience.map(experience =>(
                 <p>{experience}</p>
            ))}


        </div>

        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

export default ApplicantCardModal;