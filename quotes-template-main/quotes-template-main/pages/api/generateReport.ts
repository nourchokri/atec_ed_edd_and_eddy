// /pages/api/generateReport.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { spawn } from 'child_process';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { temperature, humidity, atmosphereComposition, soilQuality, waterAvailability, radiationLevels } = req.body;

      // Call the Python script with the data
      const pythonProcess = spawn('python3', ["C:/Users/nourc/Desktop/3eme/quotes-template-main/nour.py", 
        temperature,
        humidity,
        atmosphereComposition,
        soilQuality,
        waterAvailability,
        radiationLevels
      ]);

      pythonProcess.stdout.on('data', (data) => {
        console.log(`Python Output: ${data}`);
        res.status(200).send(data.toString()); // Send the output back to the frontend
      });

      pythonProcess.stderr.on('data', (data) => {
        console.error(`Python Error: ${data}`);
        res.status(500).send(data.toString());
      });
      
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error generating report:", error); // Log any errors
    res.status(500).json({ error: "Internal Server Error" });
  }
}
