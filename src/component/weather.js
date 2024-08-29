import React from "react";

// class Weather extends Component {
//   state = {};
//   render() {
//     return <div>Hello Again and Again</div>;
//   }
// }

// export default Weather;

const Weather = (props) => {
  return (
    <div className="info">
      {props.temp && (
        <p className="info-key">
          temprature : <span className="info-value"> {props.temp} °C</span>
        </p>
      )}
      {props.city && (
        <p className="info-key">
          city : <span className="info-value"> {props.city}</span>
        </p>
      )}
      {props.country && (
        <p className="info-key">
          country : <span className="info-value"> {props.country}</span>
        </p>
      )}
      {props.humidity && (
        <p className="info-key">
          humidity : <span className="info-value"> {props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p className="info-key">
          description : <span className="info-value"> {props.description}</span>
        </p>
      )}
      {props.error && (
        <p className="info-key">
          error : <span className="info-value"> {props.error}</span>
        </p>
      )}
      {/* {props.city && <p> city : {props.city}</p>}
      {props.country && <p> country : {props.country}</p>}
      {props.humidity && <p> humidity : {props.humidity}</p>}
      {props.description && <p> description : {props.description}</p>}
      {props.error && <p> Error : {props.error}</p>}
 */}
      {/* <p> erro :  {props.temp}</p> */}
    </div>
  );
};

export default Weather;
