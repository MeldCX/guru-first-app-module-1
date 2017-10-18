import "styles/app";
import Agent from "@meldcx/agent"
import OptionsTable from './OptionsTable';


const init = async() => {
    const agent = new Agent();
    // Wait for the agent initialisation
    await agent.onReadyAsync();
    // Instantiate our OptionsTable class with the Agent
    const table = new OptionsTable(agent);
}


window.onload = () => init();
