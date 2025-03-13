import { useState } from "react";
const App = function () {
  const [jsonData, setJsonData] = useState({});
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleChange = (event) => {
    try {
      const parsedJson = { prompt: event?.target?.value || "" };
      setJsonData(parsedJson);
      setError(null);
    } catch (error) {
      console.error("Invalid JSON");
      setError("Invalid JSON");
    }
  };

  const handleSubmit = async () => {
    if (error) {
      setMessage("Fix the JSON before submitting.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      const result = await response.json();
      setMessage(`Success: ${JSON.stringify(result)}`);
    } catch (err) {
      setMessage("Error sending data. Make sure the server is running.");
    }
  };

  return (
    <div>
      <div className="max-w-full mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Prompt Cat</h1>
        <div className="grid grid-cols-2 gap-6">
          {/* Left: JSON Input */}
          <textarea
            className="w-full h-64 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter JSON here..."
            onChange={handleChange}
          />

          {/* Right: JSON Preview */}
          <pre className="w-full h-64 p-3 bg-white border rounded-lg overflow-auto">
            {JSON.stringify(jsonData, null, 2)}
          </pre>
        </div>
        {/* -------- */}
        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="mt-4 w-80 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>

          {/* Response Message */}
          {message && (
            <p className="mt-3 text-center text-gray-700">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
