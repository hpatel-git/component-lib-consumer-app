import React from "react";
import { FactService, Facts } from "component-library"

interface FactListProps {

}
interface FactListState {
    facts: Array<Facts>
}
class FactList extends React.Component<FactListProps, FactListState> {

    constructor(props: FactListProps) {
        super(props);
        this.state = { facts: []};
      }

    componentDidMount() {
        const service:FactService = new FactService();
        service.fetchAllFacts().then(item => {
            console.log(`Items , ${item}`)
            this.setState({facts: item})
        }).catch(error => {
            // Handle the error scenario to show error message
        });
    }
    render() {
        return (
          <div>
            <h1>Welcome to Facts</h1>
            {this.state.facts && this.state.facts.map((item:Facts) => {
                return(
                    <div style={{padding: "5px", border: "2px solid black", alignContent: "flex-start"}}>
                        <div style={{alignItems: "flex-start"}}>
                           <span><b>ID:</b></span> <span>{item._id}</span>
                        </div>
                        <div>
                           <span> <b>Type:</b> </span> <span>{item.type}</span>
                        </div>
                        <div>
                           <span><b>Text:</b> </span> <span>{item.text}</span>
                        </div>
                        <div>
                           <span><b>Votes:</b> </span> <span>{item.upvotes}</span>
                        </div>
                        {item.user &&
                            <div>
                                <span><b>User Name:</b> </span> <span>{item.user.name.first}, {item.user.name.last}</span>
                            </div>
                        }
                    </div>
                )
            })}
          </div>
        );
      }
}

export default FactList;