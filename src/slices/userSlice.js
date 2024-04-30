import { createSlice } from "@reduxjs/toolkit";

function rand() {
  return Math.random().toString(36).substr(2);
}

function tokenn() {
  return rand() + rand() + rand() + "-" + rand() + rand() + rand();
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
    allUsers: [],
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },

    registerUser: (state) => {
      const { email, password } = state;

      if (email !== "" && password !== "") {
        const emailExists = state.allUsers.some((user) => user.email === email);

        if (emailExists) {
          alert("Email already exists. Please use a different email address.");
          return;
        }

        const user = {
          email,
          password,
          userId: Math.floor(Math.random() * 100) + 1,
        };

        state.allUsers.push(user);
        localStorage.setItem("allUsers", JSON.stringify(state.allUsers));
        alert("User registered successfully!");
      } else {
        alert("Please enter email and password for registration");
      }
    },

    loginUser: (state) => {
      const { email, password } = state;
      const users = JSON.parse(localStorage.getItem("allUsers")) || [];
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        localStorage.setItem("token", tokenn());
        alert("Login successful!");
      } else {
        alert("Invalid email or password.");
      }
    },
  },
});

export const { setEmail, setPassword, registerUser, loginUser } =
  userSlice.actions;

export const selectEmail = (state) => state.email;
export const selectPassword = (state) => state.password;
export const selectAllUsers = (state) => state.allUsers;

export default userSlice.reducer;
