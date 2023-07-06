function Modal(props) {

    function cancelHandler(){
        props.onCancel(); 
    }

    function confirmHandler(){
        props.onConfirm();
    }

  return (
    <div className="modal">
      <h1> Are you sure?</h1>
      <button className="btn btn--alt" onClick={confirmHandler}>Confirm</button>
      <button className="btn" onClick={cancelHandler}> Cancel</button>
    </div>
  );
}

export default Modal;
