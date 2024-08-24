export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRolesDescr = Record<UserRole, string>;

const RoleDescription: UserRolesDescr = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
