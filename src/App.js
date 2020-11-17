import React from "react";
import ModalOverlay from "./components/ModalOverlay/ModalOverlay";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import CloseIcon from "./components/CloseIcon/CloseIcon";

class App extends React.PureComponent {

	state = {
		overlay: false, 
		firstModal: false,
		secondModal: false,
	}

	modalText = {
		firstModal: {
			headerText: "Do you want to delete this file?",
			bodyText: "Once you delete this file, it won’t be possible to undo this action.",
			bodyQuestion: "Are you sure you want to delete it?"
		},
		secondModal: {
			headerText: "Do you want to send this file?",
			bodyText: "The file is not a bird, once fly away you cannot catch it back.",
			bodyQuestion: "Are you sure you want to send it?"
		}
	}

	showFirstModal = () => {
		this.setState({overlay: !this.state.overlay, firstModal: !this.state.firstModal })
	}
	showSecondModal = () => {
		this.setState({overlay: !this.state.overlay, secondModal: !this.state.secondModal })
	}
	closeModals = () => {
			this.setState({overlay: false, firstModal: false, secondModal: false })
	}
	overlayHandler = (e) => {
		if(e.target.className.includes("modal__overlay")) {
			this.closeModals();
		}
	}
	confirmButton = () => { alert("You confirmed your action."); this.closeModals(); }

	render() {
		const { overlay, firstModal, secondModal } = this.state;
		let headerText, bodyText, bodyQuestion;

		if(firstModal === true) {
			headerText = this.modalText.firstModal.headerText;
			bodyText = this.modalText.firstModal.bodyText;
			bodyQuestion = this.modalText.firstModal.bodyQuestion;
		}

		if(secondModal === true) {
			headerText = this.modalText.secondModal.headerText;
			bodyText = this.modalText.secondModal.bodyText;
			bodyQuestion = this.modalText.secondModal.bodyQuestion;
		}

		return(
			<>
				{overlay && 
					<ModalOverlay action={this.overlayHandler} inner={
						<Modal 	headerText={headerText} 
								bodyText={bodyText}
								bodyQuestion={bodyQuestion}
								closeIcon={<CloseIcon action={this.closeModals}/> } 
								buttons={[
									<Button key="1" text="Ok" action={this.confirmButton} />,
									<Button key="2" text="Cancel" action={this.closeModals} /> ]} />
						} />
				}

				<div className="actions">
					<Button text="Open First Modal" action={this.showFirstModal}/>
					<Button text="Open First Modal" action={this.showSecondModal} style={{backgroundColor: "red", color: "white"}}/>
				</div>
			</>
		);
	};
};

export default App