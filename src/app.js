import React from 'react';
import ReactDom from 'react-dom';

function* colorIndex(colorSequence) {
    var index = 0;
    while (true) {
        index = index % colorSequence.length
        yield index++;
    }
}

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.colorSequence = ["black", "blue", "cyan", "green", "magenta", "red", "yellow"]
        this.invertedColors = ["#d8d8d8", "#9898A5" , "#f08080", "#e0ffff", "#ffffed", "#fafad2", "#FF6464" ]
        this.indexGenerator = colorIndex(this.colorSequence);
        let currentIndex = this.indexGenerator.next().value
        this.state = {textColor:this.invertedColors[currentIndex], colorName: this.colorSequence[currentIndex]}
    }

    onItemClick = (event) => {
        let index = this.indexGenerator.next().value
        let color = this.colorSequence[index]
        let invertColor = this.invertedColors[index]
        event.currentTarget.style.backgroundColor = color;
        this.setState({colorName: color, textColor: invertColor})
    }

    render() {
        return (
            <div className="col s1">
                <div onClick={this.onItemClick} className="square transition" style={{color:this.state.textColor,backgroundColor: this.state.colorName}}>
                    <div className="child">
                        <e>{this.state.colorName}</e>
                    </div>
                </div>
            </div>
        )
    }
}

class Grid extends React.Component {
    render() {

        let columns = ["square1", "square2", "square3", "square4", "square5", "square6", "square7", "square8", "square9", "square10"].map(()=> {
            return ( <Square/> )
        });
        let rows = ["row1", "row2", "row3", "row4", "row5", "row6", "row7", "row8", "row9", "row10"].map(()=> {
            return (
                <div className="row">
                    <div className="col s1 invis square"></div>
                    {columns}
                    <div className="col s1 invis square"></div>
                </div>
            )
        });

        return (
            <div>
                {rows}
            </div>
        )
    }
}

ReactDom.render(<Grid />, document.getElementById('app'))