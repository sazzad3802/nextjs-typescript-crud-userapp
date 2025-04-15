// app/users/create/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/store/hooks";
import { addUser } from "@/lib/store/slices/userSlice";
import UserForm from "@/components/UserForm";
import { Box, Typography } from "@mui/material";

export default function CreateUserPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = (values: { name: string; email: string; age?: number }) => {
    dispatch(addUser(values));
    router.push("/users");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Create User</Typography>
      <UserForm onSubmit={handleSubmit} />
    </Box>
  );
}