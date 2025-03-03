import { useEffect } from "react";

const BookingModal = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/6xTXDgD1BhDbkg9vUuzf"
        style={{ width: "100%", border: "none", overflow: "hidden" }}
        scrolling="no"
        id="6xTXDgD1BhDbkg9vUuzf_1741041179339"
      />
    </div>
  );
};

export default BookingModal;
