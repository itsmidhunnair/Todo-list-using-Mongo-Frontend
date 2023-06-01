import TaskContainer from './Task/TaskContainer';
import TaskForm from './Task/TaskForm';

import style from '../../assets/css/home.module.css';

const Home = () => {
  return (
    <>
      <div className={style.formContainer}>
        <TaskForm />
      </div>
      <div className={style.taskContainer}>
        <TaskContainer />
      </div>
    </>
  );
};

export default Home;
