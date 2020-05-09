import React,{useReducer} from 'react';
import './App.css';

// ----------------------use state----------------------------------
import ClassCounter from './components/useState/ClassCounter';
import HookCounter from './components/useState/HookCounter';
import HookCounterTwo from './components/useState/HookCounterTwo';
import HookCounterThree from './components/useState/HookCounterThree';
import HookCounterFour from './components/useState/HookCounterFour';

// ----------------------use effect---------------------------------------
// import ClassCounterOne from './useEffect/ClassCounterOne';
// import HookCounterOne from './useEffect/HookCounterOne';
// import ClassMouse from './useEffect/ClassMouse';
// import HookMouse from './useEffect/HookMouse';
// import MouseContainer from './useEffect/MouseContainer';
// import IntervalClassCounter from './useEffect/IntervalClassCounter';
// import IntervalHookCounter from './useEffect/IntervalHookCounter';
// import DataFetching from './useEffect/DataFetching';

// ------------------useContext------------------------------------
// import ComponentC from './components/usecontext/ComponentC';


// ------------------useReducer---------------------
// import Counter1 from './components/useReducer/Counter1;
// import Counter2 from './components/useReducer/Counter2';
// import Counter3 from './components/useReducer/Counter3';

// ----------------useReducerwithuseContext----------------------------------
// import ComponentA from './components/useReducerWithUseContext/ComponentA';
// import ComponentB from './components/useReducerWithUseContext/ComponentB';
// import ComponentC from './components/useReducerWithUseContext/ComponentC';


// ----------------------fetchingDataWithUseReducer--------------------------------
// import DataFetching1 from './components/FetchingDataWithuseReducer/DataFetching1';
// import DataFetching2 from './components/FetchingDataWithuseReducer/DataFetching2';

// -----------------------------callBackHook-----------------------------
// import ParentComponent from './components/CallBackHook/ParentComponent';

// ----------------memoHook--------------------------
// import Counter from './components/MemoHook/Counter';

// -------------------useRefHook----------------------------
// import FocusInput from './components/useRefHook/FocusInput';
// import ClassTimer from './components/useRefHook/ClassTimer';
// import HookTimer from './components/useRefHook/HookTimer';

//-------------------customHook-------------------------------
// import DocTitle1 from './components/CustomHook/DocTitle1';
// import DocTitle2 from './components/CustomHook/DocTitle2';
// import Counter1 from './components/CustomHook/Counter1';
// import Counter2 from './components/CustomHook/Counter2';
// import UserForm from './components/CustomHook/UserForm';

export const CountContext = React.createContext()


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


const initialState = 0
const reducer = (state, action) => {

    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function App() {
  
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      
      <ClassCounter/>
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/>

      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}

      {/* <UserContext.Provider value={'Tarun'}>
        <ChannelContext.Provider value={'Thota'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <Counter1/> */}
      {/* <Counter2/> */}
      {/* <Counter3/> */}

      {/* <DataFetching1/> */}
      {/* <DataFetching2 /> */}

      {/* <ParentComponent/> */}

      {/* <Counter/> */}

      {/* <FocusInput/> */}
      {/* <ClassTimer/>
      <HookTimer/> */}

      {/* <DocTitle1/>
      <DocTitle2/> */}
      {/* <Counter1/>
      <Counter2/> */}
      {/* <UserForm/> */}

    </div>
    


    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}> */
    // <div className="App">
    //    Count - {count}
    //   <ComponentA />
    //   <ComponentB />
    //   <ComponentC /> 
    // </div>
    // </CountContext.Provider>


  );
}

export default App;
