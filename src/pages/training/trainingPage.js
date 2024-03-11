import AddWord from "components/addWord/addWord";
import Training from "components/training/training";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksWords } from "../../redux/data/data-operation";

export default function TrainingPage() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.data.tasks);
  useEffect(() => {
    dispatch(tasksWords());
  }, [dispatch]);
  console.log(tasks);
  return (
    <>
      {tasks.tasks && tasks.tasks.length === 0 ? (
        <Training />
      ) : (
        <AddWord tasks={tasks.tasks} />
      )}
    </>
  );
}
