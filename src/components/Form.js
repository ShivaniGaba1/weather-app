import React from 'react';


class Form extends React.Component{
    render(){
        return(
            <div className="myForm">


                <form onSubmit={this.props.getWeather} >

            <select id = "endpoint">
                          			 <option value="api.openweathermap.org/data/2.5/">Actual server</option>
                          			 <option value="cec03d6b-ade9-473d-8325-d5b14ffb78c0.mock.pstmn.io/">Mock server</option>
            </select>

                      <h2 className="head-l">Enter city to find out weather info.</h2>
		     <br/>
		     <br/>
                    <input type="text" className="myInputs form-control" name="city" placeholder="City"/>
                   
                    <button className="btn btn-warning" >Get Weather</button>
                </form>
            </div>
        );
    }
}


export default Form;
