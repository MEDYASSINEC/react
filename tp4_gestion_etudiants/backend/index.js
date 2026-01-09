const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Chemin du fichier JSON
const filePath = path.join(__dirname, "students.json");

/* ======================
   FONCTIONS UTILITAIRES
====================== */

// Lire le fichier JSON
function readStudents() {
  const data = fs.readFileSync(filePath, "utf-8");
  const parsed = JSON.parse(data);
  return parsed.students || [];
}

// Écrire dans le fichier JSON
function writeStudents(data) {
  const payload = { students: data };
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2));
}

/* ======================
   CRUD STUDENTS
====================== */

// 🔹 GET - Tous les étudiants
app.get("/api/students", (req, res) => {
  const students = readStudents();
  res.json(students);
});

// 🔹 GET - Un étudiant par ID (string)
app.get("/api/students/:id", (req, res) => {
  const { id } = req.params;
  const students = readStudents();

  const student = students.find(s => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// 🔹 POST - Ajouter un étudiant
app.post("/api/students", (req, res) => {
  const { id, prenom, nom, niveau, dateInscription } = req.body;
  

  if (!id ) {
    return res.status(400).json({ message: "id est requis" });
  }

  const students = readStudents();

  // Vérifier si l'id existe déjà
  if (students.some(s => s.id === id)) {
    return res.status(400).json({ message: "ID déjà utilisé" });
  }

  const newStudent = { id, prenom, nom, niveau, dateInscription };
  students.push(newStudent);
  writeStudents(students);

  res.status(201).json(newStudent);
});

// 🔹 PUT - Modifier un étudiant
app.put("/api/students/:id", (req, res) => {
  const { id } = req.params;
  const students = readStudents();

  const index = students.findIndex(s => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students[index] = {
    ...students[index],
    ...req.body,
    id // empêche la modification de l'id
  };

  writeStudents(students);
  res.json(students[index]);
});

// 🔹 DELETE - Supprimer un étudiant
app.delete("/api/students/:id", (req, res) => {
  const { id } = req.params;
  let students = readStudents();

  const lengthBefore = students.length;
  students = students.filter(s => s.id !== id);

  if (students.length === lengthBefore) {
    return res.status(404).json({ message: "Student not found" });
  }

  writeStudents(students);
  res.json({ message: "Student deleted" });
});

/* ======================
   SERVER
====================== */

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 API Students running on http://localhost:${PORT}`);
});
