// app/users/[id]/page.tsx
"use client";
import { useRouter, useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { editUser } from "@/lib/store/slices/userSlice";
import UserForm from "@/components/UserForm";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function EditUserPage() {
  const router = useRouter();
  const params = useParams();
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.user);
  const [user, setUser] = useState<{ name: string; email: string; age?: number } | null>(null);

  useEffect(() => {
    const foundUser = users.find((u) => u.id === Number(params.id));
    if (foundUser) setUser(foundUser);
  }, [users, params.id]);

  const handleSubmit = (values: { name: string; email: string; age?: number }) => {
    dispatch(editUser({ id: Number(params.id), user: values }));
    router.push("/users");
  };

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Edit User</Typography>
      <UserForm initialValues={user} onSubmit={handleSubmit} isEdit />
    </Box>
  );
}