import React, { useState, useRef } from 'react';
import { Upload, Download } from 'lucide-react';

function App() {
  const [processedText, setProcessedText] = useState<string>('');
  const [originalFileName, setOriginalFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

 

  const processLine = (line: string): string => {
    // Check if line starts with '06' (company line)
    if (line.startsWith('06')) {
      // Get the position after the initial zeros (position 44)
      const numberStartPos = 43;
      const numberEndPos = numberStartPos + 11;
      
      // Extract the 11-digit number
      const originalNumber = line.substring(numberStartPos, numberEndPos);
      
      // Reorder the number: last 4 digits + first 7 digits
      const last4 = originalNumber.slice(-4);
      const reorderedNumber = '000' + last4 + '0000';
      
      // Replace the number in the exact position
      line = line.substring(0, numberStartPos) + 
             reorderedNumber + 
             line.substring(numberEndPos);

      // Find and update the date
  
     
    }
    return line;
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setOriginalFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      // Split text into lines, process each line, and join back
      const lines = text.split('\n');
      const processedLines = lines.map((line, index) => {
        // Skip first two lines and last two lines
        if (index < 2 || index >= lines.length - 2) {
          return line;
        }
        return processLine(line);
      });
      setProcessedText(processedLines.join('\n'));
    };
    reader.readAsText(file);
  };

  const handleDownload = () => {
    if (!processedText) return;

    const blob = new Blob([processedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = originalFileName || 'processed.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Text File Processor</h1>
        
        <div className="space-y-4">
          <div>
            <input
              type="file"
              accept=".txt"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileUpload}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors"
            >
              <Upload className="h-5 w-5" />
              Upload Text File
            </button>
          </div>

          {processedText && (
            <>
              <div className="border rounded p-4 bg-gray-50">
                <h2 className="font-semibold mb-2">Preview:</h2>
                <pre className="whitespace-pre-wrap text-sm font-mono">{processedText}</pre>
              </div>

              <button
                onClick={handleDownload}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="h-5 w-5" />
                Download Processed File
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;