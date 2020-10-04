import React, { Component } from 'react'
import Select from 'react-select';




export class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue:'',
        }
    }
    







    
     options = [
        { value: '1', label: 'Notting Hill',id:'1',Locality:'',Pincode:'',City:'',Builder:'', },
        { value: '2', label: 'Silver Oak' },
        { value: '3', label: 'Bagmane Temple Bells' },
        { value: '4', label: 'Mayberry' },
        { value: '5', label: 'Royale Gardens' },
        { value: '6', label: 'Hermitage' }
      ];
       
     logChange(val) {
        console.log("Selected: " + val.value);
      }
    render() {
        return (
            <div>
                <div>
                <Select
                    name="form-field-name"
                    options={this.options}
                    onChange={this.props.logChange}
                />
            </div>
            </div>
        )
    }
}

export default Community
