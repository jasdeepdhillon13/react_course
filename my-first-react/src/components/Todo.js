import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Model";

function Todo(props) {
  const [isModalOpen, setModalOpen] = useState(false);

  function deleteHandler() {
    setModalOpen(true);
  }

  function closeModalHandler(){
      setModalOpen(false); 
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button className="btn" onClick={deleteHandler}>
          {" "}
          Delete{" "}
        </button>
      </div>
      {isModalOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {isModalOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
