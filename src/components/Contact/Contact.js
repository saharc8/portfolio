import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        title="my home"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.805699491698!2d34.56822198485188!3d31.419478981403074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15027f3cf193576f%3A0xb1c462fb7429bafe!2z16nXnNeZ15UgMTAsINeg16rXmdeR15XXqg!5e0!3m2!1siw!2sil!4v1628078615788!5m2!1siw!2sil"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>0545 791 441</p>

      <h4>Email</h4>
      <p>saharc8@gmail.com</p>

      <h4>Address</h4>
      <p>Slav 10 St, Netivot</p>
    </div>
  );
};

export default Contact;
