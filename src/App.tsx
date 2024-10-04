import React, { useState } from "react";
import Navbar from "./components/molecules/nav";
import Today from "./components/organism/Today";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen">
      <Navbar />

      <div className="flex-grow ml-64 p-6">
        <Today />

      </div>


      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl mb-4">Agregar nueva tarea</h2>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Nombre de la tarea"
            />
            <button
              className="bg-blue-500 text-white p-2 rounded w-full"
              onClick={() => setShowModal(false)}
            >
              Guardar tarea
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
