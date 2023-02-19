const Contacts = () => {
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(formData)
    })
    console.log(formData);
  };
  return (
    <>
      <h1> Contact Us </h1>
      <form method="post" onSubmit={handleOnSubmit}>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" name="name"></input>
        </p>
        <p>
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email"></input>
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea name="message" />
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>
    </>
  );
};

export default Contacts;
