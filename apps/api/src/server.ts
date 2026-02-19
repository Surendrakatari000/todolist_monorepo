import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
// #region agent log
fetch('http://127.0.0.1:7244/ingest/376c6d9d-a20e-4c0d-b00c-0e1788e00823',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({runId:'pre-fix',hypothesisId:'A',location:'apps/api/src/server.ts:6',message:'server.ts loaded',data:{node:process.version,portEnv:process.env.PORT ?? null},timestamp:Date.now()})}).catch(()=>{});
// #endregion agent log

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.listen(PORT, () => {
  // #region agent log
  fetch('http://127.0.0.1:7244/ingest/376c6d9d-a20e-4c0d-b00c-0e1788e00823',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({runId:'pre-fix',hypothesisId:'B',location:'apps/api/src/server.ts:21',message:'app.listen callback fired',data:{port:PORT},timestamp:Date.now()})}).catch(()=>{});
  // #endregion agent log
  console.log(`Server running on http://localhost:${PORT}`);
});
