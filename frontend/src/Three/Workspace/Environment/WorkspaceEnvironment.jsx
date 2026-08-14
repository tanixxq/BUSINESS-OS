import Room from "./Room";
import Desk from "./Desk";
import Chair from "./Chair";
import Laptop from "./Laptop";
import DeskLamp from "./DeskLamp";
import Pinboard from "./Pinboard";

const WorkspaceEnvironment = () => {
    return (
        <>
            <Room />
            <Desk />
            <Chair />
            <Laptop />
            <DeskLamp />
            <Pinboard />
            
        </>
    );
};

export default WorkspaceEnvironment;