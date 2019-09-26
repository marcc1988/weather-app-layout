import React from 'react';
import './App.css';



function App() {
  return (
    <div className="App">
			
			<div className="main-banner">
				<div className="nav-back"><div>BACK</div></div>
				<div className="inner-content">
					<div className="card-header">
						<div className="container-left">
							<div className="container-temperature">
								<div>12</div><div className="container-temperature-degree"></div>
							</div>
							<div className="container-situation">CLOUDY</div>
							<div className="container-situation-specified">
								<div className="container-situation-humidity"><div>HUMIDITY</div><div>64%</div></div>
								<div className="container-situation-wind"><div>WIND</div><div>12K/M</div></div>
							</div>
						</div>
						<div className="container-right">
							<div className="container-name">PARIS</div>
						</div>
					</div>

					<div className="card">
						<div className="card-left  card-box">
							<div className="card-left-twitter">
								<div className="card-left-twitter-name">Twitter Feed </div>
							</div>
							<div className="card-left-bottom">
								<div><div className="card-left-circle"></div><div>Follow us on twitter for updated weather info.</div></div>
								<div><div className="card-left-circle"></div><div>Hot weather warning for the next week.</div></div>
								<div className="class-left-bottom-next"><div >Next</div></div>
							</div>
						</div>
						<div className="card-right  card-box">
							<div className="card-right-weather  monday">
								<div>MON</div>
								<div className="picture-rainy"></div>
								<div>
									<div>9</div>
									<div className="card-temperature-degree"></div>
								</div>
								<div className="card-weather-situation">Rainy</div>
							</div>
							<div className="card-right-weather  tuesday">
								<div>TUE</div>
								<div className="picture-sunny"></div>
								<div>
									<div>9</div>
									<div className="card-temperature-degree"></div>
								</div>
								<div className="card-weather-situation">Sunny</div>
							</div>
							<div className="card-right-weather  wednesday">
								<div>WED</div>
								<div className="picture-cloudy"></div>
								<div>
									<div>9</div>
									<div className="card-temperature-degree"></div>
								</div>
								<div className="card-weather-situation">Cloudy</div>
							</div>
							<div className="card-right-weather  thursday">
								<div>THU</div>
								<div className="picture-windy"></div>
								<div>
									<div>7</div>
									<div className="card-temperature-degree"></div>
								</div>
								<div className="card-weather-situation">Windy</div>
							</div>
							<div className="card-right-weather friday">
								<div>FRI</div>
								<div className="picture-sunny"></div>
								<div>
									<div>18</div>
									<div className="card-temperature-degree"></div>
								</div>
								<div className="card-weather-situation">Sunny</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default App;
