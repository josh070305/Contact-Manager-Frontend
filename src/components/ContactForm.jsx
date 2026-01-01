import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Add Contact</h2>

      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 border rounded mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
        Save Contact
      </button>
    </div>
  );
}

export default ContactForm;
