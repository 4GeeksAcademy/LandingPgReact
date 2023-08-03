import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<Jumbotron />
			<div className="d-flex m-auto ms-5 me-5 mb-5 row m-5 justify-content-center align-items-center">
				<Card 
					img="https://www.blogdelfotografo.com/wp-content/uploads/2020/09/paisaje-montan%CC%83oso-verde.webp"
					title="Green"
					description="This is a description of the first card"
					button="Find out More!"
				/>
				<Card
					img="https://www.blogdelfotografo.com/wp-content/uploads/2020/09/rana-macro.webp"
					title="Frog"
					description="This is a description of the second card"
					button="Find out More!"
				/>
				<Card
					img="https://www.blogdelfotografo.com/wp-content/uploads/2020/09/paisaje-1462x975.webp"
					title="Mountains"
					description="This is a description of the third card"
					button="Find out More!"
				/>
				<Card
					img="https://www.blogdelfotografo.com/wp-content/uploads/2020/09/tornado-1462x975.webp"
					title="Tromba"
					description="This is a description of the fourth card"
					button="Find out More!"
				/>
			</div>
			<Footer className="mt-auto" />
		</Fragment>
	)
};

export default App;