import { createPortal } from 'react-dom';

const PopUpContent = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <p className="text-green-600 font-bold absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white p-2 border border-green-600 rounded">
          Copied to clipboard!
        </p>
      )}
    </section>,
    document.querySelector('#popup-root'),
  );
};

export default PopUpContent;
