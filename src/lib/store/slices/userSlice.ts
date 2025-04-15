// lib/store/slices/userSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserFormValues } from "@/types/user";
import { fetchUsers, createUser, updateUser } from "@/lib/api/userApi";

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  return await fetchUsers();
});

export const addUser = createAsyncThunk("user/addUser", async (user: UserFormValues) => {
  return await createUser(user);
});

export const editUser = createAsyncThunk(
  "user/editUser",
  async ({ id, user }: { id: number; user: UserFormValues }) => {
    return await updateUser(id, user);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch users";
        state.loading = false;
      });
  },
});

export default userSlice.reducer;