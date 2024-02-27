import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffect";
import FetchDemo from "./exercises/FetchDemo";

export default function App() {
    const [selectedView, setSelectedView] = useState("info");

    function handleSelected(selected: string) {
        setSelectedView(selected);
    }

    return (
        <>
            <div className="outer-div-style">
                <div className="header-style">
                    <h2>React Exercises</h2>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 1, padding: 10 }}>
                        <Buttons onSelected={handleSelected} />
                    </div>
                    <div className="exercise-style">
                        {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
                        {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
                        {selectedView == "props1" ? <PropsDemo title="Props Demo" /> : null}
                        {selectedView == "list1" ? <ListDemo title="List Demo" /> : null}
                        {selectedView == "ReactEvents1" ? <EventDemo title="React Events" /> : null}
                        {selectedView == "FormsUncontrolled" ? <FormUncontrolled title="Forms Uncontrolled" /> : null}
                        {selectedView == "StateDemo1" ? <StateDemo1 title="State Demo" /> : null}
                        {selectedView == "StateDemo2" ? <StateDemo2 title="State Demo2" /> : null}
                        {selectedView == "StateDemo3" ? <StateDemo3 title="State Demo3" /> : null}
                        {selectedView == "UseEffectDemo" ? <UseEffectDemo title="UseEffect Demo" /> : null}
                        {selectedView == "FetchDemo" ? <FetchDemo title="Fetch Demo" /> : null}
                    </div>
                </div>
            </div>
        </>
    );
}

type ButtonProps = {
    onSelected: (selected: string) => void;
};

const Buttons = (props: ButtonProps) => {
    const { onSelected: handleSelected, btnStyle: btnStyle } = props;
    return (
        <>
            <button className="btn-w100" onClick={() => handleSelected("info")}>
                Info
            </button>
            {/* Add a new button for each of the exercises you complete */}
            <button className="btn-w100" onClick={() => handleSelected("props1")}>
                Props demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("list1")}>
                List demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("ReactEvents1")}>
                Event demo (ImageButtons)
            </button>
            <button className="btn-w100" onClick={() => handleSelected("FormsUncontrolled")}>
                Forms Uncontrolled
            </button>
            <button className="btn-w100" onClick={() => handleSelected("StateDemo1")}>
                State Demo1 (Count)
            </button>
            <button className="btn-w100" onClick={() => handleSelected("StateDemo2")}>
                State Demo2 (Update Object)
            </button>
            <button className="btn-w100" onClick={() => handleSelected("StateDemo3")}>
                State Demo3 (Update Array)
            </button>
            <button className="btn-w100" onClick={() => handleSelected("FetchDemo")}>
                Fetch Demo
            </button>
        </>
    );
};
