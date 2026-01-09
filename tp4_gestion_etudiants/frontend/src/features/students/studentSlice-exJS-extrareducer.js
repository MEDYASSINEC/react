import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:5000/api/students";

/* ======================
   ASYNC THUNKS
====================== */

// GET - récupérer tous les students
export const fetchStudents = createAsyncThunk(
  "students/fetch",
  async () => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch students");
    return res.json();
  }
);

// POST - ajouter un student
export const addStudent = createAsyncThunk(
  "students/add",
  async (student) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    });

    if (!res.ok) throw new Error("Failed to add student");
    return res.json();
  }
);

// PUT - modifier un student
export const updateStudent = createAsyncThunk(
  "students/update",
  async ({ id, data }) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Failed to update student");
    return res.json();
  }
);

// DELETE - supprimer un student
export const deleteStudent = createAsyncThunk(
  "students/delete",
  async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    if (!res.ok) throw new Error("Failed to delete student");
    return id;
  }
);

/* ======================
   SLICE
====================== */

const studentSlice = createSlice({
  name: "students",
  initialState: {
    list: [],
    status: "idle",
    error: null
  },
  reducers: {}, // ❌ plus besoin de reducers synchrones
  extraReducers: (builder) => {
    builder

      // GET
      .addCase(fetchStudents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // POST
      .addCase(addStudent.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      // PUT
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          s => s.id === action.payload.id
        );
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })

      // DELETE
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.list = state.list.filter(
          s => s.id !== action.payload
        );
      });
  }
});

export default studentSlice.reducer;
