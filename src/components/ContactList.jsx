function ContactList() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Contacts</h2>

      <ul>
        <li className="flex justify-between items-center mb-3">
          <span>John Doe</span>
          <button className="text-red-500">Delete</button>
        </li>

        <li className="flex justify-between items-center">
          <span>johndoe@gmail.com</span>
          <button className="text-red-500">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default ContactList;
