import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:3000/api/contacts";

function App() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const loadContacts = async () => {
    try {
      const res = await axios.get(`${API}/get`);
      setContacts(res.data);
    } catch (err) {
      console.error("Error loading contacts", err);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  
  const submit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post(`${API}/create`, form);
      setForm({ name: "", email: "", phone: "" });
      loadContacts();
    } catch (err) {
      console.error("Error saving contact", err);
    }
  };

  
  const deleteContact = async (id) => {
    try {
      await axios.delete(`${API}/delete/${id}`);
      loadContacts();
    } catch (err) {
      console.error("Error deleting contact", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Contact Manager
        </h1>

        {/* FORM */}
        <form onSubmit={submit} className="space-y-3">
          <input
            className="w-64 border p-2 rounded"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="w-64 border p-2 rounded"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            className="w-64 border p-2 rounded"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <button className="w-64 bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Save Contact
          </button>
        </form>

        {/* CONTACT LIST */}
        <div className="mt-6 space-y-3">
          {contacts.length === 0 && (
            <p className="text-center text-gray-500">No contacts</p>
          )}

          {contacts.map((c) => (
            <div
              key={c._id}
              className="border p-3 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-bold">{c.name}</p>
                <p className="text-sm">{c.email}</p>
                <p className="text-sm">{c.phone}</p>
              </div>

              <button
                onClick={() => deleteContact(c._id)}
                className="text-red-600 hover:text-red-800"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
