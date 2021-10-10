import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import HookCounterTwo from './HookCounterTwo';

function App() {
  return (
    <div className="App">
        {/* <PostList /> */}
        {/* <PostForm /> */}
        {/* <ClassCounter />
        <HookCounter /> */}
        <HookCounterTwo />
        <HookCounterThree />
        <HookCounterFour />
    </div>
  );
}

export default App;
