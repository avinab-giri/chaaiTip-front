import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GenAvatarProps {
  name: string;
  className ?: string;
}

function getInitials(name: string): string {
  if (!name) return "";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

const GenAvatar: React.FC<GenAvatarProps> = ({ name,className }) => {
  return (
    <Avatar className={className}>
      <AvatarFallback>{getInitials(name)}</AvatarFallback>
    </Avatar>
  );
};

export default GenAvatar;
