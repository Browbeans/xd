import { ChangeEvent, Component, CSSProperties } from "react"; 

interface Props { 
    onChange: (value: string) => void;
    /** Delays calls to onChange in ms */
    delay?: number;
}

interface State {
    value: string;
}

class Input extends Component<Props, State> {
    timer?: NodeJS.Timeout; 
    state: State = { value: '' }

    
    handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value: event.target.value })
    }
    
    componentDidUpdate(_: Props, prevState: State) {
        const { delay, onChange } = this.props
        const { value } = this.state;
        
        if (value && prevState.value !== value) {
            if (delay) {
                if (this.timer) clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    onChange(this.state.value);
                }, delay)
            } else {
                onChange(this.state.value);
            }
        }
    }

    render() {

        return (
            <input placeholder="Sök efter bilder" 
            style={rootStyle} 
            value={this.state.value} 
            onChange={this.handleInput} />
        )
    }
}

const rootStyle: CSSProperties = {
    flex: '1',
    borderRadius: 100, 
    height: '2.2rem', 
    padding: '0 1rem',
    fontSize: '1rem', 
    outline: 'none'
}

export default Input;