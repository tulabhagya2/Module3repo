const TableSection = () => {
  return (
    <section className="p-6">
      <h3 className="text-2xl font-bold text-center mb-4">User Table</h3>

      <div className="overflow-x-auto">
        <table className="w-full border bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3].map((i) => (
              <tr key={i} className="odd:bg-gray-100 hover:bg-gray-200">
                <td className="border p-2">User {i}</td>
                <td className="border p-2">user{i}@mail.com</td>
                <td className="border p-2">User</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableSection;
