import SamuraiApp from "./App";
import ReactDOM from "react-dom/client";

it(`render without crashing`, () => {
    const div = document.createElement('div');
    const root = ReactDOM.createRoot(div);
    root.render(<SamuraiApp />);
    root.unmount();
})