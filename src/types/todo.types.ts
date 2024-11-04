export interface ToDoProps {
  title: string;
  content: string;
  status: "in-progress" | "completed";
  userId: number;
}
