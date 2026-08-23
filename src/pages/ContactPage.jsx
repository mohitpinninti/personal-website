import useFirestoreDocument from "../hooks/useFirestoreDocument";

const ContactPage = () => {
  const { data: contact, loading, error } = useFirestoreDocument("content", "contact");

  if (loading) {
    return <div className="contactPage"><p>Loading...</p></div>;
  }

  if (error || !contact) {
    console.error("[ContactPage] Failed to load contact content:", error);
    return (
      <div className="contactPage">
        <p>Error loading content. Check browser console for details.</p>
      </div>
    );
  }

  return (
    <div className="contactPage">
      <h1>{contact.heading}</h1>
      <p>{contact.body}</p>
      <br />
      <i>{contact.note}</i>
    </div>  
  );
};

export default ContactPage;
