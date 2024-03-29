"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import placeholder from "@/assets/profilepicplaceholder.png";

interface UserMenuButtonProps {
  session: Session | null;
}

const UserMenuButton = ({ session }: UserMenuButtonProps) => {
  const user = session?.user;

  return (
    <div className="dropdown lg:dropdown-end dropdown-bottom">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        {user ? (
          <div className="tooltip tooltip-bottom" data-tip={user.name?.split(" ")[0]}>
            <Image
              src={user?.image || placeholder}
              alt="profile"
              width={40}
              height={40}
              className="w-7 h-7 lg:w-8 lg:h-8 rounded-[100%]"
            />
          </div>
        ) : (
          <div className="whitespace-nowrap">Sign in</div>
        )}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box menu-sm z-40 mt-3 w-52 bg-base-100 p-2 shadow "
      >
        <li>
          {user ? (
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Sign Out
            </button>
          ) : (
            <button onClick={() => signIn()}> Sign In </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default UserMenuButton;
