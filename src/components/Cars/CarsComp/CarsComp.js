import React from "react";

class CarsComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.car.id,
            brand: this.props.car.brand,
            price: this.props.car.price,
            year: this.props.car.year
        }
    }

    render() {
        const {id, brand, price, year} = this.state
        return (
            <>
                <hr/>
                <h2>id: {id}</h2>
                <h2>brand: {brand}</h2>
                <h2>price: {price}</h2>
                <h2>year: {year}</h2>
            </>
        )
    }
}

export default CarsComp;