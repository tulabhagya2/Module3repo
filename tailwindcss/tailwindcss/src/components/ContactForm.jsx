const ContactForm = () => {
  return (
    <section className="p-6">
      <h3 className="text-2xl font-bold text-center mb-4">Contact Form</h3>

      <form className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded px-3 py-2 
          focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded px-3 py-2 
          focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded px-3 py-2 
          focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          className="w-full bg-gray-200 hover:bg-gray-300 
          active:bg-gray-400 py-2 rounded">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
