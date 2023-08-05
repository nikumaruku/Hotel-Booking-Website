import "./mailList.css";

const MailList = () => {
  return (
    <div className="mailList__container">
      <div className="mailList__title">Save time, save money!</div>
      <div className="mailList__desc">Sign up and we'll send the best deals to you</div>
      <div className="mailList__input">
        <input type="text" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
