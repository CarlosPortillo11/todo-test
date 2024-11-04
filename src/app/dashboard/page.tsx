import { auth } from "@/config/auth/auth";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { fetchToDo } from "../actions/dashboard/fetchToDo";
import { ToDoProps } from "@/types/todo.types";

export default async function Dashboard() {
  /* const session = await auth();

  if (!session?.user?.id) return null;

  console.log(session); */
  const todos = await fetchToDo();

  return (
    <div className="w-full h-full">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-y-12 px-16">
          <h1 className="text-6xl font-semibold">Your ToDos</h1>
          <div className="w-full">
            <ToDoForm />
          </div>
          <div className="w-full">
            <ToDoList todos={todos?.data as ToDoProps[]} />
          </div>
        </div>
      </div>
    </div>
  );
}
