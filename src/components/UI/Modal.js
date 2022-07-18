import Card from "./Card";
import Btn from "./Btn";

const Modal = ({ children, cssClass, title, close }) => {
  return (
    <>
      <div
        id="backdrop"
        className="w-full h-screen fixed top-0 left-0 z-10"
        onClick={close}
      />
      <Card cssClass="text-start">
        <header className="bg-black">
          <h2 className="text-white text-xl font-bold p-4">{title}</h2>
        </header>
        <section>
          <div className="p-4">{children}</div>
        </section>
        <footer className="border-t p-4 z-50">
          <Btn onClick={close}>Ok</Btn>
        </footer>
      </Card>
    </>
  );
};

export default Modal;
