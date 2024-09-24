import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal(
  { title, content, author, createdAt, image, likes, userImage, comments },
  ref
) {
  const dialogChild = useRef();

  useImperativeHandle(ref, () => ({
    openModal: () => {
      dialogChild.current.showModal();
    },
  }));

  return (
    <dialog ref={dialogChild}>
      <div>
        <p>{title}</p>
        <img src={image} alt="" />
        <p>{content}</p>
        <form action="">
          <button
            type="button"
            onClick={() => {
              dialogChild.current.close();
            }}
          >
            닫기
          </button>
        </form>
      </div>
    </dialog>
  );
});

export default Modal;
