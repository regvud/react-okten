import React from "react";
import axios from "axios";
import CarsComp from "./CarsComp/CarsComp";

// отримати автівки та вивести їх використовуючи класові копмоненти
class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        axios.get('http://owu.linkpc.net/carsAPI/v1/cars').then(({data}) => this.setState({cars: data}))
    }

    render() {
        const {cars} = this.state
        return (
            <>
                {cars?.map((car, id) => <CarsComp car={car} key={id}/>)}
            </>
        )
    }
}

export default Cars