import TaskContainer from './Task/TaskContainer';
import TaskForm from './Task/TaskForm';

import style from '../../assets/css/home.module.css';
import Header from '../header/Header';

const Home = () => {
  return (
    <>
      <Header/>
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
