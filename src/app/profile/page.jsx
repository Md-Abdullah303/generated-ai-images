"use client";
import { UpdateProfileModal } from "@/components/UpdateProfileModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const UserProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  return (
    <Card className="max-w-96 mx-auto border flex flex-col items-center gap-3.5 mt-10">
      <Avatar className="h-20 w-20">
        <Avatar.Image alt={user?.name} src={user?.image} />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
      <h1 className="text-xl font-semibold">{user?.name}</h1>
      <p>{user?.email}</p>
      <UpdateProfileModal/>
    </Card>
  );
};

export default UserProfilePage;
