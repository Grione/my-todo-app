export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type Filter = "all" | "completed" | "active";