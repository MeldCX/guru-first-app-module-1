import html from './template.html';

/**
 * Lists the key-value pairs pulled down from the Agent options
 * @type {[type]}
 */
export default class OptionsTable {
    constructor(agent) {
        this.agent = agent;
        this.app = document.querySelector('#app');
        this.init();
    }

    async init() {
        await this.getOptions();
        await this.render();
    }

    async getOptions() {
        this.options = await this.agent.Device.getOptions();
        console.log(this.options);
    }

    async render() {
        const el = document.createElement('template');
        el.innerHTML = html;

        const {firstChild: table} = document.importNode(el.content, true);
        const rows = Object.entries(this.options).forEach(([key, value]) => {
            const tr = document.createElement('tr');
            const tdKey = document.createElement('td');
            tdKey.innerHTML = key;
            const tdValue = document.createElement('td');
            tdValue.innerHTML = value;
            tr.appendChild(tdKey);
            tr.appendChild(tdValue);

            table.appendChild(tr);
        })

        app.innerHTML = '';
        app.appendChild(table);
    }
}
