import FoodCard from "../components/foodCard/FoodCard";

function Home() {
    return (
        <>
            <h1>Home</h1>
            <FoodCard title="Food" description="So tasty!" cookingTime="2 mins" cost="$300" />
        </>
    );
}

export default Home;