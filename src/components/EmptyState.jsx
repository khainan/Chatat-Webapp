import React, { Component } from "react";

class EmptyState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }
    render() {
        return (
        <div>
        <section class="section-body">
            <div class="container">
                <div id="underconstruction" class="text-center"></div>
            </div>
        </section>
        </div>
        );
    }
}

export default EmptyState;