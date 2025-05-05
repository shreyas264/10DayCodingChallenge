import axios from "axios";
import { useEffect, useState } from "react";
const apiKey = "4BQdbEcUY+WDpbkMwjW9vQ==BAyDBx3Y9k7ARed9"

function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  
    const getQuote = async () => {
      try {
        let res = await axios.get("https://api.api-ninjas.com/v1/quotes", {
          headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json',
          }
        });
        // if (!res.ok) {
        //   throw new Error(`HTTP error! status: ${res.status}`);
        // }
        console.log(res)
        const data =  res;
        setQuote(data.quote);

      } catch (err) {
        console.error("Failed to fetch quote", err);
      }
    }
    useEffect(() => {
      getQuote()
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${quote}" - ${author}`);
    alert("Copied to clipboard");
  }

  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4">
      <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Quote Generator</h1>
        <p className="text-xl mb-2">"{quote}"</p>
        <p className="text-right italic text-sm text-gray-500">- {author}</p>
        <div className="mt-6 flex gap-4 justify-center">
          <button onClick={getQuote} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded">
            New Quote
          </button>
          <button onClick={copyToClipboard} className="bg-gray-200 hover:bg-gray-300 text-black font-semibold px-4 py-2 rounded">
            Copy
          </button>
        </div>
      </div>
    </div>
  )

}

export default App;