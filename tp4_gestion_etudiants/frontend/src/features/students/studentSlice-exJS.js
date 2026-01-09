import { createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:5000/api/students";

/* ======================
   SLICE
====================== */

const studentSlice = createSlice({
  name: "students",
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {
    setStudents(state, action) {
      state.list = action.payload;
      state.loading = false;
    },
    addStudentSuccess(state, action) {
      state.list.push(action.payload);
    },
    updateStudentSuccess(state, action) {
      const index = state.list.findIndex(
        s => s.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteStudentSuccess(state, action) {
      state.list = state.list.filter(
        s => s.id !== action.payload
      );
    },
    setLoading(state) {
      state.loading = true;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export default studentSlice.reducer;

/* ======================
   ACTIONS
====================== */

export const {
  setStudents,
  addStudentSuccess,
  updateStudentSuccess,
  deleteStudentSuccess,
  setLoading,
  setError
} = studentSlice.actions;

/* ======================
   THUNKS (API EXPRESS)
====================== */

// GET
export const fetchStudents = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const list = Array.isArray(data) ? data : (data.students || []);
    dispatch(setStudents(list));
  } catch (err) {
    dispatch(setError(err.message));
  }
};

// POST
export const addStudent = (student) => async (dispatch) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    });
    const data = await res.json();
    dispatch(addStudentSuccess(data));
  } catch (err) {
    dispatch(setError(err.message));
    console.log(err.message)
  }
};

// PUT
export const updateStudent = (id, data) => async (dispatch) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const updated = await res.json();
    dispatch(updateStudentSuccess(updated));
  } catch (err) {
    dispatch(setError(err.message));
  }
};

// DELETE
export const deleteStudent = (id) => async (dispatch) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });
    dispatch(deleteStudentSuccess(id));
  } catch (err) {
    dispatch(setError(err.message));
  }
};
