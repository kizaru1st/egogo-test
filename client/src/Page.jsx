import TableComp from "./components/TableComp";

export default function Page() {
  return (
    <div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          New Customer
        </button>
      </div>
      <TableComp />
    </div>
  );
}
