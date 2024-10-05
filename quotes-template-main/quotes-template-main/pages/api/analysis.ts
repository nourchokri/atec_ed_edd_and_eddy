import { IncomingForm } from 'formidable';
import { spawn } from 'child_process';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

// Disable body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Initialize Formidable to handle file uploads
  const form = new IncomingForm({
    uploadDir: path.join(process.cwd(), '/public/uploads'), // Path where files will be uploaded
    keepExtensions: true, // Keep the file extension
  });

  form.parse(req, (err: any, fields: any, files: { image: any }) => {
    if (err) {
      console.error('Form parsing error:', err);
      return res.status(500).json({ message: 'Error parsing the file' });
    }

    const file = files.image;
    if (!file) {
      return res.status(400).json({ message: 'No image file uploaded' });
    }

    // Get the file path
    const filePath = Array.isArray(file) ? file[0].filepath : file.filepath;

    // Ensure the file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Run the Python script with the uploaded file as argument
    const pythonProcess = spawn('python', ['hazem.py', filePath]);

    // Listen for output from the Python script
    let pythonOutput = '';
    pythonProcess.stdout.on('data', (data) => {
      pythonOutput += data.toString();
    });

    // Listen for errors
    pythonProcess.stderr.on('data', (data) => {
      console.error(`Python script error: ${data}`);
      return res.status(500).json({ message: 'Error running the analysis' });
    });

    // Handle script completion
    pythonProcess.on('close', (code) => {
      if (code === 0) {
        // Send the output from the Python script back as the response
        return res.status(200).json({ result: pythonOutput });
      } else {
        console.error(`Python process exited with code ${code}`);
        return res.status(500).json({ message: 'Python script failed' });
      }
    });
  });
}
