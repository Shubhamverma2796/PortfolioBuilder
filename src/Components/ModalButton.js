import { useModal, Modal } from 'react-morphing-modal';
import 'react-morphing-modal/dist/ReactMorphingModal.css';


function ModalButton(props) {
    const { modalProps, getTriggerProps } = useModal({
        background: 'white'
    });

    return (
        <div className="btns" >
            <button {...getTriggerProps()} className="purple btn-main">Experience & Skills</button>
            <Modal {...modalProps} >{props.children}</Modal>
            {/* <button {...getTriggerProps} className="btn-main">Work Experience</button> */}
        </div>
    )
}


export default ModalButton;
